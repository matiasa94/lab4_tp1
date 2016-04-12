/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var urlImage;

function comenzar(){
	eleccionMaquina = Math.round(Math.random()*(3-1))+parseInt(1);
	document.getElementById("eleccionPC").src = "imagenes/interrogacion.jpg"
	//1: Piedra
	//2: Papel
	//3: Tijera
	if (eleccionMaquina == 1) urlImage = "imagenes/piedra.jpg";
	if (eleccionMaquina == 2) urlImage = "imagenes/papel.jpg";
	if (eleccionMaquina == 3) urlImage = "imagenes/tijera.jpg";
}

function piedra() {
	if (eleccionMaquina == null) return;
	document.getElementById("eleccionPC").src = urlImage;
	if (eleccionMaquina == 1) alert('EMPATE!');
	if (eleccionMaquina == 2) alert('PERDISTE!');
	if (eleccionMaquina == 3) alert('GANASTE!');
	
	eleccionMaquina = null;
}

function papel() {
	if (eleccionMaquina == null) return;
	document.getElementById("eleccionPC").src = urlImage;
	
	if (eleccionMaquina == 1) alert('GANASTE!');
	if (eleccionMaquina == 2) alert('EMPATE!');
	if (eleccionMaquina == 3) alert('PERDISTE!');
	eleccionMaquina = null;
}

function tijera() {
	if (eleccionMaquina == null) return;

	document.getElementById("eleccionPC").src = urlImage;
	if (eleccionMaquina == 1) alert('PERDISTE!');
	if (eleccionMaquina == 2) alert('GANASTE!');
	if (eleccionMaquina == 3) alert('EMPATE!');
	eleccionMaquina = null;
}