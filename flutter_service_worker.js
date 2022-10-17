'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d400d774465d1103cdbe3dc6d03e970a",
"assets/assets/abellan.png": "c770bf6fded25865e0663a1b2d8e8e9f",
"assets/assets/alena.png": "8ef82354dcc7a56272e7653526db0ea0",
"assets/assets/bellanco.png": "20ba4b97ebc52cfaa7d97585b1d5a5d7",
"assets/assets/belmonte.png": "51845928e2e58de1851c27a2808fef88",
"assets/assets/bisa.png": "1a82087c79b0855175c8478e31cb4edd",
"assets/assets/canario.png": "c3fcd67126063ca04e25159e096ba424",
"assets/assets/carlos.png": "7e7c604c0d96be5d7bd48aefdfbcc8a2",
"assets/assets/carlota.png": "a3ff58d91b67cb239e945d81c5ff0641",
"assets/assets/cda.png": "d6b877060dc351275f8daee7ce862ce4",
"assets/assets/chelu.png": "b7e62e49987c243cf524c17f53d5c875",
"assets/assets/corpa.png": "a7a4fb52414e81847800a15a29e536bf",
"assets/assets/daria.png": "b75993a8293711e70040d6e12892433a",
"assets/assets/delia.png": "9bfe03bd756e3ef98e5e6a75ed15fe06",
"assets/assets/edu.png": "e6592a3fe6f3e335d6e247e7291366dd",
"assets/assets/facebook.png": "afd3002f8c5ab441531f9d1458d8e4e4",
"assets/assets/fer.png": "0f46b545a55d4ffc781ba3b52b322b76",
"assets/assets/gonzalo.png": "5da0c1bdcf3df586d534a1e214210d82",
"assets/assets/gorka.png": "14171116f472a5aca6b8891028864369",
"assets/assets/Gotham.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/assets/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/assets/GothamItalic.ttf": "0281e72bd039997947cb7c2d00ae4b94",
"assets/assets/GothamLight.otf": "4ac7dbb4f9f9f467db596e759b8bf7db",
"assets/assets/guille.png": "d14f63ee732089401490758f8547df9b",
"assets/assets/guillef.png": "bcbc0c2188c563cc51b543c7ed85bffb",
"assets/assets/ignasi.png": "df7c3c38787834fa1df4b5a1a07498b1",
"assets/assets/ines.png": "0a1cad437ad3643d682d5f7ee21c97d6",
"assets/assets/inigo.png": "05f518825f0cbbee5137453cbcbdf617",
"assets/assets/instagram.png": "75cb042703bb5c762702ab9a4b3ca542",
"assets/assets/isabella.png": "4065bf0e6f3f06cdf192c2d3c310d080",
"assets/assets/ivan.png": "9b30ba11eeb60665d33e47f9f40ee85d",
"assets/assets/jaen.png": "b1ba5e319b586a86e085edad319d29f6",
"assets/assets/jaen_big.png": "a8761e390555aae412c9ef071d11608c",
"assets/assets/jaen_bubble.png": "8017e70963d017adc07e8a345f405862",
"assets/assets/jorge.png": "3bb858288aeba14950603fd23f83c8fb",
"assets/assets/juanita.png": "4b58a14580991b68e26fd5c05396c35a",
"assets/assets/juanjo.png": "04edc5e7fbab41a048b46bb7e41709d1",
"assets/assets/julia.png": "c72f34285dc7598b117b046cf41a41f0",
"assets/assets/juncal.png": "781346c3169e16e2fcd3f9eba37e3f3c",
"assets/assets/kike_bubble2.png": "60e283ec3182f236cf255bfa60f984af",
"assets/assets/logoweb.png": "77dc067e99b9b80dcd0de3a4489b0712",
"assets/assets/logo_icon.png": "24eeda1386159b01c6cf460c8c9a900c",
"assets/assets/logo_small.png": "a1f14b43d746fedda7ed47c4c3c2490e",
"assets/assets/logo_top.png": "2ed555eba2b260f61df21a7b49d7deff",
"assets/assets/luisfelipe.png": "5d2c212b29ec159a9799a5da0990c2a4",
"assets/assets/lumbreras.png": "00899b015f5e7c2e34cc4cabe78f2dd8",
"assets/assets/mado.png": "82a6f596385eb7108e65ebebc68d8d30",
"assets/assets/marcoantonio.png": "2ca7135abced6aa354aa563af149c060",
"assets/assets/maria.png": "4e1cf9d7ddfad07d581ab28a92e60f38",
"assets/assets/miragall.png": "295a3793de81934490c632d2e619613e",
"assets/assets/monedero.png": "2b2eeacf24e6ad7fb6850feaee4d583a",
"assets/assets/ohara.png": "6d6edce9910351a4b1cecc773f61b832",
"assets/assets/olaizola.png": "0cf7c64565e8c92b480d546d8c915a70",
"assets/assets/olmos.png": "b8b82de40d09e99c972c467e4d72b011",
"assets/assets/onate.png": "67bc3b817f2f490aa399b8546c9fbc2d",
"assets/assets/oviedo_big.png": "0329f76f6ad1f418e881219a39105e44",
"assets/assets/oviedo_bubble.png": "a84b0f9beea4411e17a7a3d8160354ee",
"assets/assets/perdiguer.png": "d0b08382ecb6627e9a83db9163ed2bf2",
"assets/assets/perucho.png": "375798f091314088a4d9d051e3881986",
"assets/assets/politica_inscripcion.pdf": "f6e6d72d74554e5f283d930583a96500",
"assets/assets/prieto.png": "08f5b1a3d5c34633267ba568f130c41e",
"assets/assets/roc.png": "a4d3ee392778bc121548e667355ea167",
"assets/assets/rosalia.png": "fb4ccfb6e3ee81bba369573bb131a03b",
"assets/assets/secret.png": "39c24839669875ae000a2ffc481bdc2e",
"assets/assets/silvia.png": "62ab2d215069b51bcf6f94a79e701885",
"assets/assets/simon.png": "26107c00d21da96f089dd7642fb8702c",
"assets/assets/soriano.png": "2572037dd765d3635b3fd33c46acc8ca",
"assets/assets/spain_icon.png": "def18c3238afcaabd2f8d0fd7cb04d5f",
"assets/assets/spain_icon_phone.png": "65be0d5657340ba59418bf7e031e538e",
"assets/assets/twitter.png": "dbe912faa8567227aa056ae3ea08c381",
"assets/assets/uam.png": "5f265b3017c8a33acd4a5507bd10587b",
"assets/assets/ucjc.png": "7ee0a1a2cb9effcec29358e300128c96",
"assets/assets/upv.png": "7bc221efe9fae3571071835046344e39",
"assets/assets/upv_bio.png": "bab308f892dd90f055e0ca59f603c25f",
"assets/assets/valencia_big.png": "b351ad824028aa649db060a9a9522209",
"assets/assets/valencia_bubble.png": "c922ab3437fc0434941ea145dd9748ae",
"assets/assets/youtube.png": "38fff69f4676cb3cedbbb501fa42e88d",
"assets/FontManifest.json": "e8c16efba0dde2c1f133db17af527123",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0b84a76781359f253b5d66a69e8b64b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e963fe50fd6de97228fc3c2ec4ae81dd",
"/": "e963fe50fd6de97228fc3c2ec4ae81dd",
"main.dart.js": "c01cad0d4cbd097bc73e10de0f93c65f",
"manifest.json": "b9ba0c68f2301160b01327784f03551b",
"version.json": "0741495e2798c079055dbbb32e97c279"
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
