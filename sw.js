const CACHE_NAME = "deeptalk-v5";
// Liste aller Dateien, die offline verfügbar sein sollen
const ASSETS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon.png"
];

// 1. Installieren und Cachen
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// 2. Anfragen abfangen (Offline First Strategie)
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            // Wenn im Cache gefunden, nimm das. Sonst lade aus dem Internet.
            return response || fetch(e.request);
        })
    );
});
