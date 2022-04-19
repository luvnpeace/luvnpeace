<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$s_idx = $_POST['s_idx'];
	$class = 'd';
	
	$moddate = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "delete from schedule where s_idx = '".$s_idx."'";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	echo $cnt;
?>