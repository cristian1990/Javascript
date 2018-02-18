/*FUNCIONES*/
function Saludo(nombre)
{
  document.write(nombre);
}
Saludo("Hola como estas?");

document.write("<br>");

function Suma(numero1 , numero2)
{
  return numero1 + numero2;
}
document.write(Suma(10, 25));

document.write("<br>");

var numeroMaximo = function(valor1, valor2)
    {
        if (valor1 > valor2)
        {
              return valor1;
        }
            return valor2;
    }
document.write("El numero maximo es: " + numeroMaximo(10, 20));
