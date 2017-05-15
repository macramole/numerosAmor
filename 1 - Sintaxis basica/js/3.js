var numConoce = prompt("Cuantas personas conoce?");

if ( numConoce > 0 ) {
    var numAma = prompt("Cuantas personas ama?");
    var porcentajeAma = numAma * 100 / numConoce;

    if ( porcentajeAma > 0 ) {
        alert("Usted ama al " + porcentajeAma + "% de la gente que conoce");
    } else {
        alert("Debería amar mas");
    }
} else {
    alert("Usted no conoce a nadie");
}
