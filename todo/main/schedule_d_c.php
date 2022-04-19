<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$s_idx = $_POST['s_idx'];
	$class = 'd';
	
	$moddate = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$select_sql = "select success from schedule where s_idx = '".$s_idx."'";
	$select_res = mysqli_query($conn,$select_sql);
	$row = mysqli_fetch_array($select_res);

	if($row['success'] != "y"){
		$sql = "update schedule set success = 'y',moddate = '".$moddate."',modip = '".$ip."' where s_idx = '".$s_idx."'";
	}else{
		$sql = "update schedule set success = '',moddate = '".$moddate."',modip = '".$ip."' where s_idx = '".$s_idx."'";
	}
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	echo $cnt;
?>