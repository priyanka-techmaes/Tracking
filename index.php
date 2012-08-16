<?php
include("include/header.php");
?>
<body id="bodylogin">

<div id="loginBg" class="shadow"> 
	<div id="lognHd"> Login </div>
	<div class="loginLine"></div> 
	<div style="margin-top:61px"> 
    
	<form name="login" action="file://localhost/C:/xampp/htdocs/trackingTool/mainLandingPage.html" id="loginForm" method="post">   

	<input type="text" id="logininput" name="userName" placeholder="Username" class="required" > 
    <br/>  <br/>
   <!-- <p style="color:#F00; margin-left:74px;"> Enter your Name </p>  -->
    
	<input type="password" id="logininputPassword" name="password" placeholder="Password" class="required" > 
    
     <!--<p style="color:#F00; margin-left:74px;"> Enter Your Password  </p> --> 
    
	<!--<a href="#" class="loginBtn-link"> Login </a> <br/>  <br/>-->
    <input class="loginBtn-link" type="submit" value="Login"/> <br/><br/>

	<!--<div id="forgetUsername"> <a class="forgot" href="#"> Forgot my username/password </a> </div>-->
 	</form>	
</div>
<br/>
<br/>
</div>`
<?php
include("include/footer.php");
?>
  



