<?php
$con=new mysqli('localhost','root','','key1');
if($con->connect_error){
	die ("Connection Failed");
}
$key=$_GET['k'];
if($key==='1234')
{
	$file=$_GET['f'];
	$file=fopen("b1.js","r");
	$cont=fread($file,filesize("b1.js"));
	//echo '<script>';
	echo $cont;
	//echo '</script>';
}
else
	die ("Wrong Key");
?>