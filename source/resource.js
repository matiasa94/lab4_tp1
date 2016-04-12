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

function success (argument) {
	// body...
}
