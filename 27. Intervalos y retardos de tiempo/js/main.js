/*====================================
SET INTERVAL (Intervalo de tiempo)
setInterval(funcion, tiempo)

funcion = funcion a ejecutar
tiempo = tiempo en que quiero ejecutar la funcion o quiero repetirla (en milisegundos) 
====================================*/

//Selecciono la etiqueta "p" con el id tiempo
var tiempo = document.querySelector("#tiempo");
var segundos = 0;

var intervalo = setInterval(function(){
	//Quiero mostrar los segundos en el body (innerHTML)
	tiempo.innerHTML = segundos;
	segundos++;
	console.log("segundos: ", segundos)
},1000);


/*====================================
SET TIMEOUT (Retardo de tiempo)
setTimeout(funcion, tiempo)

funcion = funcion a ejecutar
tiempo = tiempo en que quiero ejecutar la funcion o quiero repetirla (en milisegundos) 
====================================*/

setTimeout(function(){
	//Se va a ejecutar despues de 5 segundos
	alert("Se cumplio el tiempo");
	//clearInterval() = Sirve para borrar intervalos
	clearInterval(intervalo);

},5000);