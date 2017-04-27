
var cacheName = "weatherPWA";
var filesToCache = [];

// Event listener que instalará nuestro service worker, que cacheará los recursos requeridos por el  App Shell, html, css, javascript
self.addEventListener('install', function(e){
  e.waitUntil(
    // open the cache and provide a cache name
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
});

// Activate event, gets a list of current cache keys and iterates through them using the map function 
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keylist){
      return Promise.all(keyList.map(function(key){
        // compares the key to the current key and if they're not equal, purges them
        if (key !== cacheName && key !== dataCacheName ){
          return caches.delete(key);
        }
      }));
    })
  );
});