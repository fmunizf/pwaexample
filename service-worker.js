const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
'/pwaexample/',
'/pwaexample/index.html',
'/pwaexample/style.css',
'/pwaexample/app.js',
'/pwaexample/manifest.json',
'/pwaexample/icons/icon-128.png',
'/pwaexample/icons/icon-512.png'
];
self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME)
.then((cache) => cache.addAll(FILES_TO_CACHE))
);
});
self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request)
.then((response) => response || fetch(event.request))
);
});