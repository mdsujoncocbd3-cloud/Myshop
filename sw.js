const CACHE_NAME = 'mix-box-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.postimg.cc/8zKG1ndp/20260113-210931.png?v=2'
];

// সার্ভিস ওয়ার্কার ইনস্টল করা এবং ফাইল ক্যাশ করা
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// অফলাইন সাপোর্ট: যখন নেট থাকবে না তখন ক্যাশ থেকে ফাইল দেখাবে
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
