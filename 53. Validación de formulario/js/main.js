/*===========================================
VALIDACION DE FORMULARIO DEL LADO DEL CLIENTE
===========================================*/
function validarFormulario(){
	var texto;
	//document.forms = tengo una referencia de todos los formularios de la pagina
	//Obtengo el contenido del formulario
	var usuario = document.forms["miForm"]["nombre"].value;

	if (usuario == null || usuario == "") {
		texto = "<span style = 'color:red;'>Por favor ingrese su nombre de usuario</span>";
		document.getElementById("info").innerHTML = texto;
		return false; //para que no envie directo al servidor
	}
	else if (usuario.length < 5) {
		texto = "<span style = 'color:red;'>El usuario debe tener al menos 5 letras</span>";
		document.getElementById("info").innerHTML = texto;
		return false; //para que no envie directo al servidor
	}
}
