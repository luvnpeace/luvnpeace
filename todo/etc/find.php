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
  <link rel='stylesheet' href='/todo/share/css/find.css'>
 </head>
 <body onload="findPwOp();">
 <div class="container">
    <div class="title">To Do List</div>
	<div class="sub_title">Find ID/PW</div>
	<div class="content">
		<div class="back"><button type="button" onclick="goBack();">Back</button></div>
		<div class="find_id">
			<div class="f_title">ID</div>
			<div class="input">
				<div><input type="text" id="find_name" placeholder="Input your Name" maxlength="15" title="Name" value=""></div>
				<div><input type="text" id="find_phone" placeholder="Input your Phone" maxlength="13" title="Phone" value="" onkeyup="phoneChk2(this.value);"></div>
				<div id="find_id_chk"></div>
			</div>
			<div class="button">
				<div><button type="button" onclick="findIdChk();">Find</button></div>
			</div>			
		</div>
		<div class="find_pw">
			<div class="f_title">PW</div>
			<div class="input">
				<div></div>
				<div></div>
				<div id="find_pw_chk"></div>
			</div>
			<div class="button">
				<div id="find_pw_btn"></div>
			</div>
		</div>
	</div>
 </div>
 </body>
</html>
