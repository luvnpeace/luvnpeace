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
  <? include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/session_chk.php'; ?>
  <script src='/todo/share/js/function.js'></script>
  <link rel='stylesheet' href='/todo/share/css/calendar.css'>
  <link rel='stylesheet' href='/todo/share/css/font.css'>
 </head>
 <body onload="calendarOp();">
	<div class="container">
		<div class="title"><span><?=$_SESSION['name']?></span></span>'s To Do List</span></div>
		<div class="menu">
			<div class="mypage"><button type="button" class="mypage_btn" onclick="goMypage();">Mypage</button></div>
			<div class="logout"><button type="button" class="logout_btn" onclick="logoutChk();">Logout</button></div>
		</div>
		<div class="content">
			<div class="helper"></div>
			<div class="calendar">
				<div class="c_title">
					<div class="c_helper"></div>
					<div class="c_left" onclick="goLeft();"></div>
					<div class="c_year">
						<select class="c_year_list" onchange="goYM();"></select>
					</div>
					<div class="c_month">
						<select class="c_month_list" onchange="goYM();"></select>
					</div>
					<div class="c_right" onclick="goRight();"></div>
				</div>
				<div class="c_content"></div>
			</div>
			<div class="schedule"></div>
		</div>
	</div>
	<script src='/todo/share/js/calendar.js'></script>
 </body>
</html>
