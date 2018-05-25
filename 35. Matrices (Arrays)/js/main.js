/*=====================================================
MATRIZ
Una matriz es una variable especial, que puede contener más de un valor a la vez.
=====================================================*/

//Datos guardados en variables (no recomendable)
var auto1 = "Ford",
	auto2 = "Seat",
	auto3 = "Mercedes",
	auto4 = "Chevrolet",
	auto5 = "BMW";

//Creo una matriz (Recomendable)
var autos = ["Ford","Seat","Mercedes","Chevrolet","BMW"];

console.log(autos);
console.log("El auto en la posicion 3 es: " + autos[2]);

//Cambiamos el contenido del array
autos[3] = "Palio";
console.log(autos);

//Agrego una matriz dentro de otra
autos[2] = ["Palio", "Fitito", "Duna"];
console.log(autos);

//Obtengo el largo de la matriz
console.log(autos.length);
//Obtengo el largo del sub array
console.log(autos[2].length);


