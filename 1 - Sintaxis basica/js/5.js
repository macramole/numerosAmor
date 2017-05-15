function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var cantUsuarios = prompt("¿Cuántas personas hay ahi?");

for ( var i = 0 ; i < cantUsuarios ; i++ ) {
    var numConoce = prompt("¿Cuántas personas conoce?");

    if ( numConoce > 0 ) {
        var numAma = prompt("¿Cuántas personas ama?");
        var porcentajeAma = obtenerPorcentaje(numConoce, numAma);

        if ( porcentajeAma > 0 ) {
            alert("Usted ama al " + porcentajeAma + "% de la gente que conoce");
        } else {
            alert("Debería amar mas");
        }
    } else {
        alert("Usted no conoce a nadie");
    }
}
