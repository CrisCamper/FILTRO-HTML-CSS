if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById('aside-left').addEventListener('click', function() {
        var container = this;
        var currentPosition = parseInt(window.getComputedStyle(container).top);
        if (currentPosition === -1000) {
            container.style.top = '0px'; // Muestra el contenedor moviéndolo a la parte superior de la pantalla
        } else {
            container.style.top = '-1000px'; // Oculta el contenedor moviéndolo fuera de la pantalla
        }
    });
}