/*======================================
				FOR
======================================*/
var matriz = ['lunes','martes','miercoles','jueves','viernes'];

var longitud = matriz.length;

for(var i = 0; i < longitud; i++){
	console.log(matriz[i]);
}
console.log("\n"); //Salto de linea

/*======================================
				FOREACH
======================================*/
var productos = ['televisor','cocina','computadora','heladera','monitor'];
/* Forma 1
productos.forEach(function(elemento){
	console.log(elemento)
}); */

//Forma 2
function mostrarElemento(elemento){
	console.log(elemento);
}
productos.forEach(mostrarElemento);
console.log("\n");

/*======================================
			FOR... OF
======================================*/
var deportes = ['futbol','rugby','voley','basket','tenis'];

for(let elemento of deportes){ //let = indica variables solo dentro de la funcion
	console.log(elemento);
}