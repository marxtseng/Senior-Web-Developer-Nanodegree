'use strict';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('public-transportation').then(function(cache) {
            return cache.addAll([
                '/',
                '/public-transportation.html',
                '/public-transportation.js',
                '/data.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
