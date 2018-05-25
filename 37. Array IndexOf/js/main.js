/*=====================================================
INDEXOF
El método indexOf () busca en la matriz para el elemento especificado, y devuelve su posición.
Devuelve -1 si no se encuentra el elemento.
Si el artículo está presente más de una vez, el método indexOf devuelve la posición de la primera ocurrencia.
=====================================================*/

var colores = ["rojo", "verde", "blanco", "azul"];

//Agrego un color
colores.push("violeta");

//Buscamos si esta en el array el color verde
if (colores.indexOf("verde") == true) {
	console.log("El color existe");
}else{
	console.log("El color NO existe");
}

//Borramos un elemento de la matriz
function borrarElementoMatriz(elemento, matriz){
	var indice = matriz.indexOf(elemento)

	if (indice > -1) {
		//El elemento existe
		matriz.splice(indice, 1);
	}
	else{
		//El elemento NO existe
		alert("El elemento no existe");
	}	
}

borrarElementoMatriz("verde", colores);
console.log(colores);