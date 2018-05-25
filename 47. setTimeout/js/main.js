/*===========================================
	  		     SETTIMEOUT
ejecuta una funcion despues de un determinado tiempo
===========================================*/
//setTimeout(metodo, tiempo)
/*
setTimeout(mensaje, 3000) //Tiempo en milisegundos

function mensaje(){
	document.write("Esta es una prueba");
}*/

var ejecutar;

function comenzar(){
	console.log("Ejecutando");
	ejecutar = setTimeout(function(){
		alert("Hola");
	} , 3000);
} 

function detenerse(){
	console.log("Detenido");
	//detenemos la ejecucion del metodo setTimeout
	clearTimeout(ejecutar);
}