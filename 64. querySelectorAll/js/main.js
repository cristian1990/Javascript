/*===========================================
             querySelectorAll
Este metodo se encarga de retornar elementos que tengan una clase o selector de CSS en comun
===========================================*/
function miFuncion(){

    //Retornamos todos los elementos que tengan la clase "miLink" y lo almacenamos
    var elementos = document.querySelectorAll("a[class = 'miLink']"); //ponemos la "a" de la etiqueta link

    //Mostramos la cantidad de elementos por consola
    console.log(elementos.length);

    //Cambiamos el color de fondo a cada elemento que tenga la clase "miLink"
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.backgroundColor = "green";
        elementos[i].style.fontSize = "20px";
    }
}