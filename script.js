if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de APP JANDOS EXITOSO', reg))
    .catch(err => console.warn('ERROR AL TRATAR DE INSTALAR APP', err))
}