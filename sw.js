const CACHE_NAME = 'youandottawa-v1';
const ASSETS = [
  '/youandottawa/',
  '/youandottawa/index.html',
  '/youandottawa/You_Ottawa_MASTER_v2.csv',
  '/youandottawa/bridge.jpg',
  '/youandottawa/parliament.jpg'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
