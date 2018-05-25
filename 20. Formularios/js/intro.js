//Seleccionamos el formulario
var formulario = document.getElementsByName('formulario')[0];
var elementos = formulario.elements;
var boton = document.getElementById('btn');

//Funcion para validar el input
var validarNombre = function(e){
    if(formulario.nombre.value == 0){ //chequeamos si ingreso algo
        alert("completa el campo nombre");
        //El método preventDefault () cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
        e.preventDefault();
    }
}

var validarRadio = function(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
    } else {
        alert("Completa el campo sexo");
        e.preventDefault(); //Prevenimos el envio de los datos
    }
}

var validarCheckbox = function(e){
    if(formulario.terminos.checked == false){
        alert("Acepta los terminos");
        e.preventDefault();
    }
}


//Validamos todos los campos
var validar = function(e){
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
}

//Agregamos el evento al formulario
formulario.addEventListener("submit", validar);