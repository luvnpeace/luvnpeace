<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 

	$id = $_POST['id'];

	$sql = "select idx from member where id = '".$id."'";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_num_rows($res);

	echo $cnt;
?>