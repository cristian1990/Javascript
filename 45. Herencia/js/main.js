/*===========================================
	  			HERENCIA
Object prototype = contiene todos los metodos de un objeto, array, numero, string ej: Object.create()
Array prototype = contiene los metodos para un array ej: Array.push()
String prototype = contiene metodos para string ej: String.toUpperCase()
Number prototype = contiene metodos para numeros ej: Number.toFixed()
Funtion prototype = contiene metodos para funciones ej: Function.toSource()
===========================================*/
//anti-pattern (no recomendable)
Object.prototype.saludar = function(){
	console.log("Hola soy " + this.nombre);
};

var juan = {
	nombre: "Juan",
	apellido: "Sosa",
	edad: "23",
};
juan.saludar();

var pedro = {
	nombre: "Pedro",
	apellido: "Silva",
	edad: "28",
};
pedro.saludar();

//pido que muestre si el objeto tiene la propiedad "nombre" y esta definida en el objeto
console.log(juan.hasOwnProperty("nombre"));