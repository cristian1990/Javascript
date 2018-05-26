/*===========================================
	  		VALIDACION DE NUMEROS
===========================================*/
function validar(){
	var texto;

	//Obtengo en numero ingresado y no guardo
	var numero = document.getElementById("caja").value;

	if (numero < 1 || numero >8) {
		texto = "Input invalido";
	}else{
		texto = "Input valido"; //entre 1 y 8
	}

	//innerHTML = sirve para modificar el contenido de un elemento HTML 
	//Muestro en pantalla el contenido del texto
	document.getElementById("info").innerHTML = texto;
}

//-----------------------------------------------------------------

function validarNumero(){
	var texto;

	//Obtengo en numero ingresado y no guardo
	var numero = document.getElementById("caja2").value;

	//isNaN = Evalua si NO es un numero, retorna true si no lo es y false si lo es
	//Evaluo, si NO es un numero o es menor a 1 o es mayor a 8
	if (isNaN(numero) || numero < 1 || numero >8) {
		texto = "Input invalido";
	}else{
		texto = "Input valido"; //entre 1 y 8
	}

	//innerHTML = sirve para modificar el contenido de un elemento HTML 
	//Muestro en pantalla el contenido del texto
	document.getElementById("info2").innerHTML = texto;
}


//-----------------------------------------------------------------

function validarNumeroColor(){
	var texto;

	//Obtengo en numero ingresado y no guardo
	var numero = document.getElementById("caja3").value;

	//isNaN = Evalua si NO es un numero, retorna true si no lo es y false si lo es
	//Evaluo, si NO es un numero o es menor a 1 o es mayor a 8
	if (isNaN(numero) || numero < 1 || numero >8) {
		texto = "<span style = 'color:blue;'> Input invalido</span>";
	}else{
		texto = "<span style = 'color:green;'> Input valido</span>"; //entre 1 y 8
	}

	//innerHTML = sirve para modificar el contenido de un elemento HTML 
	//Muestro en pantalla el contenido del texto
	document.getElementById("info3").innerHTML = texto;
}