/*===========================================
DIFERENCIA ENTRE == VS ===
===========================================*/
//COERCION: Significa diferencia de tipos, conversion de tipos de datos
var a = 20;
var b = 20;
document.write("Suma de a + b: " + (a + b));


var c = 30; //Trata de convertir este valor en un string, a eso se le llama coercion
var d = "30";
document.write("<br>Suma de c + d: " + (c + d));


var c = 40;
var d = "40";

// "==" compara si el contenido de una variable es igual el otro.
// "===" compara si el contenido y el tipo de una variable es igual el otro.

if(c === d){
  document.write("<br>Son iguales");
}else {
  document.write("<br>Son distntos");
}
