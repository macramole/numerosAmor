var numConoce;
var numAma;

numConoce = prompt("Cuantas personas conoce?");
numAma = prompt("Cuantas personas ama?");

var porcentajeAma = numAma * 100 / numConoce;

alert("Usted ama al " + porcentajeAma + "% de la gente que conoce");
