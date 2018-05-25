/*========================================
CLASES
Son funciones constructoras y siempre las vamos a iniciar con Mayuscula
ejemplo: new String()
========================================*/

//CLASES PRIMITIVAS (clases precreadas por el lenguaje)

//Clase String
var string = new String("Esto es un string");
console.log("string", string);

//Clase Number
var numero = new Number(12);
console.log("numero", numero);

//Clase Boolean
var booleana = new Boolean(false);
console.log("booleana", booleana);

//--------------------------------------------

//CLASES COMPUESTAS (son las de tipo array)
var array = new Array("rojo", "amarillo", "azul");
console.log("array", array);

var objeto = new Object({nombre:"pedro",
						   edad:30})
console.log("object", objeto);

//--------------------------------------------

//CLASES CREADAS POR EL PROGRAMADOR
//Creamos el prototipo
function Persona(){
	//Propiedades publicas
	this.nombre;
	this.apellido;
}

var pers = new Persona();
pers.nombre = "Pablo";
pers.edad = "25 años";
console.log("persona", pers);

//Clases con parametros
function Animales(nombre, raza){
	this.nombre = nombre;
	this.raza = raza;
}

var mascota = new Animales("perro", "pitbull");
console.log("mascotas", mascota);