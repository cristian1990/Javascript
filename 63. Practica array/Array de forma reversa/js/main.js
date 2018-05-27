/*===========================================
          ARREGLOS DE FORMA REVERSA
===========================================*/

var arreglo = ["rojo", "verde", "azul", "blanco", "negro"]

//Cantidad de elementos en el array
document.write("Cantidad de elementos: " + arreglo.length); //Imprime 5, la cantidad de indices seria 5-1 = 4 

//----------------------------------------------------------------------

//Calculamos el tamaño de indices en el array
var tamanioArreglo = (arreglo.length - 1);

//Imprimimos el arreglo de forma reversa
document.write("<br><br> IMPRIMIMOS EL ARRAY DE FORMA REVERSA <br>");
for(var i = tamanioArreglo; i >=0; i--){
    document.write(arreglo[i] + " ");
}