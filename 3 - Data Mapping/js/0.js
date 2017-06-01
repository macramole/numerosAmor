var emociones = ["joy/cheerfulness", "joy/contentment", "joy/enthrallment", "joy/optimism", "joy/pride"];
var contenedor = document.querySelector("#contenedor");
var medidores = [];
var currentValor = 1;

init();

function init() {
    contenedor.style.height = document.documentElement.clientHeight + "px";
    // contenedor.style.height = "100px";

    for ( var i = 0 ; i < emociones.length ; i++ ) {
        var medidor = document.createElement("div");
        medidor.id = emociones[i].substr(4);
        medidor.style.backgroundColor = "rgb(" + getRandomInt(0,255)  + "," + getRandomInt(0,255)  + "," + getRandomInt(0,255) + ")";
        medidor.style.height = ( (1 / emociones.length) * 100 ) + "%";
        contenedor.appendChild(medidor);
        medidores.push( medidor );

        medidor.addEventListener("click", medidorClick);
    }
}

function medidorClick( evento ) {
    for ( var i = 0 ; i < medidores.length ; i++ ) {
        var currentHeight = parseFloat(medidores[i].style.height);

        if ( medidores[i] == evento.target ) {
            medidores[i].style.height = currentHeight + 2 + "%";
        } else {
            var repartoSumado = (1/(emociones.length-1)) * 2;
            medidores[i].style.height = currentHeight - repartoSumado + "%";
        }

        // medidores[i].style.height = ( count * 100 / cien ) + "%";
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
