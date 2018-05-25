//Accedemos a los nodos (etiquetas) del html
//document = Raiz de nuestro DOM

/*Accedemos al nodo "p" del html con getElementsByTagName = (Obtiene todos los
  elementos en el documento con el nombre de la etiqueta se especifica) */
var elementosP = document.getElementsByTagName('p');

//innerHTML = Obtenemos el contenido del nodo, incluso las etiquetas que se pusieron.
//Cambiamos el contenido de la etiqueta "p"
elementosP[0].innerHTML = "El método getElementsByTagName () devuelve una colección de todos los elementos en el documento con el nombre de etiqueta especificada.";

//Accedemos nodo "p" mediante su id.
var elementosPconId = document.getElementById('segundo');
elementosP[1].innerHTML = "Cambiamos el texto del HTML seleccionando el Id";

// 1. Creamos el elemento
var elemento = document.createElement("h2");

// 2. Crear un nodo de texto
    //createTextNode = crea un nodo de texto con el texto especificado
var contenido = document.createTextNode("Este es el contenido de nuestro nodo");

// 3. Añadir el nodo de texto al elemento (le agregamos al h2 el contenido)
    //appendChild = Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
elemento.appendChild(contenido);

// 4. Agregar atributos al elemento (alineamos al centro)
elemento.setAttribute("align","center");

// 5. Agregar el elemento al documento
document.getElementById('subtitulo').appendChild(elemento);
