<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$s_idx = $_POST['s_idx'];
	$class = 'd';

	$sql = "select * from schedule where s_idx = '".$s_idx."'";
	$res = mysqli_query($conn,$sql);
	$row = mysqli_fetch_array($res);

	echo json_encode($row);
?>