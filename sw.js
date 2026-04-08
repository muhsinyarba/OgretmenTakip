self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.onclick = () => {
  caches.delete('ogretmen-takip-v1'); // Varsa eski önbelleği siler
};
