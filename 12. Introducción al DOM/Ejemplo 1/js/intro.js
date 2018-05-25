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
