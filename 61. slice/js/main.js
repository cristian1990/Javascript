/*===========================================
                    SLICE
El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
===========================================*/
var cadena = "probando con 1 parametro";

var resultado = cadena.slice(3); //Imprime "bando metodos", ejecuta desde el indice 3.
document.getElementById('info').innerHTML = resultado;

//--------------------------------------------------

var cadena2 = "probando con 2 parametros";

var resultado2 = cadena2.slice(3, 6); //Imprime "bando metodos", ejecuta desde el indice 3.
document.getElementById('info2').innerHTML = resultado2; //Imprime "ban", Incluye del 3(incluido) al 6(no incluido)