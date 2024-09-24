//CONTENIDO UNO

function MostrarPrimeraInfo() {
    const carpeta_uno = document.getElementById('carpeta-uno');

    carpeta_uno.classList.remove('display-none');
    carpeta_uno.classList.add('carpeta-uno');
}

function OcultarPrimerInfo() {
    const carpeta_uno = document.getElementById('carpeta-uno');

    carpeta_uno.classList.add('fade-out');

    carpeta_uno.addEventListener('animationend', () => {
        carpeta_uno.classList.add('display-none');
        carpeta_uno.classList.remove('fade-out');
    }, { once: true });
}

//CERRAR SEGUNDA CARPETA

function OcultarSegundaInfo() {
    const carpeta_dos = document.getElementById('carpeta-dos');
    carpeta_dos.classList.add("display-none")
}

//CERRAR TERCER CARPETA

function OcultarTerceraInfo() {
    const carpeta_tres = document.getElementById('carpeta-tres');
    carpeta_tres.classList.add("display-none")
}

//CERRAR CUARTA CARPETA

function OcultarCuartaInfo() {
    const carpeta_cuatro = document.getElementById('carpeta-cuatro');
    carpeta_cuatro.classList.add("display-none")
}

//CONTENIDO DOS

function MostrarContenidoDos() {
    const contenido_uno = document.getElementById('contenido-uno');
    const contenido_dos = document.getElementById('contenido-dos');
    contenido_dos.classList.remove("display-none");
    contenido_dos.classList.add("contenido-dos");
    contenido_uno.classList.remove("contenido-uno");
    contenido_uno.classList.add("display-none");
}

function OcultarContenidoDos() {
    const contenido_dos = document.getElementById('contenido-dos');
    const contenido_tres = document.getElementById('contenido-tres');
    contenido_dos.classList.remove("contenido-dos");
    contenido_dos.classList.add("display-none");
    contenido_tres.classList.remove("display-none");
    contenido_tres.classList.add("contenido-tres");

}

function PasarAoK() {
    const contenedor_dos = document.getElementById('contenedor-dos');
    contenedor_dos.classList.remove("display-none");
    contenedor_dos.classList.add("contenedor-dos");
}

function pasarsegundaCarpeta() {
    const contenido_tres = document.getElementById('contenido-tres');
    const carpeta_dos = document.getElementById('carpeta-dos');
    contenido_tres.classList.remove("contenido-tres");
    contenido_tres.classList.add("display-none");

    carpeta_dos.classList.remove("display-none");
    carpeta_dos.classList.add("carpeta-dos");
}

document.addEventListener('DOMContentLoaded', () => {
    const flecha = document.querySelector('.flecha-uno');
    const rectangulo = document.getElementById('rectangulo-uno');

    flecha.addEventListener('mouseover', () => {
        rectangulo.classList.add('visible');
    });

    flecha.addEventListener('mouseout', () => {
        rectangulo.classList.remove('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const flechaDos = document.querySelector('.flecha-dos');
    const rectanguloDos = document.getElementById('rectangulo-dos');

    flechaDos.addEventListener('mouseover', () => {
        rectanguloDos.classList.add('visible');
    });

    flechaDos.addEventListener('mouseout', () => {
        rectanguloDos.classList.remove('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const flechaTres = document.querySelector('.flecha-tres');
    const rectanguloTres = document.getElementById('rectangulo-tres');

    flechaTres.addEventListener('mouseover', () => {
        rectanguloTres.classList.add('visible');
    });

    flechaTres.addEventListener('mouseout', () => {
        rectanguloTres.classList.remove('visible');
    });
});
function volverNoticiaDos() {
    const contenido_tres = document.getElementById('contenido-tres');
    const carpeta_dos = document.getElementById('carpeta-dos');
    contenido_tres.classList.add("contenido-tres");
    contenido_tres.classList.remove("display-none");

    carpeta_dos.classList.add("display-none");
    carpeta_dos.classList.remove("carpeta-dos");
}

function pasarNoticiaTres() {
    const contenedor_carp_dos = document.getElementById('contenedor-carp-dos');
    const carpeta_tres = document.getElementById('carpeta-tres');
    const flechas = document.getElementById('flechas');
    contenedor_carp_dos.classList.remove("contenedor-carp-dos");
    contenedor_carp_dos.classList.add("display-none");
    flechas.classList.add("display-none");

    carpeta_tres.classList.remove("display-none");
    carpeta_tres.classList.add("carpeta-tres");
}


//RESET DE DISPLAY DE CONTENIDO

function resetDisplay() {
    const contenidos = document.querySelectorAll('#youtube, #netflix, #pinterest, #x ,#spotify');
    contenidos.forEach(contenido => {
        contenido.classList.add('display-none');
    });
}

//RESET ACTIVOS

function resetActivo() {
    const botones = document.querySelectorAll('.botones-aplicaciones');
    botones.forEach(boton => boton.classList.remove('active'));
}


//MOSTRAR INFORMACION SOBRE APLICACIONES CARPETA TRES 

function mostrarYoutube() {
    resetDisplay();
    resetActivo();
    const boton = document.querySelector('.botones-aplicaciones:nth-of-type(1)');
    boton.classList.add('active');

    const contenido = document.getElementById('youtube');
    contenido.classList.remove("display-none");
}

function mostrarNetflix() {
    resetDisplay();
    resetActivo();
    const boton = document.querySelector('.botones-aplicaciones:nth-of-type(2)');
    boton.classList.add('active');

    const contenido = document.getElementById('netflix');
    contenido.classList.remove("display-none");

}
function mostrarSpotify() {
    resetDisplay();
    resetActivo();
    const boton = document.querySelector('.botones-aplicaciones:nth-of-type(3)');
    boton.classList.add('active');

    const contenido = document.getElementById('spotify');
    contenido.classList.remove("display-none");

}

function mostrarX() {
    resetDisplay();
    resetActivo();
    const boton = document.querySelector('.botones-aplicaciones:nth-of-type(4)');
    boton.classList.add('active');

    const contenido = document.getElementById('x');
    contenido.classList.remove("display-none");
}

function mostrarPinterest() {
    resetDisplay();
    resetActivo();
    const boton = document.querySelector('.botones-aplicaciones:nth-of-type(5)');
    boton.classList.add('active');

    const contenido = document.getElementById('pinterest');
    contenido.classList.remove("display-none");
}

// PASAR CARPETA CUATRO 

function pasarNoticiaCuatro(){
    const flecha = document.getElementById('flechas-pasar-carpeta-cuatro');
    const carpeta_cuatro = document.getElementById('carpeta-cuatro');

    carpeta_cuatro.classList.remove("display-none");
    carpeta_cuatro.classList.add("carpeta-cuatro");
    flecha.classList.add('display-none');
}

//MOSTRAR ICONOS 

function mostrarIconos(){
    
    const flecha = document.getElementById('flechas-pasar-carpeta-cuatro');
    const cartel = document.getElementById('cartel-pregunta');
    const iconos = document.getElementById('iconos-carpeta-tres');
    const mono = document.getElementById('mono-carp-tres');

    iconos.classList.remove('display-none');
    iconos.classList.add('iconos-carpeta-tres');
    cartel.classList.add('display-none');

    flecha.classList.remove('display-none');
    flecha.classList.add('flecha-pasar-carpeta-cuatro');

    mono.classList.remove('mono-carp-tres');
    mono.classList.add('display-none');
}

// MOSTRAR MONO 

function mostrarMono(){
    const cartel = document.getElementById('cartel-pregunta');
    const mono = document.getElementById('mono-carp-tres');

    cartel.classList.add('display-none');

    mono.classList.remove('display-none');
    mono.classList.add('mono-carp-tres');
}

// CARPETA CUATRO 

function pasarSegundaParte(){
    const parte_uno = document.getElementById('contenido-carpeta-cuatro');
    const parte_dos = document.getElementById('contenido-carpeta-cuatro-dos');
    parte_uno.classList.remove('contenido-carpeta-cuatro');
    parte_uno.classList.add('display-none');

    parte_dos.classList.remove('display-none');
    parte_dos.classList.add('contenido-carpeta-cuatro-dos');
}

//GRAFICOS 

// Asociamos cada ícono con su gráfico correspondiente
const iconosGraficos = {
    "icon-youtube": "grafico-youtube",
    "icon-netflix": "grafico-netflix",
    "icon-spotify": "grafico-spotify",
    "icon-x": "grafico-x",
    "icon-pinterest": "grafico-pinterest"
};

// Función para alternar la imagen del ícono
function toggleIconImage(icono, isActive) {
    const originalSrc = icono.getAttribute("src");
    const selectedSrc = icono.getAttribute("data-selected");

    // Si el gráfico está activo, cambiar a la imagen seleccionada
    if (isActive) {
        icono.setAttribute("src", selectedSrc);
    } else {
        // Si no está activo, volver a la imagen original
        icono.setAttribute("src", originalSrc.replace("-seleccionado", ""));
    }
}

// Escuchamos el evento de clic en los íconos
document.querySelectorAll(".iconos-graficos img").forEach(icono => {
    icono.addEventListener("click", () => {
        // Obtenemos el gráfico correspondiente al ícono clicado
        const graficoId = iconosGraficos[icono.id];
        const grafico = document.getElementById(graficoId);

        if (grafico) {
            // Alternamos la clase 'active': si ya tiene 'active', la eliminamos; si no la tiene, la añadimos
            const isActive = grafico.classList.toggle("active");

            // Alternamos la imagen del ícono
            toggleIconImage(icono, isActive);
        }
    });
});

function mostrarMensajeX() {
    const icono = document.getElementById('icon-x');
    icono.setAttribute('src', './img/carpeta-cuatro/x-seleccionado.png');

    const cartel = document.getElementById('cartel-x');
    cartel.classList.add('cartel-x');
    cartel.classList.remove('display-none');
}   

function ocultarMensajeX() {
    const icono = document.getElementById('icon-x');
    icono.setAttribute('src', './img/carpeta-cuatro/x.png');

    const cartel = document.getElementById('cartel-x');
    cartel.classList.add('display-none');
    cartel.classList.remove('cartel-x');
}