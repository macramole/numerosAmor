function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var cantUsuarios = prompt("¿Cuántas personas hay ahi?");

for ( var i = 0 ; i < cantUsuarios ; i++ ) {
    var numConoce = prompt("¿Cuántas personas conoce " + " la persona #" + i + " ?");

    if ( numConoce > 0 ) {
        var numAma = prompt("¿Cuantas personas ama?");
        var porcentajeAma = obtenerPorcentaje(numConoce, numAma);

        var numCree = prompt("¿Cuántas personas cree que la aman?");
        var porcentajeCree = obtenerPorcentaje(numConoce, numCree);

        if ( porcentajeAma > 0 ) {
            alert("La persona #" + i + " ama al " + porcentajeAma + "% de la gente que conoce y es amado por el " + porcentajeCree + "%");
        } else {
            alert("La persona #" + i + " debería amar mas");
        }
    } else {
        alert("La persona #" + i + " no conoce a nadie");
    }
}
