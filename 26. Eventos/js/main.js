
/*============================
            EVENTOS
- Son aquellas situaciones que suceden cuando el usuario interactua con la pagina
por ejemplo cuando hace click en un boton o mueva el mouse, en fin alguna accion.
- Hay 2 tipos de eventos, los que occuren desde el DOM y los que ocurren desde el javascript
============================*/

//EJECUTAMOS ELVENTOS DESDE HTML
//Selecciono el div con id="recuadro"
var recuadro = document.querySelector("#recuadro");

//Creamos la funcion
function cambiarColor(){
    recuadro.style.background = "red";
}

//-------------------------------------------------

//EJECUTAMOS EVENTOS DESDE JAVASCRIPT
//Almacenamos el boton al que queremos dar click
var boton = document.querySelector('#boton');

//Adicionamos la funcion al evento
boton.addEventListener('click', moverCaja);

//Creamos la funcion
function moverCaja(){
    recuadro.style.width = "500px";
     //Cambiamos la transicion al ejecutar el evento
     recuadro.style.transition = "1s width ease";
}