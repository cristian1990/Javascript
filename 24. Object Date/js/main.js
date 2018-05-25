(function(){
	//Almacenamos la fecha que tiene el sistema con Date()
	var fecha = new Date();
	document.write(fecha);

	//Extraemos la hora
	console.log(fecha.getHours());
	//Extraemos los minutos
	console.log(fecha.getMinutes());
	//Extraemos los segundos
	console.log(fecha.getSeconds());

	//Extraemos el numero del dia de la semana
	console.log(fecha.getDay());
	//Extraemos el numero del dia del mes
	console.log(fecha.getDate());
	//Extraemos el mes
	console.log(fecha.getMonth());
	//Extraemos el año
	console.log(fecha.getFullYear());


}())