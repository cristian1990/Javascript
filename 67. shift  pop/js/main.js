/*===========================================
                 shift pop
shift = Retorna el primer elemento de un arreglo
pop = Retorna el ultimo elemento de un arreglo
===========================================*/

var arreglo = ["Televisor", "Cocina", "Heladera", "Horno", "Lavarropas"];

document.write("RETORNAMOS TODOS LOS ELEMENTOS DEL ARRAY<br>");
for(var i = 0; i<arreglo.length; i++){
    document.write(arreglo[i] + " ");
}

document.write("<br><br>RETORNAMOS EL PRIMER ELEMENTO DEL ARRAY<br>");
document.write(arreglo.shift());

document.write("<br><br>RETORNAMOS EL ULTIMO ELEMENTO DEL ARRAY<br>");
document.write(arreglo[arreglo.length - 1]);

document.write("<br><br>RETORNAMOS EL ULTIMO ELEMENTO DEL ARRAY CON POP<br>");
document.write(arreglo.pop());