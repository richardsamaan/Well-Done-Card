// Minimal service worker — required by browsers to treat this as an installable app.
const CACHE_NAME = "well-done-card-v1";

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Simple network-first strategy so updates show up right away.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
