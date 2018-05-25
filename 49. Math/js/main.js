/*===========================================
	  		      MATH
===========================================*/

//redondea el numero pasado
var numero1 = Math.round(4.3); //4
document.write("Utilizando Math.round " + numero1 + "</br>");

//Redondea al valor absoluto
var numero2 = Math.abs(-10); //10
document.write("Utilizando Math.abs " + numero2 + "</br>");

//Redondea al valor superior
var numero3 = Math.ceil(4.2); //5
document.write("Utilizando Math.ceil " + numero3 + "</br>");

//Redondea al valor inferior
var numero4 = Math.floor(4.7); //4
document.write("Utilizando Math.floor " + numero4 + "</br>");

//Eleva un numero 
var numero5 = Math.pow(11, 2); //Elevamos 11 al cuadrado
document.write("Utilizando Math.pow " + numero5 + "</br>");

//Para sacar la raiz cuadrada
var numero6 = Math.sqrt(25); //sacamos la raiz cuadrada de 120
document.write("Utilizando Math.sqrt " + numero6 + "</br>");

//para ontener un numero al azar entre 0 y 1(no inclusive)
var numero7 = Math.random(); //sacamos la raiz cuadrada de 120
document.write("Utilizando Math.random " + numero7 + "</br>");

//Para ontener numeros al azar entre el 1 y 10 inclusive
var numero8 = Math.floor(Math.random() * 10 + 1);
document.write(numero8);