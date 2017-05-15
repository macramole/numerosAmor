function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

function calcular() {
    var txtConoce = document.querySelector("#txtConoce");
    var txtAma = document.querySelector("#txtAma");
    var pResultado = document.querySelector("#resultado");

    var numConoce = txtConoce.value;

    if ( numConoce > 0 ) {
        var numAma = txtAma.value;
        var porcentajeAma = obtenerPorcentaje(numConoce, numAma);

        if ( porcentajeAma > 0 ) {
            pResultado.innerHTML = "Usted ama al " + porcentajeAma + "% de la gente que conoce";
        } else {
            pResultado.innerHTML = "Debería amar mas";
        }
    } else {
        pResultado.innerHTML = "Usted no conoce a nadie";
    }
}

function hola() {
    alert("hola soy leandro");
}

var btnAmor = document.querySelector("#btnAmor");
btnAmor.addEventListener("click", calcular);
