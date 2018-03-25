<?php
session_start();
include 'db_connect.php'; 
$con=connect();


?>

<html>
<head><title>First Login</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
	function mem_val()
	{
		var regex_pass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@$%!#]).{3,}$/;
		var pass=document.forms['pset']['passwd'].value;
		if(pass=='ditu' || regex_pass.test(pass))
		return true;
		alert("Enter Correct Password");
		return false;
	}
</script>
</head>
<body ata-spy="scroll" data-target=".navbar" data-offset="50">
<div class="container-fluid" style="background: linear-gradient(black, #2a2727); color:#fff;height:100px;">
  <h1>UniversityNetwork</h1>
 </div>

<nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>                        
			</button>
		</div>
	</div>
</nav>  
<div>
<form action="reset_mem_pass.php" action="POST" name="pset" onsubmit="return mem_val();" >
The password length must have the following conditions:
<ul>
<li>Must be of alteast length 3</li>
<li>Must contain atleast one lowercase,one uppercase alphabet,one digit</li>
<li>Must include atleast one or more special characters from @,$,%,!,#</li>
</ul>
<br>
<input type="password" name="passwd" placeholder="Enter your password" />
</form>
</div>

</body>
</html>

<?php
disconnect($con);
?>
