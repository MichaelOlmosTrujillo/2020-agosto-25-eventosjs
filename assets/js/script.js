var boton = document.getElementById("boton");
var imagen = document.getElementById("imagen")
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var teclado = document.getElementById("teclado");
var teclado1 = document.getElementById("teclado1");
var teclado2 = document.getElementById("teclado2");
var padre = document.getElementById("idPadre");
boton.addEventListener("click", () => {
    alert("Funciona el addEventListener");

})
imagen.addEventListener("mouseenter", () => {
    var tamano = imagen.style.width;
    if (tamano != "1000px") {
        imagen.style.width = "1000px";
        imagen.style.border = "5px solid black";


    }
})
imagen.addEventListener("mouseleave", () => {
    imagen.style.width = "300px";
})
div1.addEventListener("mouseenter", () => {

    div1.classList.replace("estilo0", "estilo1");
})
div1.addEventListener("mouseleave", () => {
    div1.classList.replace("estilo1", "estilo0");
})
div2.addEventListener("mousemove", () => {
    console.log("El mouse se está moviendo sobre el div 2");
})
div3.addEventListener("mousedown", () => {
    console.log("Se dio click");
})
div3.addEventListener("mouseup", () => {
    console.log("Despues de dar click, se deja de dar click, pero tiene que dejar de dar click dentro del area asociada al evento");
})
teclado.addEventListener("keydown", () => {
    console.log("Has oprimido una tecla")
})
teclado1.addEventListener("keypress", () => {
    console.log("Estas sosteniendo una tecla");
})
teclado2.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.key);
})
/* Objeto evento */

padre.addEventListener("click", (e) => {
    // console.log(e.target);
    // e.target.classList.add('estilo2');
    e.target.style.background = "rgb(173, 84, 20)";
})

// Crear elementos dentro un nodo o etiqueta
var lista = document.getElementById('lista');
var agregar = document.getElementById('agregar');

agregar.addEventListener('click', () => {
    //Trae el texto del input ingresado dentro del input
    var texto = document.getElementById('texto').value;
    //Creo una etiqueta, se puede crear cualquier etiqueta con "createElement"
    var etiqueta = document.createElement('li');
    //Le agrego un contenido a la etiqueta
    etiqueta.textContent = texto;
    lista.appendChild(etiqueta);

})