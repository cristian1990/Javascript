/*======================================
	  EXPRESIONES FUNCIONALES
======================================*/
var num1 = 50;
var num2 = 20;

//Funcion anonima
var suma = function(){
	console.log(num1 + num2);
};
suma();
console.log("\n");
//---------------------------------

var colores = ['rojo', 'azul', 'verde', 'violeta', 'amarillo', 'naranja'];
//Automaticamente los elementos de la matriz colores, se pasan a "elemento" dentro de la funcion
colores.forEach(function(elemento){
	console.log('Elemento: ' + elemento);
});
console.log("\n");
//---------------------------------

//IIFE = Expresion funcional anonima auto invocada
//() = grupa todo en una expresion, el otro () invoca a la funcion

(function(){ //Creo una funcion anonima
	console.log('Funcion auto invocada');
})(); //Invoco la funcion