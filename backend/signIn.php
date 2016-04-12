<?php

include "sources.php";
$con = create_conection ();

$user = $_GET['user'];
$pass = $_GET['pass'];

$q = "select * from users where userID = '". $user ."' and password = '" . $pass . "'";
mysqli_select_db($con,"ajax_demo");
$result = mysqli_query($con,$q);

if ($result->num_rows == 0) echo "false"; else echo "true";
?>