const CACHE_NAME = 'casarap-pos-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
];

// Install Service Worker
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

// Activate and Clean Up Old Caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) return response;
            
            return fetch(e.request).then((fetchRes) => {
                if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic' || e.request.method !== 'GET') {
                    return fetchRes;
                }
                return caches.open(CACHE_NAME).then((cache) => {
                    if (e.request.url.startsWith(self.location.origin)) cache.put(e.request, fetchRes.clone());
                    return fetchRes;
                });
            });
        }).catch(() => caches.match('./index.html')) // Fallback for offline
    );
});