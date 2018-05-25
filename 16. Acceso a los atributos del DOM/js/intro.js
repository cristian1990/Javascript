//Creamos un elemento div
var nuevoDiv = document.createElement("div");

//seleccionamos el section del html
var seccion = document.getElementById('contenedor');

//creamos el elemento a insertar y elegimos la posicion
var insertar = document.getElementsByTagName('div')[0];

//El método setAttribute () añade el atributo especificado a un elemento, y le da el valor especificado.
//método setAttribute (tipo, estilo)
nuevoDiv.setAttribute("class", "azul");

//Agregamos el div en section
seccion.insertBefore(nuevoDiv, insertar);

//-----------------------------------------------------------------------
//Cambiamos el enlace dinamicamente
document.getElementById('enlace').href = ("https://www.google.com.ar");
