/*FUNCIONES Y FORMULARIOS*/
var suma = function(num1, num2)
{
  //Tomamos el valor de un elemento del html por su "id"
  var num1 = parseInt(document.getElementById("numero1").value);
  var num2 = parseInt(document.getElementById("numero2").value);

  var resultado = num1 + num2;
  return resultado;
}

alert(suma(10,5));
