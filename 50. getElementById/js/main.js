/*===========================================
	  		    getElementById
Permite tener acceso a un elemento determinado por su id
===========================================*/

//Cambiamos el contenido
document.getElementById("saludo").innerHTML = "Probando getElementById";

//Cambiamos el color
document.getElementById("saludo").style.color = "red";

//Cambiamos el tamaño del texto
document.getElementById("saludo").style.fontSize = "25px";

//----------------------------------------------------------

//Otra manera mejor de hacerlo mas limpio
var elemento = document.getElementById("mensaje");

//Cambiamos el contenido
elemento.innerHTML = "Probando getElementById";

//Cambiamos el color
elemento.style.color = "blue";

//Cambiamos el tamaño del texto
elemento.style.fontSize = "30px";