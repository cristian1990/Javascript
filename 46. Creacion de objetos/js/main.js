/*===========================================
	  		CREACION DE OBJETOS
===========================================*/
//Object create
var auto = {
	marca: "Fiat",
	modelo: "Duna",
	arrancar: function(){
		console.log("Voy a arrancar el auto " + this.marca);
	} 
};

var auto1 = Object.create(auto); //Creamos un objeto
auto1['color'] = "azul";
console.log(auto.isPrototypeOf(auto1));
console.log(Object.prototype.isPrototypeOf(auto));

//Otras maneras de crear objeto
var auto2 = {}; //manera mas utilizada
var auto3 = Object.create(Object.prototype);

//Imprimimos para comprobar la igualdad
console.log(Object.prototype.isPrototypeOf(auto2));
console.log(Object.prototype.isPrototypeOf(auto3));