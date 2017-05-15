function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var btnAmor = document.querySelector("#btnAmor");

btnAmor.addEventListener("click", function() {
    var txtConoce = document.querySelector("#txtConoce");
    var txtAma = document.querySelector("#txtAma");
    var pResultado = document.querySelector("#resultado");
    var fields = document.querySelector("fieldset");

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
});
