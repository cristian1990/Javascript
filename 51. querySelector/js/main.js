/*===========================================
	  		    querySelector
Se enfoca en el primer elemento que tenga un determinado id, clase o selector
===========================================*/
function miFuncion(){
	//Solo cambia al primer elemento que tiene la clase
	document.querySelector(".miLink").style.backgroundColor = "red";

	//Accedemos mediante la etiqueta "a"
	document.querySelector("a[class = 'letra']").style.fontSize = "30px";

	//---------------------------------------------------------------

	//MEJOR MANERA
	var elemento = document.querySelector("a[class = 'clarin']");

	elemento.style.color = "green";
	elemento.style.border = "4px solid gray";
}
