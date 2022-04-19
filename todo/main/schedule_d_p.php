<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$idx = $_SESSION['idx'];
	$class = 'd';

	$tdate = $_POST['tdate'];
	$stime = $_POST['stime'];
	$etime = $_POST['etime'];
	$content = $_POST['content'];
	
	$regdate = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "insert into schedule(idx,class,s_sdate,s_edate,s_stime,s_etime,content,regdate,regip) values('".$idx."','".$class."','".$tdate."','".$tdate."','".$stime."','".$etime."','".$content."','".$regdate."','".$ip."')";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	echo $cnt;
?>