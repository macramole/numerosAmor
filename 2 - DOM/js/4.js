function obtenerPorcentaje( valorCienPorCiento, valorACalcularProcentaje ) {
    return valorACalcularProcentaje * 100 / valorCienPorCiento;
}

var btnAmor = document.querySelector("#btnAmor");
var btnVolver = document.querySelector("#btnVolver");
var fields = document.querySelector("fieldset");
var resultados = document.querySelector("#resultados");

btnAmor.addEventListener("click", function() {
    var txtConoce = document.querySelector("#txtConoce");
    var txtAma = document.querySelector("#txtAma");
    var txtCree = document.querySelector("#txtCree");

    var porcentajeAma = obtenerPorcentaje( txtConoce.value, txtAma.value );
    var porcentajeCree = obtenerPorcentaje( txtConoce.value, txtCree.value );

    var resultado = document.querySelector("#resultados .resultado");
    var rCree = document.querySelector("#resultados .resultado .rCree");
    var rAma = document.querySelector("#resultados .resultado .rAma");

    fields.classList.add("invisible");
    resultados.classList.remove("invisible");
    btnVolver.classList.remove("invisible");

    // Ejercicio: cambiar el z-index dependiendo de los porcentajes
    if ( porcentajeAma > porcentajeCree ) {
        rCree.style.zIndex = 100;
    } else {
        rAma.style.zIndex = 100;
    }

    resultado.style.height = (txtConoce.value * 2) + "px";
    rCree.style.height = porcentajeCree + "%";
    rAma.style.height = porcentajeAma + "%";

});

btnVolver.addEventListener("click", function() {
    fields.classList.remove("invisible");
    resultados.classList.add("invisible");
    btnVolver.classList.add("invisible");
});
