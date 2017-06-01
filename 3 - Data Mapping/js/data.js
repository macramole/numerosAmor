var dataset = [];
var response;

var DATA_PROXY = "http://www.leandrogarber.info/proyectos/hipermedial/test.php?url=";
var API_URL = "http://wefeel.csiro.au/api/emotions/primary/joy/secondary/timepoints";
var URL_FINAL = DATA_PROXY + encodeURIComponent(API_URL);

// var API_URL = "http://wefeel.csiro.au/api/emotions/primary/joy/secondary/timepoints?start=";
// var DATE_DESDE = + new Date(2017,1,1);
// var URL_FINAL = DATA_PROXY + encodeURIComponent(API_URL + DATE_DESDE);

function preload() {
    response = loadJSON(URL_FINAL);
}

function setup() {
    for ( i in response ) {
        dataset.push( response[i] );
    }

    noCanvas();
    init();
}
