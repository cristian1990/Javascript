/*=====================================
CONFIRM()
Pregunta algo al usuario y pregunta si acepta o no
  aceptar: devuelve TRUE
  cancelar: devuelve FALSE 
=====================================*/
var num1 = 10, num2 = 20, resultado = 0;
var confirmar = confirm('seguro desea sumar?');

if (confirmar == true) {
  resultado = num1 + num2;
  alert(num1 + " + " + num2 + " = " + resultado);
} else{
  resultado = num1 * num2;
   alert(num1 + " * " + num2 + " = " + resultado);
}
