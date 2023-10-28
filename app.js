const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel img');

let ImageIndex = 0;
let automaticSlideInterval; // variable para hacerlo automático

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    ImageIndex = (ImageIndex + 1) % images.length;
    showImage(ImageIndex);
}

function prevImage() {
    ImageIndex = (ImageIndex - 1 + images.length) % images.length;
    showImage(ImageIndex);
}

// Función para cambiar automáticamente las imágenes cada 2 segundos
function startAutomaticSlide() {
    automaticSlideInterval = setInterval(() => {
        nextImage();
    }, 2000);
}

showImage(ImageIndex);
startAutomaticSlide();

/////////////////////////////////////

function initMap() {
    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Coordenadas del mapa
        zoom: 15, // Nivel de zoom
    });
}
