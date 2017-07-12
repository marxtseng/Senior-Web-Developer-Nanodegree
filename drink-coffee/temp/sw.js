'use strict';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('drink-coffee').then(function(cache) {
            return cache.addAll([
                '/',
                '/drink-coffee.html',
                '/drink-coffee.js'
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