self.addEventListener('install', evt => {
    console.log('Service worker has been installed!')
});

self.addEventListener('activate', evt => {
    console.log('Service worker has been activated!')
});

self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});