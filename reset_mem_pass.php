<?php
session_start();
include 'db_connect.php';
$con=connect();

$name=$_SESSION['name'];

$password=trim($pass=$con->real_escape_string($_REQUEST['passwd']));
$sql="UPDATE members set password='$password' where memname='$name'";
$result=mysqli_query($con,$sql);
header('Location:public.html');
disconnect($con);
?>