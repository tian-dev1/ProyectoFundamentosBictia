/*--------------------------------------------es la funcion que cambia las imagenes de los platos de comida-----------------------------------*/
var comidasTipicas = ["./img/banner_01.png", "./img/banner_02.png", "./img/banner_03.png", "./img/banner_04.png", "./img/banner_05.png", "./img/banner_06.png"]


function cambiarImagen() {

    document.getElementById("videoPrincipal").style.backgroundImage = 'url("' + comidasTipicas[posicionImagen] + '")';

}

setInterval('moverImagen()', 3000);

var posicionImagen = 0;

function moverImagen() {
    cambiarImagen();
    if (posicionImagen < comidasTipicas.length - 1) {
        posicionImagen++;
    } else {
        posicionImagen = 0;
    }
}



/*--------------------------------- link de los videos que se muestran en las regiones de colombia--------------------------------------------*/
var videosRegiones = ["https://www.youtube.com/embed/bnw7OP-jgaI", "https://www.youtube.com/embed/kNVZnAKwpzc", "https://www.youtube.com/embed/mkTfGT1gess",
    "https://www.youtube.com/embed/PzWKGK8CTSg", "https://www.youtube.com/embed/SRg6_-HU7qA"
];

var nombreRegion = ["Amazonia", "Andina", "Caribe", "Insular", "Orinoquia", "Pacífico"];
var infoRegion = ["Pirarucu, Patarasca de pescado, Piraña, Pescado Moqueado, Casabe, Ajicero, Crema de copoazú, Tucupí", "esta region se caracteriza por tener", "esta region se caracteriza por tener",
    "esta region se caracteriza por tener", "esta region se caracteriza por tener", "esta region se caracteriza por tener"
];
/*--------------------------------------------------- creacion del objetoRegiones y almacenamiento de los link---------------------------------*/

var urlsVideosre = [""]; // esta variable va a guardar todos los objetos que se creen de objeto region
for (var i = 0; i < videosRegiones.length; i++) {

    var objetoRegiones = {
        "nombre": nombreRegion,
        "link": videosRegiones,
        "info": infoRegion
    }

    urlsVideosre = objetoRegiones;
}

addEventListener("onmouseenter", escojerRegion);

/*------------------------------funcion y ciclo que escoje la region y muestra el titulo y los platos de la region------------------------------*/
var containerRegiones = [""]; // arraw que va a guardar el cambio que se hace en el id="derecho" del html
var p = 0; // variable que escoje la posicion del objetoRegiones y sus atributos
function escojerRegion(valor) {
    switch (valor) {
        case 0:
            p = 0;
            guardarRegion();
            break;
        case 1:
            p = 1;
            guardarRegion();
            break;
        case 2:
            p = 2;
            guardarRegion();
            break;
        case 3:
            p = 3;
            guardarRegion();
            break;
        case 4:
            p = 4;
            guardarRegion();
            break;
        case 5:
            p = 5;
            guardarRegion();
            break;
        default:
            p = 0;
            guardarRegion();
    }

}

function guardarRegion() {
    containerRegiones = '<div id="containerCazerola">' +
        '<iframe id="ubicarVideocazerola" onmouseout="pararSere(p);" src="' + objetoRegiones.link[p] + "?rel=0showinfo=0&controls=1&autoplay=1" + '" allowed=autoplay >' + '</iframe>' +
        '</div>' +
        '<div id="containerMenu">' +
        '<div id="tituloRegion">' +
        '<p>' + objetoRegiones.nombre[p] + '</p>' +
        '</div>' +
        '<div id="comidaRegion">' +
        '<p>' + objetoRegiones.info[p] + '</p>' +
        '<button>' + '<a href="video.html">' + "ver mas" + '</a>' + '</button>' +
        '</div>' +
        '</div>'

    document.getElementById("derecho").innerHTML = containerRegiones;
}

/*------------------------------------- esta es la funcion que detiene el video de cada region se cambia el autoplay=0 --------------------------------*/

function pararSere(idBoton) {

    var cont = [""];

    var cadena = "?rel=0showinfo=0&controls=1&autoplay=1";
    cont = '<iframe id="ubicarVideocazerola" onmouseout="pararSere(p);" src="' + objetoRegiones.link[p] + "?rel=0showinfo=0&controls=1&autoplay=0" + '" allowed=autoplay >' + '</iframe>'

    document.getElementById("containerCazerola").innerHTML = cont;

}