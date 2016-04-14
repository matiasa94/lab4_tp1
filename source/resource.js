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

function success (game) {
	if (game == 1) loadDoc('backend/statisticsRegister.php?userID=' + localStorage.currentUser + '&result=1&game=1',
					function (){console.log('Something back: ' + this)}
					);
}

function fail (game) {
	if (game == 1) loadDoc('backend/statisticsRegister.php?userID=' + localStorage.currentUser + '&result=0&game=1',
					function (){console.log('Something back: ' + this)}
					);
}
