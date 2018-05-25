/*===========================================
	  			CLOSURES
Es una funcion que retorna desde otra funcion
y mantiene una referencia a su ambito
===========================================*/

function funcionUno(){
	var numero = 1254;

	function funcionInterna(){
		console.log(numero);
	}

	return funcionInterna;
}

//Retorna el cuerpo de la funcion que esta dentro.
var variableExterna = funcionUno();
console.log(variableExterna);

//Retorno el contenido
variableExterna();

//-------------------------------
function funcionDos(){
	var cantidad = 5962;

	function funcionInterna(){
		console.log(cantidad);
	}

	funcionExterna(funcionInterna);
}

function funcionExterna(funcion){
	funcion();
}

function espera(mensaje){
	setTimeout(function(){
		console.log(mensaje);
	},2000) //2 segundos de tiempo de espera
}

espera("Hola como estas?");