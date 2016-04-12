/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar() {
	contadorIntentos = 0;
	numeroSecreto = Math.round(Math.random()*100);
	
	document.getElementById("message").innerHTML = "EL NUMERO HA SIDO GENERADO!";
	document.getElementById("intentos").value = contadorIntentos;
}

function verificar() {
	if (numeroSecreto == null) {alert("Genere un nuevo numero para comenzar."); return; }
	
	contadorIntentos++;
	document.getElementById("intentos").value = contadorIntentos;

	if (document.getElementById("numero").value == numeroSecreto) {
		document.getElementById("message").innerHTML = "USTED HA GANADO EN " + contadorIntentos + " INTENTOS!";
		numeroSecreto = null;
		return;
	}

	if (document.getElementById("numero").value < numeroSecreto) document.getElementById("message").innerHTML = "EL NUMERO SECRETO ES MAYOR!";
	else document.getElementById("message").innerHTML = "EL NUMERO SECRETO ES MENOR!";
}