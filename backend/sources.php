<?php

function create_conection (){
	$con = mysqli_connect('localhost','root','','saladejuegos');
	if (!$con) die('Could not connect: ' . mysqli_error($con));
	return $con;
	}
?>