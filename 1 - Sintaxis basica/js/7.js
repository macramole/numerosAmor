function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var cantUsuarios = prompt("¿Cuántas personas hay ahi?");
var respuestas = {
    cantConoce : 0,
    cantAma : 0,
    cantCree : 0,
    porcentajeAma : 0,
    porcentajeCree : 0
};

for ( var i = 1 ; i <= cantUsuarios ; i++ ) {
    respuestas.cantConoce = prompt("¿Cuántas personas conoce " + " la persona #" + i + " ?");

    if ( respuestas.cantConoce > 0 ) {
        respuestas.cantAma = prompt("¿Cuantas personas ama?");
        respuestas.porcentajeAma = obtenerPorcentaje(respuestas.cantConoce, respuestas.cantAma);

        respuestas.cantCree = prompt("¿Cuántas personas cree que la aman?");
        respuestas.porcentajeCree = obtenerPorcentaje(respuestas.cantConoce, respuestas.cantCree);

        if ( respuestas.porcentajeAma > 0 ) {
            alert("La persona #" + i + " ama al " + respuestas.porcentajeAma + "% de la gente que conoce y es amado por el " + respuestas.porcentajeCree + "%");
        } else {
            alert("La persona #" + i + " debería amar mas");
        }
    } else {
        alert("La persona #" + i + " no conoce a nadie");
    }
}
