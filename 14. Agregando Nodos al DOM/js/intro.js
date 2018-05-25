//El método createElement() crea un nodo elemento con el nombre especificado
var elemento = document.createElement("li");

//El método createTextNode() crea un nodo de texto con el texto especificado.
var contenido = document.createTextNode("--Nuevo nodo de texto--");

//Agregamos el contenido dentro de un elemento con appendChild()
elemento.appendChild(contenido);

//Agregamos el elemento al body o donde necesitemos
//parentNode() Nos indica quien es su elemento padre
var padre = document.getElementsByTagName('li')[0].parentNode;
//var padre = document.getElementById('lista'); Es igual a lo de arriba

//Agrego al final del elemento padre
padre.appendChild(elemento);

//Agrego al principio del elemento padre
hijo = document.getElementsByTagName('li')[0];
//El método insertBefore () inserta un nodo como un niño, justo antes de un elemento secundario existente, que se especifica.
padre.insertBefore(elemento, hijo);
