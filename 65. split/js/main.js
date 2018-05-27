/*===========================================
             split
Este metodo se encarga dividir una cadena en cadenas pequeñas y se podrian almacenar en un arreglo
===========================================*/
var cadena = "Los productos que tenemos";
var arreglo = [];

document.write("La cantidad de elementos en el arreglo es: " + arreglo.length + "<br><br>"); //Imprime 0

//Dividimos la cadena cada vez que se encuentre un espacio (" ") osea separamos todas las palabras y las almacenamos en un array
arreglo = cadena.split(" "); //Tambien podriamos pasarle expresiones regulares como parametro

//Mostramos todos los elementos del arreglo
for(var i = 0; i < arreglo.length ; i++){
    document.write(i + " => " + arreglo[i] + "<br>");
}

document.write("La cantidad de elementos del arreglo es: " + arreglo.length); //Imprime 3