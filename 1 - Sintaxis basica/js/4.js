function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var numConoce = prompt("Cuantas personas conoce?");

if ( numConoce > 0 ) {
    var numAma = prompt("Cuantas personas ama?");
    var porcentajeAma = obtenerPorcentaje(numConoce, numAma);

    if ( porcentajeAma > 0 ) {
        alert("Usted ama al " + porcentajeAma + "% de la gente que conoce");
    } else {
        alert("Debería amar mas");
    }
} else {
    alert("Usted no conoce a nadie");
}
