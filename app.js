let x = 0;
let p = -10;
let i = 1;
let doom = document.getElementsByClassName('item');
let confr = (doom.length - 3) * (-350);
let confl = 0;

// Botón izquierdo
document.getElementById("l").addEventListener("click", function () {
    x += 350;
    if (x > confl) {
        x = confr - 350;
    } else {
        document.getElementById("move").style.marginLeft = x + "px";
    }
});

// Botón derecho
document.getElementById("r").addEventListener("click", function () {
    x += -350;
    p += -10;
    if (x < confr) {
        x = 350;
    } else {
        document.getElementById("move").style.marginLeft = x + "px";
    }
});

////////FORMULARIO
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
