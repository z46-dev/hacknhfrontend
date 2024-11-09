if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/hacknhfrontend/sw.js')
        .then(() => console.log('service worker registered'))
        .catch(() => console.log('service worker not registered'))
}