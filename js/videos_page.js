/*********************************************************************************************************************************************/
/*                    aca va el jvaScript que hizo Cristian Camilo para la parte de ingreso y registro                                       */
/*********************************************************************************************************************************************/




/*--------------------------------------------es la funcion que cambia las imagenes de los platos de comida-----------------------------------
var comidasTipicas = ["img/banner_01.png","img/banner_02.png","img/banner_03.png","img/banner_04.png","img/banner_05.png","img/banner_06.png"]


function cambiarImagen(){

        document.getElementById("videoPrincipal").style.backgroundImage = 'url("' + comidasTipicas[posicionImagen] + '")';
    
}

setInterval('moverImagen()',90000);

var   posicionImagen = 0;
function moverImagen(){
        cambiarImagen();
            if(posicionImagen < comidasTipicas.length-1){     
            posicionImagen++;
            } else {
                posicionImagen = 0;
            }                               
}
*/


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
        "info": infoRegion,
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

    var reposicion = { "reposicion": p, }
    localStorage.setItem("reposicion", p);

    containerRegiones = '<div id="containerCazerola">' +
        '<iframe id="ubicarVideocazerola" onmouseout="pararSere(p);" src="' + objetoRegiones.link[p] + "?rel=0showinfo=0&controls=1&autoplay=1" + '" allowed=autoplay >' + '</iframe>' +
        '</div>' +
        '<div id="containerMenu">' +
        '<div id="tituloRegion">' +
        '<p>' + objetoRegiones.nombre[p] + '</p>' +
        '</div>' +
        '<div id="comidaRegion">' +
        '<p>' + objetoRegiones.info[p] + '</p>' +
        '<button id="' + p + '" onclick="cambiarRegion(id)">' + '<a href="video.html">' + "ver mas" + '</a>' + '</button>' +
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


/*--------------------------------------------------------------------------------------------------------------------------------*/
/***************************************** ******java de video.html ***************************************************************/

// ?autoplay=1


/***********************************************************************************************************************************/
/*                                                    Region Amazonas  = 0                                                        */
/***********************************************************************************************************************************/
var urlAmazonas = ["https://www.youtube.com/embed/qb8kdTap_sE", "https://www.youtube.com/embed/K78MCULy8ng", "https://www.youtube.com/embed/LC2mjOFIlX0",
    "https://www.youtube.com/embed/bUszQ9GISAE", "https://www.youtube.com/embed/89YLS7nm0uw", "https://www.youtube.com/embed/T3M5ws7Saos",
    "https://www.youtube.com/embed/9yRlu1-_n3I", "https://www.youtube.com/embed/TJlhEC9AHFk"
];

var reAmazonas = ["Amazonas", "Amazonas", "Amazonas", "Amazonas", "Amazonas", "Amazonas", "Amazonas", "Amazonas"];
var noAmazonas = ["chicarron de pirarucu", "Casabe", "Pescado Moqueado", "Licor de mora", "Guarapo de piña", "Tucupi", "Farina", "tapioca"];
var tipAmazonas = ["chicharon", "arepa", "pescado", "licor", "caldo", "harina", "arepa"];
/***********************************************************************************************************************************/
/*                                                    Region Andina  = 1                                                         */
/***********************************************************************************************************************************/

var urlAndina = ["https://www.youtube.com/embed/-TZ2zd3CbYU", "https://www.youtube.com/embed/hLFS5WvARdU", "https://www.youtube.com/embed/fed_bdj-ZN4",
    "https://www.youtube.com/embed/8XVcoPFE18Y", "https://www.youtube.com/embed/pkknYMuW9YY", "https://www.youtube.com/embed/HlQhwALPqu8",
    "https://www.youtube.com/embed/BRKj67_1gZY", "https://www.youtube.com/embed/f7M8CXj2Bws"
];

var reAndina = ["Andina", "Andina", "Andina", "Andina", "Andina", "Andina", "Andina", "Andina"];
var noAndina = ["Cocido boyacense", "ajiaco", "bandeja paisa", "masato", "champu", "almojabana", "bocadillo", "cuajada con melao"];
var tipAndina = ["cocido", "ajiaco", "bandeja", "licor", "bebida", "almojabana", "postre", "postre"];

/***********************************************************************************************************************************/
/*                                                    Region Caribe  = 2                                                           */
/***********************************************************************************************************************************/


var urlCaribe = ["https://www.youtube.com/embed/RpdKqzsyr0A", "https://www.youtube.com/embed/3nx3BWOxvmc", "https://www.youtube.com/embed/pm4RTyE52ew",
    "https://www.youtube.com/embed/5D_QyhxGvwA", "https://www.youtube.com/embed/rE0X7Mw0Nsw", "https://www.youtube.com/embed/RljcyfpN-p0",
    "https://www.youtube.com/embed/ttJcp79zwNU", "https://www.youtube.com/embed/PRv_3mmwV6E"
];

var reCaribe = ["Caribe", "Caribe", "Caribe", "Caribe", "Caribe", "Caribe", "Caribe", "Caribe"];
var noCaribe = ["Ceviche de camarones", "Conejo guisado", "chicarron de pescado", "dulce de ñame", "Dulce leche cortada", "Cocada con panela", "limonada de coco", "jugo corozo"]
var tipCaribe = ["ceviche", "conejo", "chicharron", "dulce", "dulce", "cocada", "limonada", "jugo"];
/***********************************************************************************************************************************/
/*                                                    Region Insular  = 3                                                          */
/***********************************************************************************************************************************/

var urlInsular = ["https://www.youtube.com/embed/u9W8y_bMrYI", "https://www.youtube.com/embed/o7OcPYFhRaA", "https://www.youtube.com/embed/anjc9Qonvgs",
    "https://www.youtube.com/embed/Orqkt9jA59E", "https://www.youtube.com/embed/RljcyfpN-p0"
];

var reInsular = ["Insular", "Insular", "Insular", "Insular", "Insular", "Insular", "Insular", "Insular"];
var noInsular = ["Empanada de cangrejo", "frijoles con puerco", "Albondigas de pescado", "Poe", "Cocada"];
var tipInsular = ["Empanada", "frijoles", "albondigas", "postre", "cocada"];

/***********************************************************************************************************************************/
/*                                                    Region Orinoquía  = 4                                                        */
/***********************************************************************************************************************************/

var urlOrinoquia = ["https://www.youtube.com/embed/J--R-FVDDOc", "https://www.youtube.com/embed/CnvLHKN_pwg", "https://www.youtube.com/embed/14uIIuHueFk",
    "https://www.youtube.com/embed/ZTd5r4pd5kE", "https://www.youtube.com/embed/RUJN9nuoV70", "https://www.youtube.com/embed/ssG64KBVvDI",
    "https://www.youtube.com/embed/8XVcoPFE18Y", "https://www.youtube.com/embed/tl10IL12Ohw"
];

var reOrinoquia = ["Orinoquia", "Orinoquia", "Orinoquia", "Orinoquia", "Orinoquia", "Orinoquia", "Orinoquia", "Orinoquia"];
var noOrinoquia = ["carne a la llanera", "caldo de corroncho", "capo relleno", "arequipe de yuca", "dulce Marañon", "dulce de lechosa", "masato de arroz", "Jugo de carambola"];
var tipOrinoquia = ["carne", "caldo", "caldo", "arequipe", "dulce", "dulce", "masato", "jugo"];

/***********************************************************************************************************************************/
/*                                                    Region Pacífico  = 5                                                         */
/***********************************************************************************************************************************/

var urlPacifico = ["https://www.youtube.com/embed/G-k6KnT-NiY", "https://www.youtube.com/embed/Kd-T_oc7Xhg", "https://www.youtube.com/embed/7O5dt4NZDNU",
    "https://www.youtube.com/embed/gSzPr5-QxLs", "https://www.youtube.com/embed/tgM1qEJ7TkQ", "https://www.youtube.com/embed/wMQNrOwSQVA",
    "https://www.youtube.com/embed/lqsW8S4l-1Y", "https://www.youtube.com/embed/m64iShtoLho"
];

var rePacifico = ["Pacifico", "pacifico", "pacifico", "pacifico", "pacifico", "pacifico", "Pacifico", "pacifico"];
var noPacifico = ["Arroz atollado", "Arroz de coco", "Ensumacao", "cocadas", "Arroz con leche", "Fruta de pan", "Borojó", "Sirope"];
var tipPacifico = ["arroz", "arroz", "coco", "cocada", "postre", "pan", "bebida"];

/*------------------------------------- esta parte del codigo selecciona la region y sus videos------------------------------------*/

var matrizUrl = [urlAmazonas, urlAndina,
    urlCaribe, urlInsular,
    urlOrinoquia, urlPacifico
];

var matrizNo = [noAmazonas, noAndina,
    noCaribe, noInsular,
    noOrinoquia, noPacifico
];

var matrizRe = [reAmazonas, reAndina,
    reCaribe, reInsular,
    reOrinoquia, rePacifico
];

var matrizTip = [tipAmazonas, tipAndina,
    tipCaribe, tipInsular,
    tipOrinoquia, tipPacifico
];

var matrizCom = [matrizUrl, matrizNo,
    matrizRe, matrizTip
];


var contain = [""];

/*-------------------------------------logica basica-------------------------------------------*/

var nuDeRe = [""]; // funcion avanzar
var frame = [""]; // funcion avanzar

/*----------------------------------- este es el objeto video------------------------------------*/

var contain = [""];
var videos = [""];
var con = JSON.parse(localStorage.getItem('reposicion'));
var comparar = [""];

for (var j = 0; j < urlAndina.length; j++) {
    var video = {
        "titulo": matrizNo[con][j],
        "nickname": matrizRe[con][j],
        "url": matrizUrl[con][j], //  "NRV" : nuDeRe,
    }
    videos[j] = video;
}


/*--ciclo que cambia el html de mi array videos, se usa java para para posicionar los videos, titulos y nicnames--*/

for (var i = 0; i < videos.length; i++) {
    var posicion = "containerImg" + i;
    var nuDeRe = "idBoton" + i; //posicion de mi objeto en el html
    var frame = "idBoton" + i;

    contain += '<div class="containerImg" id="' + posicion + '" >' +
        '<iframe width="180px" id= "' + frame + ' " onmouseleave="reproducirPequeño(id);" class="posicionFrame" height="120px" src="' + videos[i].url + "?rel=0showinfo=0&controls=1&autoplay=0" + '" frameborder="0" >' + '</iframe>' +
        '<div class="videoDatos">' +
        '<p  class="tituloComida">' + videos[i].titulo + '</p>' +
        '<article class="nicknameRegion" >' + videos[i].nickname + '</article>' +
        '<button id="' + i + '" class="botonTrailer" onclick="reproducirVigrande(id)">' + '<strong>' + "Play" + '</strong>' + '</button>' +
        '</div>' +
        '</div>'
    document.getElementById("contenedorVideos").innerHTML = contain;
}



/*-------------La funcion avanzar se usa para darle play o stop a cada uno de los videos pequeños----------------*/

function reproducirVigrande(id) {
    var contGrande = [""];
    contGrande =
        '<iframe width="100%" height="100%" src="' + videos[id].url + "?rel=0showinfo=0&controls=1&autoplay=1" + '"  allow="autoplay" frameborder="0" >' + '</iframe>'


    document.getElementById("video-grande").innerHTML = contGrande;
}
/*--------------------------------------------------funcion que reproduce los videos pequeños-------------------------------------------------*/

/*-------------La funcion avanzar se usa para darle play o stop a cada uno de los videos pequeños----------------*/



function reproducirPequeño(idBoton) {
    console.log("repro pequeño");

}



/*--------------------------------------------------------------------reproduce los videos grandes de la busqueda---------------------------------------------*/
function reproducirVibuscar(col, fil) {
    console.log(col);
    console.log(fil);
    var contGrande = [""];
    contGrande =
        '<iframe width="100%" height="100%" src="' + matrizUrl[col][fil] + "?rel=0showinfo=0&controls=1&autoplay=1" + '"  allow="autoplay" frameborder="0" preload >' + '</iframe>'


    document.getElementById("video-grande").innerHTML = contGrande;
}


var palabra = [""];
/*----------------------------------------------------------esta funcion filtra los arrays y busca concidencias-----------------------------------------------------*/
function buscar() {
    var palabra = document.getElementById("cancion").value;
    var dato = { 'dato': palabra, }
    localStorage.setItem('dato', palabra);
}

var comparar = localStorage.getItem('dato');
var contaBuscar = [""];
var columna = [""]; // posicion columna
var fila = [""]; // posicion fila
var conta = 0; // esta variable cuadra las posiciones de las dos matrices


for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 8; j++) {
        contaBuscar = matrizRe[i][j];
        if (contaBuscar == comparar) {
            columna[conta] = i;
            fila[conta] = j;
            conta++;
        }
    }
}

console.log(columna);
console.log(fila);

for (var i = 0; i < columna.length; i++) {

    var posicion = "containerImg" + i;
    var nuDeRe = "idBoton" + i; //posicion de mi objeto en el html
    var frame = "idBoton" + i;
    var row = columna[i];
    var col = fila[i];


    contaBuscar += '<div class="containerImg" id="' + posicion + '" >' +
        '<iframe width="180px"  class="posicionFrame" height="120px" src="' + matrizUrl[row][col] + "?rel=0showinfo=0&controls=1&autoplay=0" + '" frameborder="0" >' + '</iframe>' +
        '<div class="videoDatos">' +
        '<p>' + matrizNo[row][col] + '</p>' +
        '<article>' + matrizRe[row][col] + '</article>' +
        '<button id="' + i + '" class="botonTrailer" onclick="reproducirVibuscar(row,id)">' + "play" + '</button>' +
        '</div>' +
        '</div>'


}

document.getElementById("contenedorVideos").innerHTML = contaBuscar;