var radios;

function signUp() {
	var str = "backend/signUp.php?user=" + document.getElementById('newUserName').value + "&pass=" + document.getElementById('userPass1').value;
	if (document.getElementById('userPass1').value != document.getElementById('userPass2').value) {
			document.getElementById('message').innerHTML = "La contraeñas no coinciden!";
			return;
		}
	loadDoc(str, function() {document.getElementById('message').innerHTML = this;});
}

function signIn() {
	var str = "backend/signIn.php?user=" + document.getElementById('userName').value + "&pass=" + document.getElementById('userPass').value;
	loadDoc(str, function() {
		if (this == 'true') {
			localStorage.setItem("currentUser", document.getElementById('userName').value);
			showMain();
			}
		else document.getElementById('message').innerHTML = 'Usuario y/o contraseña inválidos';
	});
}

function submit() {	
	if (radios[0].checked == true) signIn();
	if (radios[1].checked == true) signUp();
}

