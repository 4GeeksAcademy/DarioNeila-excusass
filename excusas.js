var quien = [
  "El gato",
  "El hamster",
  "El vecino recien despertado",
  "La prima de su tia",
  "La cacatua del vecino"
];

var accion = ["se comió", "robó", "quemó", "se llevó", "rompió"];

var que = [
  "mi cena",
  "el dinero para el alquiler",
  "mi movil",
  "mi abrigo",
  "el coche"
];

var cuando = [
  "mientras dormia",
  "antes de que yo llegara a casa",
  "cuando salí a comprar"
];

function generador(quien, accion, que, cuando) {
 let randomQuien = Math.floor(Math.random() * quien.length);
let  randomAccion = Math.floor(Math.random() * accion.length);
let  randomQue = Math.floor(Math.random() * que.length);
let  randomCuando = Math.floor(Math.random() * cuando.length);
  return (quien[randomQuien] + " " +  accion[randomAccion] +  " " + que[randomQue] + " " + cuando[randomCuando] +".");
}

function onLoad() {
  var excusa = document.getElementById("excusa");
  excusa.innerHTML = generador(quien, accion, que, cuando);
}
window.onload = onLoad;
