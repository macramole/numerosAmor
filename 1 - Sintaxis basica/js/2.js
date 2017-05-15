var numConoce = prompt("Cuantas personas conoce?");

if ( numConoce <= 0 ) {
    alert("Usted no conoce a nadie");
} else {
    var numAma = prompt("Cuantas personas ama?");
    var porcentajeAma = numAma * 100 / numConoce;

    alert("Usted ama al " + porcentajeAma + "% de la gente que conoce");

}
