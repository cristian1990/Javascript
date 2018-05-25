/*========================================
NUMEROS ALEATORIOS
-El objeto Math permite realizar tareas matematicas en los numeros
	Math.random = devuelve un numero aleatorio entre 0 (inclusive), y 1 (exclusivo)
	Math.floor = redondea al numero menor del decimal
	Math.ceil = redondea al numero mayor del decimal
	Math.round = devuelve el valor de X redondeado a su numero entero mas proximo
========================================*/

//Almaceno el parrafo con el id="numeroAleatorio"
var numeroRandom = document.querySelector("#numeroRandom");
var numeroFloor = document.querySelector("#numeroFloor");
var numeroCeil = document.querySelector("#numeroCeil");
var numeroRound = document.querySelector("#numeroRound");
var numero = 0;

numero = Math.random();
numeroRandom.innerHTML = numero;
console.log("numero", numero);


numero = Math.floor(Math.random()*100);
numeroFloor.innerHTML = numero;
console.log("numero", numero);


numero = Math.ceil(Math.random()*100);
numeroCeil.innerHTML = numero;
console.log("numero", numero);


numero = Math.round(Math.random()*100);
numeroRound.innerHTML = numero;
console.log("numero", numero);