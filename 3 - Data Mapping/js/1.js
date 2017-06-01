var emociones = ["joy/cheerfulness", "joy/contentment", "joy/enthrallment", "joy/optimism", "joy/pride"];
var contenedor = document.querySelector("#contenedor");
var medidores = [];
var currentValor = 1;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambiarValores(cual) {
    var dia = dataset[cual];
    var cien = dia.sumEmociones;

    for ( var i = 0 ; i < emociones.length ; i++ ) {
        var count = dia.counts[ emociones[i] ];
        medidores[i].style.height = ( count * 100 / cien ) + "%";
    }
}

function init() {
    contenedor.style.height = document.documentElement.clientHeight + "px";
    // contenedor.style.height = "100px";

    for ( var i = 0 ; i < dataset.length ; i++ ) {
        dataset[i].sumEmociones = 0;

        for ( var j in dataset[i].counts ) {
            if ( emociones.indexOf(j) != -1 ) {
                dataset[i].sumEmociones += dataset[i].counts[j];
            }
        }
    }

    for ( var i = 0 ; i < emociones.length ; i++ ) {
        var medidor = document.createElement("div");
        medidor.id = emociones[i].substr(4);
        medidor.style.backgroundColor = "rgb(" + getRandomInt(0,255)  + "," + getRandomInt(0,255)  + "," + getRandomInt(0,255) + ")";
        medidor.style.height = ( (1 / emociones.length) * 100 ) + "%";
        contenedor.appendChild(medidor);

        medidores.push( medidor );
    }

    cambiarValores(0);

    setInterval(siguiente , 400 );
}

function siguiente() {
    cambiarValores(currentValor);
    currentValor++;

    if ( currentValor >= dataset.length ) {
        currentValor = 0;
    }
}
