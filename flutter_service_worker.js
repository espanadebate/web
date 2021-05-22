'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f9a31bd769d1bc1052a5f057dee85e76",
"assets/assets/Gotham.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/assets/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/assets/GothamItalic.ttf": "0281e72bd039997947cb7c2d00ae4b94",
"assets/assets/GothamLight.otf": "4ac7dbb4f9f9f467db596e759b8bf7db",
"assets/assets/jaen_big.png": "a8761e390555aae412c9ef071d11608c",
"assets/assets/jaen_bubble.png": "8017e70963d017adc07e8a345f405862",
"assets/assets/kike_bubble.png": "2ccee94ba594def9c9673a18bd6e9423",
"assets/assets/kike_bubble2.png": "60e283ec3182f236cf255bfa60f984af",
"assets/assets/kike_bubble_blur.png": "740a547ecf910c8d538429a0c72882c7",
"assets/assets/logoweb.png": "77dc067e99b9b80dcd0de3a4489b0712",
"assets/assets/logo_horizontal.png": "595fbe4a0fafff5946bbb21bad626a7e",
"assets/assets/logo_icon.png": "24eeda1386159b01c6cf460c8c9a900c",
"assets/assets/logo_small.png": "a1f14b43d746fedda7ed47c4c3c2490e",
"assets/assets/logo_top.png": "2ed555eba2b260f61df21a7b49d7deff",
"assets/assets/oviedo_big.png": "0329f76f6ad1f418e881219a39105e44",
"assets/assets/oviedo_bubble.png": "a84b0f9beea4411e17a7a3d8160354ee",
"assets/assets/spain_icon.png": "def18c3238afcaabd2f8d0fd7cb04d5f",
"assets/assets/spain_icon_phone.png": "65be0d5657340ba59418bf7e031e538e",
"assets/assets/spain_icon_phone2.png": "9acd7ef609f5c720678473e492ab08c9",
"assets/assets/valencia_big.png": "b351ad824028aa649db060a9a9522209",
"assets/assets/valencia_bubble.png": "c922ab3437fc0434941ea145dd9748ae",
"assets/FontManifest.json": "e8c16efba0dde2c1f133db17af527123",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b5c235aaec8d47672cb07724f4ad5aa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4154f9cf83670e8a231f11fe52b85e02",
"/": "4154f9cf83670e8a231f11fe52b85e02",
"main.dart.js": "fb5f17e83ef5094f8a4e918f49b6bb3e",
"manifest.json": "b9ba0c68f2301160b01327784f03551b",
"version.json": "b1093c30f71a930a709b6a881199183d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
