/*===========================================
                PRACTICA RELOJ
===========================================*/

//Creamos una funcion anonima, la cual va a ser el valor de la variable "inicializarHora" 
var inicializarHora = function(){
    
    var fechaActual = new Date(); //Creamos un objeto de tipo date()
    var tiempoHoras = fechaActual.getHours(); //Obtenemos la hora y lo almacenamos
    var tiempoMinutos = fechaActual.getMinutes(); //Obtenemos los minutos y lo almacenamos
    var tiempoSegundos = fechaActual.getSeconds(); //Obtenemos los segundos y lo almacenamos

    var mesActual = fechaActual.getMonth(); //Obtenemos el mes actual y lo almacenamos (mayo = 4)

    var diaActual = fechaActual.getDay(); //Obtenemos el dia actual y lo almacenamos
    var diaDelMes = fechaActual.getDate(); //Obtenemos el dia del mes y lo almacenamos
    var anioActual = fechaActual.getFullYear(); //Obtenemos el año actual y lo almacenamos
    var amOpm;

    //--------------------------------- MES ---------------------------------------------------
    //Creamos  un array con los meses del año
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //Obtenemos el mes actual donde nos encontramos
    var esteMes = meses[mesActual]; //Mostramos en el array "meses" el indice actual (mayo = 4)

    //--------------------------------- DIA ---------------------------------------------------
    //Creamos un array con los dias de la semana
    var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    //Obtenemos el dia actual donde nos encontramos
    var esteDia = diasDeLaSemana[diaActual]; //Mostramos en el array "diasDeLaSemana" el indice actual (sabado = 6)

    //------------------------------- AM o PM -------------------------------------------------
    //Si la hora es mayor a 12 se almacena "pm" en la variable si no es mayor que 12 se almacena "am"
    amOpm = (tiempoHoras > 12) ? "pm" : "am";

    //--------------------------------- HORA -------------------------------------------------
    //nos aseguramos que la hora se mantenga entre 1 y 12
    //si la hora es mayor a 12 le restamos 12, si no es mayor se mantiene el mismo numero
    tiempoHoras = (tiempoHoras > 12) ? tiempoHoras - 12 : tiempoHoras;

    //Si la hora es menor a 10 anteponemos un "0" al principio, si no se mantiene el mismo numero
    tiempoMinutos = (tiempoMinutos < 10) ? "0" + tiempoMinutos : tiempoMinutos;

    //Si minutos es menor a 10 concatenamos al principio con un "0" si no se mantiene el mismo numero
    tiempoSegundos = (tiempoSegundos < 10) ? "0" + tiempoSegundos : tiempoSegundos

    //-------------------------- MOSTRAMOS EN PANTALLA ---------------------------------------
    //Mostramos la hora en el div "info"
    document.getElementById("info").innerHTML = tiempoHoras + ":" + tiempoMinutos + ":" + tiempoSegundos + " " + amOpm; 
    
    //Mostramos la fecha en el div "laFecha"
    document.getElementById("laFecha").innerHTML = esteDia + " " + diaDelMes + " de " + esteMes + " del " + anioActual;
}

//Ejecutamos la funcion
inicializarHora();

//Utilizamos setInterval para ejecutar la funcion cada segundo y asi se actualicen los minutos
setInterval(inicializarHora, 1000); 