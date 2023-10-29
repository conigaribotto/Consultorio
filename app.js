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
////////////////////CARRUSEL
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

//////////FORMULARIO
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
///////////////////////////////////// MAPA
function initMap() {
    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: -31.414663, lng: -64.190439 }, // Coordenadas de "Chacabuco 300, Córdoba, Argentina"
        zoom: 15, // Nivel de zoom
    });
}
