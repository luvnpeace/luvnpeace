<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	
	$id = $_POST['id'];
	$pw = $_POST['pw'];
	$spw = md5($pw);

	$sql = "select idx from member where id = '".$id."' and pw = '".$spw."'";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_num_rows($res);

	echo $cnt;
?>