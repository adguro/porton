
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFafN74WM2-gVjIQ3lGJhB6f6-gI8H-gA",
  authDomain: "controlandorancho.firebaseapp.com",
  projectId: "controlandorancho",
  storageBucket: "controlandorancho.appspot.com",
  messagingSenderId: "395395371394",
  appId: "1:395395371394:web:7b70a268d08e314a187f9b",
  measurementId: "G-S0Z61Q97JB"
});
const db = firebaseApp.firestore();

let activo = document.getElementById("activo");
let textoActivo = document.getElementById("textoActivo");
let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");

function getLocation() {
  if (navigator.geolocation) {
    boton.innerHTML = "<i class='fa fa-spinner fa-3x fa-spin'></i>";
    boton.disabled = true;
    activo.disabled = true;

    navigator.geolocation.getCurrentPosition(showPosition, showError);



  } else {
    boton.innerHTML = "<i class='fa fa-warning fa-3x fa-spin'></i>";
    boton.disabled = true;
    activo.disabled = true;

    boton.style.backgroundColor = "orange";
    textoActivo.style.backgroundColor = "orange";
  
    parrafo.innerHTML = "Geolocalización no soportada por el navegador";
  

    setTimeout(function () {

      boton.innerHTML = "<img src='./assets/icons8-timbre-de-la-puerta-50.png' alt='Click Me'></img>";
      boton.disabled = false;
      activo.disabled = false;

      parrafo.innerHTML = "";

      boton.style.backgroundColor = "#04AA6D";
      textoActivo.style.backgroundColor = "#ccc";
  
  
      boton.style.display = 'none';
      textoActivo.innerText = "Activar";
      activo.checked = false;
  
    }, 3000);

  }
}

function showPosition(position) {

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  db.collection("uno").doc("gris")
    .set({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      active: true
    })
    .then(docRef => {
      //                 <i class="fa-solid fa-spinner fa-spin-pulse">  fa-cog
      boton.innerHTML = "<i class='fa fa-spinner fa-3x fa-spin'></i>";
      boton.disabled = true;
      activo.disabled = true;

      setTimeout(function () {

        boton.innerHTML = "<img src='./assets/icons8-timbre-de-la-puerta-50.png' alt='Click Me'></img>";
        boton.disabled = false;
        activo.disabled = false;

        textoActivo.style.backgroundColor = "#ccc";

        boton.style.display = 'none';
        textoActivo.innerText = "Activar";
        activo.checked = false;
        
    
      }, 3000);
    

    })
    .catch((error) => {

      boton.innerHTML = "<i class='fa fa-warning fa-3x fa-spin'></i>";
      boton.disabled = true;
      activo.disabled = true;
      parrafo.innerHTML = "Ubicación erronea";

      boton.style.backgroundColor = "red";
      textoActivo.style.backgroundColor = "red";

      setTimeout(function () {

        boton.innerHTML = "<img src='./assets/icons8-timbre-de-la-puerta-50.png' alt='Click Me'></img>";
        boton.disabled = false;
        activo.disabled = false;

        parrafo.innerHTML = "";

        boton.style.backgroundColor = "#04AA6D";
        textoActivo.style.backgroundColor = "#ccc";
    
    
        boton.style.display = 'none';
        textoActivo.innerText = "Activar";
        activo.checked = false;
    
      }, 3000);

  

  
    });

}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      parrafo.innerHTML = "El usuario denegó la solicitud de geolocalización."
      break;
    case error.POSITION_UNAVAILABLE:
      parrafo.innerHTML = "La información de ubicación no está disponible."
      break;
    case error.TIMEOUT:
      parrafo.innerHTML = "Se agotó el tiempo de espera de la solicitud para obtener la ubicación del usuario."
      break;
    case error.UNKNOWN_ERROR:
      parrafo.innerHTML = "Ocurrió un error desconocido."
      break;
  }

  boton.innerHTML = "<i class='fa fa-warning fa-3x fa-spin'></i>";
  boton.disabled = true;
  activo.disabled = true;

  boton.style.backgroundColor = "orange";
  textoActivo.style.backgroundColor = "orange";

  setTimeout(function () {

    boton.innerHTML = "<img src='./assets/icons8-timbre-de-la-puerta-50.png' alt='Click Me'></img>";
    boton.disabled = false;
    activo.disabled = false;

    parrafo.innerHTML = "";

    boton.style.backgroundColor = "#04AA6D";
    textoActivo.style.backgroundColor = "#ccc";

    boton.style.display = 'none';
    textoActivo.innerText = "Activar";
    activo.checked = false;

  }, 3000);

}

function activar() {

  if (activo.checked) {
    boton.style.display = 'block';
    textoActivo.innerText = "Desactivar";
    textoActivo.style.backgroundColor = "#8CE196";
  } else {
    boton.style.display = 'none';
    textoActivo.innerText = "Activar";
    textoActivo.style.backgroundColor = "#ccc";
  }

}

