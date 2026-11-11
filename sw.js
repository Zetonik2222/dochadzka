// Jednoduchý service worker – appka sa dá nainštalovať.
// Nič neukladá do pamäte, takže po úprave na GitHube má každý hneď novú verziu.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
