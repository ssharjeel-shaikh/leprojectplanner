// sw.js
const CACHE_NAME = 'planner-app-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  // Add other assets (CSS, JS files, etc.) if needed.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
