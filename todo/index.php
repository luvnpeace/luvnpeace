<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Todo</title>
  <? include_once '/todo/inc/headinfo.php'; ?>
  <script src='/todo/share/js/function.js'></script>
  <link rel='stylesheet' href='/todo/share/css/index.css'>
 </head>
 <body>
 <div class="container">
	<div class="title">To Do List</div>
	<div class="sub_title">Login</div>
	<div class="input">
		<form id="login_frm" method="post" action="">
		<div><input type="text" id="login_id" name="login_id" placeholder="Input your ID" maxlength="15" title="ID" value=""></div>
		<div><input type="password" id="login_pw" name="login_pw" placeholder="Input your PW" maxlength="15" title="PW" value="" onkeyup="enterkey();"></div>
		<div id="login_chk"></div>
		</form>
	</div>
	<div class="button">
		<div><button type="button" onclick="loginChk();">Login</button></div>
		<div><button type="button" onclick="goJoin();">Join</button></div>
		<div><button type="button" onclick="goFind();">Find ID/PW</button></div>
	</div>
 </div>
 </body>
</html>
