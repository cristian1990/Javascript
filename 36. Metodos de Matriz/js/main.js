/*=====================================================
MATRIZ
Una matriz es una variable especial, que puede contener más de un valor a la vez.

shift() = Elimina el primer elemeto existente en una matriz
		  Retorna el elemento eliminado

pop() = Elimina el ultimo elemeto existente en una matriz
		Retorna el elemento eliminado

push() = Sirve para añadir un elemento a la matriz
		 pero lo añade al final

splice() = El método splice() cambia el contenido de un array
		   eliminando elementos existentes y/o agregando nuevos elementos.
		   array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
=====================================================*/
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

//Elimino el primer elemento de la matriz (lunes)
var borrado = dias.shift();
console.log(dias);

//Imprimo el elemento eliminado
console.log("El dia borrado es: " + borrado);

//-------------------------------------------------------

var borrado2 = dias.pop();
console.log(dias);

//Imprimo el elemento eliminado
console.log("El dia borrado es: " + borrado2);

//-------------------------------------------------------

var añadido = dias.push("Sabado");
console.log(dias);
console.log("El dia añadido es: " + añadido);

//-------------------------------------------------------
//Eliminamos el dia miercoles
dias.splice(1, 1);
console.log(dias);

//Vuelvo a añadir e dia miercoles
dias.splice(1,0,"Miercoles");
console.log(dias);

//Añadir y eliminar a la vez. Cambio el sabado porel domingo
dias.splice(3,1,"Domingo");
console.log(dias);
