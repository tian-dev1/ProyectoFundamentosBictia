var vistazo = document.getElementById("deo");

function reproducirVideo(){
   vistazo.play();
   vistazo.currentTime=0;
}
function detenerVideo(){
    vistazo.pause();
}