/*TIPOS DE DATOS*/

//Numericos
var edad = 19 + 5; //entero
var precio = 185.36 * 2; //float

//String
var nombre = "Juan Carlos";
var apellido = "Perez";
alert("Su nombre es: " + nombre + " " + apellido);
var escape = 'Poner comillas en una "palabra" en especial';
document.write(escape);

document.write("<br>");

//Array
var dias = ["Lunes", "Martes", "Miercoles"];
document.write(dias[1]);

document.write("<br>");

//Object
var objeto = {
  color: "black",
  size: 15
}

//Boolean
var verdadero = true;
var falso = false;

//Undefined
var datos;
document.write(datos);

document.write("<br>");

//Null (sirve para borrar valores)
var numero = 1500;
numero = null;
document.write(numero);

document.write("<br>");

//NaN (Valor invalido)
var color = "amarillo";
document.write(color * 2);
