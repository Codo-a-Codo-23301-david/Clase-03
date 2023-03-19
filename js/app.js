// código para escribir en el Placeholder

let nombre = prompt("Ingrese su nombre:");

let myDom = document;
let myApp = document.getElementById("myApp");
myApp.innerHTML = "Bienvenido " + nombre;
