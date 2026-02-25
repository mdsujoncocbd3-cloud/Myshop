// Service Worker for MIX BOX PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // It acts as a dummy proxy to satisfy PWA criteria
});
