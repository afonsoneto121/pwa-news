var CACHE_NAME = 'pwa-news';
var urlToCache = [
  '/',
  '/index.html'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) =>{
        return cache.addAll(urlToCache);
      })
  );
})

self.addEventListener('active', event => {
  var cacheWhileList = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(cacheName.map(name => {
        if(cacheWhileList.indexOf(name) === -1) {
          return caches.delete(name);
        }
      })
    )
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});