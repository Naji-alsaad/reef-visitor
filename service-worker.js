
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('reef-cache').then(function(cache) {
      return cache.addAll([
        './زيارة_ريف_السعودية_PWA.html',
        './reef_logo.png'
      ]);
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
