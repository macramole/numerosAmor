function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var btnAmor = document.querySelector("#btnAmor");
var btnVolver = document.querySelector("#btnVolver");
var fields = document.querySelector("fieldset");
var pResultado = document.querySelector("#resultado");

// Ejercicio: Agregar Cree que ama

btnAmor.addEventListener("click", function() {
    var txtConoce = document.querySelector("#txtConoce");
    var txtAma = document.querySelector("#txtAma");

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

    fields.classList.add("invisible");
    pResultado.classList.remove("invisible");
    btnVolver.classList.remove("invisible");
});

btnVolver.addEventListener("click", function() {
    fields.classList.remove("invisible");
    pResultado.classList.add("invisible");
    btnVolver.classList.add("invisible");
});
