'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "adb413705df32553f73710f9bfa3dc38",
"assets/assets/abellan.png": "dd58ae3bd6d97dd15369008da491be41",
"assets/assets/bellanco.png": "06093f50880dc29fb01f0edad3f7987b",
"assets/assets/bisa.png": "1a82087c79b0855175c8478e31cb4edd",
"assets/assets/canario.png": "8c19f3a1b304697386732e3946d05e90",
"assets/assets/carlota.png": "a3ff58d91b67cb239e945d81c5ff0641",
"assets/assets/cda.png": "d6b877060dc351275f8daee7ce862ce4",
"assets/assets/chelu.png": "b7e62e49987c243cf524c17f53d5c875",
"assets/assets/corpa.png": "a7a4fb52414e81847800a15a29e536bf",
"assets/assets/facebook.png": "afd3002f8c5ab441531f9d1458d8e4e4",
"assets/assets/fer.png": "24fb17e087e1872517949823050c1a43",
"assets/assets/gonzalo.png": "5da0c1bdcf3df586d534a1e214210d82",
"assets/assets/gorka.png": "14171116f472a5aca6b8891028864369",
"assets/assets/Gotham.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/assets/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/assets/GothamItalic.ttf": "0281e72bd039997947cb7c2d00ae4b94",
"assets/assets/GothamLight.otf": "4ac7dbb4f9f9f467db596e759b8bf7db",
"assets/assets/guille.png": "411c1e3b7a73d3770e539be532f8e8dd",
"assets/assets/ignasi.png": "df7c3c38787834fa1df4b5a1a07498b1",
"assets/assets/ines.png": "dcd67a48594386a4da51c5cbe0600fec",
"assets/assets/inigo.png": "05f518825f0cbbee5137453cbcbdf617",
"assets/assets/instagram.png": "75cb042703bb5c762702ab9a4b3ca542",
"assets/assets/jaen.png": "b1ba5e319b586a86e085edad319d29f6",
"assets/assets/jaen_big.png": "a8761e390555aae412c9ef071d11608c",
"assets/assets/jaen_bubble.png": "8017e70963d017adc07e8a345f405862",
"assets/assets/juncal.png": "781346c3169e16e2fcd3f9eba37e3f3c",
"assets/assets/kike_bubble2.png": "60e283ec3182f236cf255bfa60f984af",
"assets/assets/logoweb.png": "77dc067e99b9b80dcd0de3a4489b0712",
"assets/assets/logo_icon.png": "24eeda1386159b01c6cf460c8c9a900c",
"assets/assets/logo_small.png": "a1f14b43d746fedda7ed47c4c3c2490e",
"assets/assets/logo_top.png": "2ed555eba2b260f61df21a7b49d7deff",
"assets/assets/lumbreras.png": "00899b015f5e7c2e34cc4cabe78f2dd8",
"assets/assets/maria.png": "4e1cf9d7ddfad07d581ab28a92e60f38",
"assets/assets/monedero.png": "2b2eeacf24e6ad7fb6850feaee4d583a",
"assets/assets/olaizola.png": "0cf7c64565e8c92b480d546d8c915a70",
"assets/assets/olmos.png": "b8b82de40d09e99c972c467e4d72b011",
"assets/assets/oviedo_big.png": "0329f76f6ad1f418e881219a39105e44",
"assets/assets/oviedo_bubble.png": "a84b0f9beea4411e17a7a3d8160354ee",
"assets/assets/perdiguer.png": "d0b08382ecb6627e9a83db9163ed2bf2",
"assets/assets/perucho.png": "375798f091314088a4d9d051e3881986",
"assets/assets/prieto.png": "08f5b1a3d5c34633267ba568f130c41e",
"assets/assets/rosalia.png": "fb4ccfb6e3ee81bba369573bb131a03b",
"assets/assets/secret.png": "39c24839669875ae000a2ffc481bdc2e",
"assets/assets/simon.png": "26107c00d21da96f089dd7642fb8702c",
"assets/assets/soriano.png": "2572037dd765d3635b3fd33c46acc8ca",
"assets/assets/spain_icon.png": "def18c3238afcaabd2f8d0fd7cb04d5f",
"assets/assets/spain_icon_phone.png": "65be0d5657340ba59418bf7e031e538e",
"assets/assets/twitter.png": "dbe912faa8567227aa056ae3ea08c381",
"assets/assets/ucjc.png": "7ee0a1a2cb9effcec29358e300128c96",
"assets/assets/upv.png": "7bc221efe9fae3571071835046344e39",
"assets/assets/upv_bio.png": "bab308f892dd90f055e0ca59f603c25f",
"assets/assets/valencia_big.png": "b351ad824028aa649db060a9a9522209",
"assets/assets/valencia_bubble.png": "c922ab3437fc0434941ea145dd9748ae",
"assets/FontManifest.json": "e8c16efba0dde2c1f133db17af527123",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "f9dbef4571e0aee1a8283e2e75e53667",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eeb3b02d88fce42699965c4114fa0e7c",
"/": "eeb3b02d88fce42699965c4114fa0e7c",
"main.dart.js": "e002c808f7905670c66d7f5718456ccb",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
