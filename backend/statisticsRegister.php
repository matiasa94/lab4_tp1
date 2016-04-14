<?php

include "sources.php";
$con = create_conection();

$game = $_GET['game'];
$userID = $_GET['userID'];
$result = $_GET['result'];

switch ($game) {
	case '1':
		 if ($result == '1') $q = "update statistics_adivinanum set attempt = attempts + 1, won = won + 1 where userID = '" . $userID . "'";
		 if ($result == '0') $q = "update statistics_adivinanum set attempt = attempts + 1 where userID = '" . $userID . "'";
		break;
	
	default:
		# code...
		break;
}

mysqli_select_db($con,"ajax_demo");
$result = mysqli_query($con,$q);

#if ($result->num_rows == 0) echo "false"; else echo "true";
mysqli_close($con);

echo $q;
?>