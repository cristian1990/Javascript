var dato = "Cristian Silva";

//Retorna la longitud del texto
var textoUno = dato.length;

//Recorta las primeras 3 letras
var textoDos = dato.substring(3);

//Indicamos recorte desde el indice 1 al 5 (es lo que se ve)
var textoTres = dato.substr(1, 5);

//Devuelve la posicion de una letra especifica (la primer coincidencia)
var textoCuatro = dato.indexOf("a");

//Devuelve la posicion de una letra "a" a partir del indice 7
var textoCinco = dato.indexOf("a", 7);

//Devuelve la posicion de una letra "v" del final al principio
var textoSeis = dato.lastIndexOf("l");

//Reemplazamos una cadena de texto por otra
var textoSiete = dato.replace(dato, "Juan Gomez");

//Reemplazamos una el nombre cristian por otro
var textoOcho = dato.replace("Cristian", "Miguel");

//Reemplazamos la primer letra "a" por "-"
var textoNueve = dato.replace("a", "-");

//Cambiamos todo el texto a mayuscula
var textoDiez = dato.toUpperCase();

//Cambiamos todo el texto a minuscula
var textoOnce = dato.toLowerCase();

document.write(textoUno + "<br>");
document.write(textoDos + "<br>");
document.write(textoTres + "<br>");
document.write(textoCuatro + "<br>");
document.write(textoCinco + "<br>");
document.write(textoSeis + "<br>");
document.write(textoSiete + "<br>");
document.write(textoOcho + "<br>");
document.write(textoNueve + "<br>");
document.write(textoDiez + "<br>");
document.write(textoOnce + "<br>");
