//Accedemos al primer elemento
var primerElemento = document.getElementById('primero');

//Modificamos el elemento con innerHTML (permite utilizar etiquetas html)
primerElemento.innerHTML = "Nuevo texto del <strong>elemento 1</strong>";

//Accedemos al segundo elemento
var segundoElemento = document.getElementById('segundo');

//Modificamos el elemento con textContent (muestra todo como texto plano)
segundoElemento.textContent = "Nuevo texto del <strong>elemento 2</strong>";

//--------------------------------------------------------------------

var elementoAAgregar = document.createElement("li");
var contenido = document.createTextNode("Nuevo texto creado");

elementoAAgregar.appendChild(contenido);

//Accedemos al 3 li del documento
var lista1 = document.getElementsByTagName('li')[0].parentNode;
var ElementoAReemplazar = document.getElementsByTagName('li')[2];

//Reemplazamos los nodos con replaceChild, se crea uno y se elimina el anterior.
//replaceChild(elementoAAgregar, ElementoAReemplazar);
lista1.replaceChild(elementoAAgregar, ElementoAReemplazar);

//Seleccionamos el nodo a eliminar
var lista2 = document.getElementsByTagName('li')[0].parentNode;
var elementoABorrar = document.getElementsByTagName('li')[3];

//Eliminamos el nodo 4 de la lista
lista2.removeChild(elementoABorrar);
