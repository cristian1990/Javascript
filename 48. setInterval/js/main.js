/*===========================================
	  		     SETINTERVAL
Ejecuta una funcion constantemente cada determinado tiempo
===========================================*/
//setInterval(funcion, tiempo)

var contador = 1;
var ejecutar = setInterval(imprimir, 2000);

function imprimir(){
	document.write("Contando " + contador + "</br>"); //contando 1
	contador++;

	if (contador == 6) {
		//si el contador llega a 6 finalizamos el setInterval
		clearInterval(ejecutar);
	}
}