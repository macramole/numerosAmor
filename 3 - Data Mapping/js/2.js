var emociones = ["joy/cheerfulness", "joy/contentment", "joy/enthrallment", "joy/optimism", "joy/pride"];
var contenedor = document.querySelector("#contenedor");
var medidores = [];
var currentValor = 1;
var osciladores = [];

// var reverb = new p5.Reverb();
// reverb.amp(1);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cambiarValores(cual) {
    var dia = dataset[cual];
    var cien = dia.sumEmociones;

    for ( var i = 0 ; i < emociones.length ; i++ ) {
        var count = dia.counts[ emociones[i] ];
        medidores[i].style.height = ( count * 100 / cien ) + "%";

        // medidores[i].innerHTML = count/100 + "hz";
        osciladores[i].freq( count/100 );
    }
}
function init() {
    contenedor.style.height = document.documentElement.clientHeight + "px";

    for ( var i = 0 ; i < dataset.length ; i++ ) {
        dataset[i].sumEmociones = 0;
        dataset[i].maxCount = 0;

        for ( var j in dataset[i].counts ) {
            if ( emociones.indexOf(j) != -1 ) {
                dataset[i].sumEmociones += dataset[i].counts[j];

                if ( dataset[i].counts[j] > dataset[i].maxCount ) {
                    dataset[i].maxCount = dataset[i].counts[j];
                }
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

        var osc = new p5.Oscillator();
        osc.setType("sine");
        // osc.disconnect();
        osc.start();

        // reverb.process(osc, 3, 2);

        osciladores.push(osc);
    }

    cambiarValores(0);

    setInterval( function() {
        cambiarValores(currentValor);
        currentValor++;

        if ( currentValor >= dataset.length ) {
            currentValor = 0;
        }
    }, 400 );
}
