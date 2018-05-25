/*===========================================
	  			OBJETOS
Una coleccion de propiedades y metodos
===========================================*/

var informacion = "El libro se estreno en 1987";
//creamos el objeto libro
var libro = {
	titulo: "IT",
	autor: "Stephen King",
	genero: "Terror",
	valoracion: 9,
	tags: ["Pennywise", "floating", "payaso", "Derry"],
	informacion: informacion,
};

//Accedemos a las propiedades del libro
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.genero);
console.log(libro.valoracion);
console.log(libro.tags[0]);
console.log(libro.informacion);
console.log("\n");

//Borramos el contenido de un atributo, apara undefined
console.log("Elemento borrado");
delete(libro.informacion);
console.log(libro.informacion);
console.log("\n");

//Otra manera de acceder a los atributos del objeto (no recomendable)
console.log(libro["titulo"]);
console.log(libro["autor"]);
console.log(libro["genero"]);
console.log(libro["valoracion"]);
console.log(libro["tags[0]"]);
console.log(libro["informacion"]);
console.log("\n");

//Recorremos el objeto con For... In
for(var propiedad in libro){
	console.log(propiedad);
}
console.log("\n");

//Mostramos la propiedad pero tambien el valor
for(var propiedad in libro){
	console.log(propiedad + " : " + libro[propiedad]);
}