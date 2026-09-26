// Change VERSION with each published release. Cache is scoped to this repository.
const VERSION = '2026-09-26-3';
const PREFIX = 'liga-cockpit:' + self.registration.scope + ':';
const CACHE = PREFIX + VERSION;
const SHELL = ['./', './index.html', './manifest.webmanifest', './pwa.js', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
// Waiting workers activate after all open app windows have been closed.
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  const url = new URL(request.url);
  const allowed = SHELL.map(path => new URL(path, self.registration.scope).href);
  if (!allowed.includes(url.href)) return;
  // Cache-first shell keeps HTML and its scripts in the same release.
  event.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(request);
    if (cached) return cached;
    return fetch(request);
  }));
});
