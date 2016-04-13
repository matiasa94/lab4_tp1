<?php

include "sources.php";
$con = create_conection ('salaDeJuegos');

$user = $_GET['user'];
$pass = $_GET['pass'];

$q = "select * from users where userID = '". $user ."'";
mysqli_select_db($con,"ajax_demo");
$result = mysqli_query($con,$q);

if ($result->num_rows != 0) echo "El ID ingresado ya esta registrado";
else {mysqli_query($con,"insert into users (userID, password) values ('" . $user . "','" . $pass ."')");
	echo "El usuario ha sido creado!";
	}

mysqli_close($con);
?>