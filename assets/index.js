
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
console.log("Inica firesotre");

var x = document.getElementById("geo");
var press = document.getElementById("press");
var enable = document.getElementById("enable");
let activo = document.getElementById("activo");
let textoActivo = document.getElementById("textoActivo");
let boton = document.getElementById("boton");

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position){
    db.collection("uno").doc("gris")
    .set({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        active: true
    });
    boton.style.display = 'none';
    textoActivo.innerText = "Activar";
    activo.checked = false;

}

function enableButton(){
    
    const habilita = () => {
        press.hidden = true;
    }
}

function activar(){

    if (activo.checked){
        boton.style.display = 'block';
        textoActivo.innerText = "Desactivar";
    } else {
        boton.style.display = 'none';
        textoActivo.innerText = "Activar";
    }
     

}