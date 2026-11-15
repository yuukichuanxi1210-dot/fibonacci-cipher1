
const CACHE = 'fcipher-pwa-v3-owner-free';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE)
          .map(k => caches.delete(k))
      )
    )
  ]));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' ||
      new URL(e.request.url).origin !== self.location.origin) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request))
  );
});
