var estadolicuadora = "apagado"
var sonidoslicuadora = document.getElementById("blender-sound");
var botonlicuadora = document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender");

function controlarlicuadora() {
    if (estadolicuadora == "apagado") {
        estadolicuadora = "encendido";
        hacerbrrbrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadolicuadora = "apagado"
        hacerbrrbrr();
        licuadora.classList.remove("active")
        /* console.log("me apagaste"); */ 
    }
}

function hacerbrrbrr(){
    if(sonidoslicuadora.paused){
        botonlicuadora.play();
        sonidoslicuadora.play();
    }else{
        botonlicuadora.play();
        sonidoslicuadora.pause();
        sonidoslicuadora.currentTime = 0;
    }
}