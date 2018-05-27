/*===========================================
            reverse  sort  push
reverse = Muestra los elementos del arreglo en forma reversa
sort = Ordena un array
push = Inserta nuevos elementos en un array
===========================================*/
var arreglo = ["Argentina", "Peru", "Chile", "Bolivia", "Uruguay"];

document.write("<br>MOSTRAMOS EL ARRAY<br>");
for(var i = 0; i < arreglo.length; i++){
    document.write(arreglo[i] + " ");
}

document.write("<br><br>MOSTRAMOS EL ARRAY DE MANERA INVERSA<br>");
arreglo.reverse();
for(var i = 0; i < arreglo.length; i++){
    document.write(arreglo[i] + " ");
}

document.write("<br><br>MOSTRAMOS EL ARRAY ORDENADO<br>");
arreglo.sort();
for(var i = 0; i < arreglo.length; i++){
    document.write(arreglo[i] + " ");
}

document.write("<br><br>MOSTRAMOS EL ARRAY CON NUEVOS ELEMENTOS<br>");
arreglo.push("Brazil");
arreglo.push("Mexico");
arreglo.push("España", "Colombia", "Venezuela");
for(var i = 0; i < arreglo.length; i++){
    document.write(arreglo[i] + " ");
}

//----------------------------------------------------------------------------

var arreglo2 = ["Cordoba", "Formosa", "Chaco", "Corrientes", "Chubut"];
var arregloNumeros = [2 , 4 ,5, 9, 10, 12];

for(var i = 0; i<arregloNumeros.length; i++ ){

    //Si el numero es par
    if(arregloNumeros[i] % 2 == 0){
        arreglo2.push(arregloNumeros[i]);
    }
}

document.write("<br><br>MOSTRAMOS EL ARRAY CON NUEVOS ELEMENTOS NUMERICOS<br>");
for(var j = 0; j < arreglo2.length; j++){
    document.write(arreglo2[j] + " ");
}