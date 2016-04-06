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
	//1: Piedra
	//2: Papel
	//3: Tijera
	if (eleccionMaquina == 1) urlImage = "imagenes/piedra.jpg";
	if (eleccionMaquina == 2) urlImage = "imagenes/papel.jpg";
	if (eleccionMaquina == 3) urlImage = "imagenes/tijera.jpg";
}

function piedra() {
	document.getElementById("eleccionPC").src = urlImage;
	if (eleccionMaquina == 1) alert('EMPATE!');
	if (eleccionMaquina == 2) alert('PERDISTE!');
	if (eleccionMaquina == 3) alert('GANASTE!');
	document.getElementById("eleccionPC").src="imagenes/piedra.jpg";
}

function papel() {
	document.getElementById("eleccionPC").src = urlImage;
	if (eleccionMaquina == 1) alert('GANASTE!');
	if (eleccionMaquina == 2) alert('EMPATE!');
	if (eleccionMaquina == 3) alert('PERDISTE!');
	document.getElementById("eleccionPC").src="imagenes/piedra.jpg";
}

function tijera() {
	document.getElementById("eleccionPC").src = urlImage;
	if (eleccionMaquina == 1) alert('PERDISTE!');
	if (eleccionMaquina == 2) alert('GANASTE!');
	if (eleccionMaquina == 3) alert('EMPATE!');
	document.getElementById("eleccionPC").src="imagenes/piedra.jpg";
}