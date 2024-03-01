document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces dentro del contenedor 'nav-container'
    var enlaces = document.querySelector('.nav-container').getElementsByTagName('a');
  
    
    // Añade un evento 'click' a cada enlace
    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].addEventListener('click', function (e) {
        // Previene el comportamiento predeterminado del enlace
        e.preventDefault();
  
        // Busca el elemento actualmente seleccionado y remueve la clase 'seleccionado'
        var seleccionadoActual = document.querySelector('.nav-container .seleccionado');
        if (seleccionadoActual) {
          seleccionadoActual.classList.remove('seleccionado');
        }
  
        // Añade la clase 'seleccionado' al enlace clickeado
        this.classList.add('seleccionado');
      });
    }
  });


