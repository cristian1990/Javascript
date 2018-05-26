/*===========================================
VALIDACION DE FORMULARIO CHECKBOX
===========================================*/
function validarCheck(){
	var elemento = document.forms["miForm"]["miCheckbox"].checked;
	/*Tambien podria funcionar asi
	var elemento = document.getElementById("IdCheck").checked;*/

	if (elemento == true) {
		document.getElementById("info").innerHTML = "El elemento ha sido seleccionado";
		return false; //Para que no lo envie al servidor
	}else{
		document.getElementById("info").innerHTML = "El elemento NO ha sido seleccionado";
		return false; //Para que no lo envie al servidor
	}
}
