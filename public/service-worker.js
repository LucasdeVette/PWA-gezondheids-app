//variabele voor de cache
const CACHE_NAME = "healthflow-cache-v1";

//variabele voor de files die in de cache komen te staan
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/slaaptracker.html",
    "/overzicht_slaaptracker.html",
    "/instellingen.html",
    "/style.css",
    "/app.js",
    "/manifest.json",
    "/Images/HealthFlow.png"
];

//Maakt cache aan en voegt offline files hieraan toe en installeert de app
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
