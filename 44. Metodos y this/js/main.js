/*===========================================
	  			METODOS
===========================================*/
var persona = {
	nombre: "juan",
	edad: "36",
	ocupacion: "programador",
	color: "rojo",
	ciudad: "buenos aires",

	//Creamos un metodo
	caminar: function(){
		console.log("Estoy caminando");
	},
	saludar: function(){
		//this = para acceder al atributo del objeto donde estoy
		console.log("Hola buenas noches, me llamo " + this.nombre);
	},
};
//De esta manera no imprime el nombre porque no esta indicado con "this" como metodo de un objeto
var otrafuncion = persona.saludar;
otrafuncion();

//De esta manera si impime correctamente
persona.saludar();

persona.caminar();