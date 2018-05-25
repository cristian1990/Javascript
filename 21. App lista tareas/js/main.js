
(function(){
	//VARIABLES
	var lista = document.getElementById("lista");
	var tareaInput = document.getElementById("tareaInput");
	var btnNuevaTarea = document.getElementById("btn-agregar");

	//FUNCIONES
	var agregarTarea = function(){
		//obtener el contenido del input
		var tarea = tareaInput.value;
		//Creamos una elemento li(fila)
		var nuevaTarea = document.createElement("li");
		//Creamos un link
		var enlace = document.createElement("a");
		//Agregamos el contenido del input a la variable contenido
		var contenido = document.createTextNode(tarea);

		//Hacemos una validacion simpleen caso de que no se ingrese nada
		if(tarea === ""){
			//En el input mostramos un mje con estilo placeholder
			tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
			//Al input le agrego el estilo error
			tareaInput.className = "error";
			//Terminos la ejecucion del programa
			return false;
		}

		//Agregamos el contenido dentro del enlace
		enlace.appendChild(contenido);
		//le establecemos un atributo href
		enlace.setAttribute("href", "#");
		//Agregamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		//Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		//Limpiamos el input una vez ingresada la tarea
		tareaInput.value = "";

		// vuelvo a hacer lista.children.length (Chequeo la cantidad de li en la lista y le asignamos un evento)
		for(var i = 0; i<= lista.children.length -1; i++){
			//Accedemos a  todos los li de la lista
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
	}
	}

	var comprobarInput = function(){
		//Quitamos el estado de error en el input
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	}

	var eliminarTarea = function(){
		//Del elemento padre elimino el que fue clickeado
		this.parentNode.removeChild(this);
	}

	//EVENTOS
	//Al hacer click en el boton agregar una nueva tarea
	//addEventListener() que permite agregarles uno, dos o más manejadores de eventos.
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//Comprobar input
	//Checkeamos que no este vacio.
	tareaInput.addEventListener("click", comprobarInput);

	//Borrando elementos de la lista
	//lista.children.length (Chequeo la cantidad de li en la lista y le asignamos un evento)
	for(var i = 0; i<= lista.children.length -1; i++){
		//Accedemos a  todos los li de la lista
		lista.children[i].addEventListener("click", eliminarTarea);
	}
}());