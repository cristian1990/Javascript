/*===========================================
	  			CLOSURES
Es una funcion que retorna desde otra funcion
y mantiene una referencia a su ambito
===========================================*/
for(var i = 0; i <= 5; i++){

	(function(){
		var z = i;
		setTimeout(function(){
			console.log(z);
		},z*1000);
	})(i);
}