/*ARREGLOS*/

//No es obligatorio establecer el tamaño del arreglo
var producto = ["Televisor", "Tablet", "Celular", "Monitor"];

//Modificamos el valor del indice 3
producto[1] = "Heladera";
document.write("El elemento 4 es: " + producto[3]);

//Indica la longitud del vector
document.write("<br> La longitud del array es: " + producto.length);

//Agregamos otro elemento al final del array
producto[producto.length] = "Cocina";
document.write("<br> Agregamos el elemento: " + producto[4]);
document.write("<br> La longitud del array es: " + producto.length);

//Otra forma de agregar datos al final del vector
producto.push("Lavarropas", "Secarropas", "Cafetera");
document.write("<br> La longitud del array es: " + producto.length);

//Eliminamos el ultimo elemento ingresado
producto.pop();
document.write("<br> La longitud del array es: " + producto.length);

//Imprimimos los productos
document.write("<br><br>LISTADO DE PRODUCTOS");
for (var i = 0; i < producto.length; i++)
{
  document.write("<br>" + producto[i] );
}

//Creamos otro vector
var colores = ["Rojo", "Verde", "Azul", "Violeta"];

//Concatenamos 2 vectores
var todos = producto.concat(colores);

//Imprimimos los productos
document.write("<br><br>LISTADO DE ELEMENTOS CONCATENADOS");
for (var i = 0; i < todos.length; i++)
{
  document.write("<br>" + todos[i] );
}

//El metodo JOIN separa los elementos del vector por lo que queramos
document.write("<br><br>UTILIZANDO JOIN<br>");
document.write(todos.join(" : "));

//Ordenamos los elementos
document.write("<br><br>ORDENAMOS LOS ELEMENTOS<br>");
var ordenados = todos.sort();
document.write(ordenados);
