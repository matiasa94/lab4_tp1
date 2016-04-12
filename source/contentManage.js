function showMain () {
	window.location = "mainMenu.html";
}

function showLogForm () {
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

function showCurrentUser (id) {
	document.getElementById(id).innerHTML += " - " + localStorage.currentUser;
}