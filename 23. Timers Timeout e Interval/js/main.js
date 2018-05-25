//Ejecuta una funcion una vez que se acaba el tiempo especificado
(function(){
	var contador = 0;

	var saludo = function(){
		contador++;
		console.log(contador);
		//Cada 3 segundos se ejecuta la funcion
		setTimeout(saludo, 2000);
	}

	saludo();
}())	