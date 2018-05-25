
var saludo = function(){
    alert('Hola como estas?');
}

var saludos = function(){
    alert('Hola como estas? de donde sos?');
}
var boton = document.getElementById('boton');

//Le añadimos al boton un evento de tipo click
boton.addEventListener("click", saludo); //funcion sin ()
boton.addEventListener("click", saludos); //funcion sin ()"

//Eliminamos el evento
boton.removeEventListener("click", saludo);

var saludo = function(e){
    alert('Este evento es del tipo: ' + e.type);
}

var link = function(s){
    console.log("Esta todo mal");
    s.preventDefault();
}


//------------------------------------------------------------

var saludo2 = function(){
    console.log('focus');
}
var input = document.getElementById('input');
//Focus() indica las veces que entramos a un input 
boton.addEventListener("focus", saludo2); //funcion sin ()"


var saludo3 = function(){
    console.log('blur');
}
var input = document.getElementById('input');
//blur() se ejecuta cuando salimos de un input
boton.addEventListener("blur", saludo3); //funcion sin ()"


var saludo4 = function(){
    console.log('change');
}
var input = document.getElementById('input');
//change() se ejecuta cuando modificamos algo en el input
boton.addEventListener("change", saludo4); //funcion sin ()" 