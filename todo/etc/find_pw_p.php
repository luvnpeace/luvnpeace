<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	
	$id = $_POST['id'];
	$pw = $_POST['pw'];
	$spw = md5($pw);
	$now = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "update member set pw = '".$spw."',moddate = '".$now."',modip = '".$ip."' where id = '".$id."'";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);
	
	echo $cnt;
?>