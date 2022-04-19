<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <? include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; ?>
  <? include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/session_chk.php'; ?>
  <script src='/todo/share/js/function.js'></script>
  <link rel='stylesheet' href='/todo/share/css/mypage.css'>
 </head>
 <body onload="pwBoxOp2();">
 <div class="container">
    <div class="title">To Do List</div>
	<div class="sub_title">Mypage</div>
	<div class="input">
		<form id="modi_frm" method="post" action="">
		<input type="hidden" name="modi_idx" value="<?=$_SESSION['idx']?>">
		<div><input type="text" id="modi_id" class="nec" name="modi_id" title="ID" value="<?=$_SESSION['id']?>" readonly></div>
		<div id="maintain">Maintain PW<input type="checkbox" id="modi_pw_chk" name="modi_pw_chk" title="PW" value="" onchange="pwBoxChk();"></div>
		<div id="modi_pw_box1"></div>
		<div id="modi_pw_box2"></div>
		<div><input type="text" id="modi_name" class="nec" name="modi_name" placeholder="Input your Name" maxlength="15" title="Name" value="<?=$_SESSION['name']?>"></div>
		<div><input type="text" id="modi_phone" class="nec" name="modi_phone" placeholder="Input your Phone" maxlength="13" title="Phone" value="<?=$_SESSION['phone']?>" onkeyup="phoneChk4(this.value);"></div>
		<div><input type="text" id="modi_email" class="nec" name="modi_email" placeholder="Input your Email" maxlength="30" title="Email" value="<?=$_SESSION['email']?>"></div>
		<div><input type="text" id="modi_addr" name="modi_addr" placeholder="Input your Address" maxlength="30" title="Address" value="<?=$_SESSION['addr']?>"></div>
		</form>
	</div>
	<div class="button">
		<div><button type="button" onclick="modiChk();">Modify</button></div>
		<div><button type="button" onclick="history.go(-1);">Back</button></div>
	</div>
 </div>
 </body>
</html>
