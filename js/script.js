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

  document.addEventListener('scroll', function() {
    var elemento = document.querySelector('.textoAnimado');
    var posicion = elemento.getBoundingClientRect(); // Obtiene la posición del elemento respecto al viewport
  


    // Verifica si el elemento está en el viewport
    if(posicion.top < window.innerHeight ) {

      elemento.style.opacity = 1; // Hace el elemento totalmente visible
      elemento.style.transform = 'scale(1)'; // Restablece el tamaño del elemento
    }
  });

// Detecta el evento de scroll en la ventana
window.addEventListener('scroll', function() {
  var elemento = document.getElementById('textoMovil');
  var valorScroll = window.scrollY || document.documentElement.scrollTop;
  
  // Ajusta el valor de 'transform' basado en el scroll
  // Puedes ajustar el factor multiplicativo para cambiar la sensibilidad
  elemento.style.transform = 'translateY(' + (-valorScroll / 4) + 'px)';
});