<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Todo</title>
  <? include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; ?>
  <script src='/todo/share/js/function.js'></script>
  <link rel='stylesheet' href='/todo/share/css/join.css'>
  <link rel='stylesheet' href='/todo/share/css/font.css'>
 </head>
 <body>
 <div class="container">
  	<div class="title">To Do List</div>
	<div class="sub_title">Join</div>
	<div class="input">
		<form id="join_frm" method="post" action="">
		<div><input type="text" id="join_id" class="nec" name="join_id" placeholder="Input your ID" maxlength="15" title="ID" value="" onblur="idChk();"></div>
		<div id="join_idchk">ID Check Box</div>
		<div><input type="password" id="join_pw" class="nec" name="join_pw" placeholder="Input your PW" maxlength="15" title="PW" value=""></div>
		<div><input type="password" id="join_pw2" class="nec" placeholder="Confirm your PW" maxlength="15" title="PW" value=""></div>
		<div><input type="text" id="join_name" class="nec" name="join_name" placeholder="Input your Name" maxlength="15" title="Name" value=""></div>
		<div><input type="text" id="join_phone" class="nec" name="join_phone" placeholder="Input your Phone" maxlength="13" title="Phone" value="" onkeyup="phoneChk(this.value);"></div>
		<div><input type="text" id="join_email" class="nec" name="join_email" placeholder="Input your Email" maxlength="30" title="Email" value=""></div>
		<div><input type="text" id="join_addr" name="join_addr" placeholder="Input your Address" maxlength="30" title="Address" value=""></div>
		</form>
	</div>
	<div class="button">
		<div><button type="button" onclick="joinChk();">Join</button></div>
		<div><button type="button" onclick="history.go(-1);">Back</button></div>
	</div>
 </div>
 </body>
</html>
