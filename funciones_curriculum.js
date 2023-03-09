document.getElementById("boton_mostrar1").addEventListener("click", function() {
    document.getElementById("demo1").style.display = "block";
    document.getElementById("demo1.1").style.display = "block";
    document.getElementById("boton_ocultar1").style.display = "block";
});

document.getElementById("boton_mostrar2").addEventListener("click", function() {
    document.getElementById("demo2").style.display = "block";
    document.getElementById("demo2.1").style.display = "block";
    document.getElementById("boton_ocultar2").style.display = "block";
});
        
document.getElementById("boton_ocultar1").addEventListener("click", function() {
    document.getElementById("demo1").style.display = "none";
    document.getElementById("demo1.1").style.display = "none";
});

document.getElementById("boton_ocultar2").addEventListener("click", function() {
    document.getElementById("demo2").style.display = "none";
    document.getElementById("demo2.1").style.display = "none";
});