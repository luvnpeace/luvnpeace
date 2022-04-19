<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$sql = "select id from member where name = '".$name."' and phone = '".$phone."'";
	$res = mysqli_query($conn,$sql);
	$row = mysqli_fetch_array($res);
	$cnt = mysqli_num_rows($res);
	
	if($cnt < 1){
		$id = "";
	}else{
		$id = $row['id'];
	}
	
	echo $id;
?>