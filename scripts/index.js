document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".botonxd");
    const menu = document.querySelector(".nav-menu");

    boton.addEventListener('click', () => {
        menu.classList.toggle("nav-menu-visible");
    });
});

function mostrarVentana() {
    document.getElementById("info").style.display = "block";
}

function ocultarRectangulo() {
    // Oculta el rectángulo cambiando su estilo a "display: none"
    document.getElementById("info").style.display = "none";
}