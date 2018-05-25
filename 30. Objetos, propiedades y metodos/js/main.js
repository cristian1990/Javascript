/*========================================
OBJETOS: Es una coleccion de propiedades y metodos
		 Es la instancia de una clase
========================================*/

var objeto = {
	//Una propiedad es una asociacion entre clave y valor
	nombre:"juan",
	edad:31,
	//El metodo es una funcion dentro de un objeto
	descripcion: function(){
		console.log("Su nombre es " + objeto.nombre + " y tiene " + objeto.edad + " años");
	},

	//Creo un metodo con parametros
	saludar: function(saludo){
		console.log(saludo + " " + objeto.nombre);
	}
}


/*========================================
LLAMO A LOS OBJETOS
========================================*/
//Llamo al objeto y a su funcion
objeto.descripcion();

//Muestro solo el nombre
console.log("Nombre: ",objeto.nombre);

//Muestro solo la edad
console.log("Edad: ",objeto.edad);

objeto.saludar("Hola");

/*========================================
OBJETOS PRIMITIVOS
Ya creados en Javascript
========================================*/

//El objeto Date() se utiliza para trabajar con fechas y horas
var fechaCompleta = new Date();
console.log("La fecha es: ", fechaCompleta);

var fecha = new Date();
anio = fecha.getFullYear();
console.log("El año es: ", anio)