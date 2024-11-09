if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        let reg;
  
        if (import.meta.env?.DEV) {
          reg = await navigator.serviceWorker.register('/hacknhfrontend/sw.js', {
            type: 'module',
          });
        } else {
          reg = await navigator.serviceWorker.register('/hacknhfrontend/sw.js');
        }
  
        console.log('Service worker registered! 😎', reg);
      } catch (err) {
        console.log('😥 Service worker registration failed: ', err);
      }
    });
  }