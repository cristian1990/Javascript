
function checkearFruta() {
  var text;
  var fruta = document.getElementById("ingreso").value;

  switch(fruta) {
    case "Manzana":
      text = "No me gusta esta fruta";
      break;
    case "Naranja":
      text = "Esta fruta tiene muchas vitaminas";
      break;

    default:
      text = "Por favor ingrese una feuta correcta!";
  }
  //Muestro en el cuerpo del HTML
  //document.getElementById("mostrar").innerHTML = text;

  //Muestro con una ventana emergente
  alert(text);
}