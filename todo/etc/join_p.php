<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	
	$id = $_POST['join_id'];
	$pw = $_POST['join_pw'];
	$spw = md5($pw);
	$name = $_POST['join_name'];
	$phone = $_POST['join_phone'];
	$email = $_POST['join_email'];
	$addr = $_POST['join_addr'];
	$now = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "insert into member(id,pw,name,phone,email,addr,regdate,regip) values('".$id."','".$spw."','".$name."','".$phone."','".$email."','".$addr."','".$now."','".$ip."')";
	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	if($cnt > 0){
		echo "<script>alert('Welcome, my friend.'); location.href='/todo/index.php';</script>";
	}else{
		echo "<script>alert('Join failed.'); history.go(-1);</script>";
	}

?>