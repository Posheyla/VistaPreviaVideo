console.log("page loaded...");
var x = document.getElementById("myVideo");
document.getElementById("myVideo").muted = true;

function reproducir(elemento){
    x.play();
}

function parar(elemento){
    x.pause();
}