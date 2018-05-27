/*===========================================
            SUMA DE ARREGLOS
===========================================*/

var arreglo = [3 , 5, 9, 12, 15, 25];
var suma = 0;

for(var i = 0; i < arreglo.length; i++){
    suma += arreglo[i];
}

document.write("La suma es: " + suma);