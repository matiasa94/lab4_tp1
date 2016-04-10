var radios;

function loadDoc(str, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	callback.call(xhttp.responseText);
    }
  };
  xhttp.open("GET", str, false); //str = URL to php file with variables
  xhttp.send();
}

function showLogForm() {
	radios = document.getElementById('LogInForm').elements['logger'];
	radios[0].checked = true;
	document.getElementById("signInForm").style.display = 'block';
	document.getElementById("signUpForm").style.display = 'none';
}

function changeForm () {
	if (radios[0].checked == true) {
		document.getElementById("signInForm").style.display = "block";
		document.getElementById("signUpForm").style.display = "none";
		document.getElementById("formTitle").innerHTML = "SIGN IN";
	}
	else {
		document.getElementById("signInForm").style.display = "none";
		document.getElementById("signUpForm").style.display = "block";
		document.getElementById("formTitle").innerHTML = "SIGN UP";
	}
}

function signUp() {
	var str = "backend/signUp.php?user=" + document.getElementById('newUserName').value + "&pass=" + document.getElementById('userPass1').value;
	if (document.getElementById('userPass1').value != document.getElementById('userPass2').value) {
			document.getElementById('message').innerHTML = "La contraeñas no coinciden!";
			return;
		}
		console.log(str);
	loadDoc(str, function() {document.getElementById('message').innerHTML = this;});
}

function signIn() {
	var str = "backend/signIn.php?user=" + document.getElementById('userName').value + "&pass=" + document.getElementById('userPass').value;
	loadDoc(str, function() {
		if (this == 'true') showMain();
		else document.getElementById('message').innerHTML = 'Usuario y/o contraseña inválidos';
	});
}

function submit() {	
	if (radios[0].checked == true) signIn();
	if (radios[1].checked == true) signUp();
}

function showMain () {
	window.location = "mainMenu.html";
}