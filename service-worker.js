importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

const CACHE_NAME = 'firstpwa-v4';
var urlsToCache = [
	'/pwa-f/',
	'/pwa-f/nav.html',
	'/pwa-f/index.html',
	'/pwa-f/pages/home.html',
	'/pwa-f/pages/about.html',
	'/pwa-f/pages/contact.html',
	'/pwa-f/css/materialize.min.css',
	'/pwa-f/js/materialize.min.js',
	'/pwa-f/js/script.js'
];

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/script.js', revision: '1' },
]);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
  	cacheName: 'pages'
  })
);

// self.addEventListener('install', function(event){
// 	event.waitUntil(
// 		caches.open(CACHE_NAME)
// 		.then(function(cache) {
// 			return cache.addAll(urlsToCache);
// 		})
// 	);
// })

// self.addEventListener('activate', function(event){
// 	event.waitUntil(
// 		caches.keys()
// 		.then(function(cacheNames) {
// 			return Promise.all(
// 				cacheNames.map(function(cacheName){
// 					if(cacheName != CACHE_NAME){	
// 						console.log("ServiceWorker: cache " + cacheName + " dihapus");
// 						return caches.delete(cacheName);
// 					}
// 				})
// 			);
// 		})
// 	);
// })

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches.match(event.request, {cacheName:CACHE_NAME})
// 		.then(function(response) {
// 			if(response){
// 				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
// 				return response;
// 			}
			
// 			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
// 			return fetch(event.request);
// 		})
// 	);
// });

