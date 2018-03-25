<?php
session_start();
include 'db_connect.php'; 
$con=connect();
$name=trim($name=$con->real_escape_string($_REQUEST['memname']));
$password=trim($password=$con->real_escape_string($_REQUEST['pass']));

$_SESSION['name']=$name;
$_SESSION['passwd']=$password;

$sql="SELECT * FROM members WHERE memname='$name' AND password='$password'";
$result=mysqli_query($con,$sql);
$c=mysqli_num_rows($result);

if($c==1)
{
	if($password=='ditu')
	{
		header('Location:first_mem_pass.php');
	}
	if($password!='ditu')
	{
	header('Location: members.php');
	}
}
else
{
	echo "<script language=\"JavaScript\">\n";
	echo "alert('Username or Password was incorrect!');\n";
	echo "window.location='public.html'";
	echo "</script>";
	
}
disconnect($con); 
?>