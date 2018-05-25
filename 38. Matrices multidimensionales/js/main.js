/*=====================================================
MATRICES MULTIDIMENSIONALES
=====================================================*/
//Cosas que podemos guardar en una matriz
var color = "rojo";

var matriz = [
	color,
	"juan",
	10*10,
	"juan" + color,
	function saludar(){alert("Hola como estas");},
	["lunes", "martes", "miercoles", "jueves", "viernes",
		["azul", "verde", "blanco"]
	]
];

//Llamo al metodo dentro de la matriz
//matriz[4]();

//console.log(matriz[5]);

console.log(matriz[5][5][1]);

//console.log(matriz);