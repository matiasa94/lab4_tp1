<?php

function create_conection (){
	$con = mysqli_connect('localhost','root','','test'); #saladejuegos / test / $db
	if (!$con) die('Could not connect: ' . mysqli_error($con));
	return $con;
	}
?>