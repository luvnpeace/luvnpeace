<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$s_idx = $_POST['s_idx'];
	$s_stime = $_POST['stime'];
	$s_etime = $_POST['etime'];
	$content = $_POST['content'];
	$class = 'd';
	
	$moddate = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "update schedule set s_stime='".$s_stime."',s_etime='".$s_etime."',content='".$content."',moddate='".$moddate."',modip='".$ip."' where s_idx = '".$s_idx."'";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	echo $cnt;
?>