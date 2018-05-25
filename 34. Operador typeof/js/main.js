/*=====================================================
TYPEOF
El operador typeof se usa en cualquiera de los siguientes modos:

typeof operando
typeof (operando)

El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo. operando es la
cadena, variable, palabra clave u objeto para el que se devolverá su tipo. Los paréntesis son opcionales.

=====================================================*/


var respuesta = 10;

if (typeof respuesta === "string") {
	console.log("OK");
}else{
	console.log("Error, el tipo de valor es: "+ typeof respuesta);
}


var respuesta2 = "Hola";

if (typeof respuesta2 === "string") {
	console.log("OK");
}else{
	console.log("Error, el tipo de valor es: "+ typeof respuesta2);
}