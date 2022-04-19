<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	
	$id = $_POST['login_id'];
	$pw = $_POST['login_pw'];
	$now = time();
	$ip = $_SERVER['REMOTE_ADDR'];

	$sql = "select * from member where id = '".$id."'";
	$res = mysqli_query($conn,$sql);
	$row = mysqli_fetch_array($res);

	if(!isset($_SESSION['idx'])){
		$_SESSION['idx'] = $row['idx'];
	}else{
		$_SESSION['idx'] = $row['idx'];
	}

	if(!isset($_SESSION['id'])){
		$_SESSION['id'] = $row['id'];
	}else{
		$_SESSION['id'] = $row['id'];
	}

	if(!isset($_SESSION['name'])){
		$_SESSION['name'] = $row['name'];
	}else{
		$_SESSION['name'] = $row['name'];
	}

	if(!isset($_SESSION['phone'])){
		$_SESSION['phone'] = $row['phone'];
	}else{
		$_SESSION['phone'] = $row['phone'];
	}

	if(!isset($_SESSION['email'])){
		$_SESSION['email'] = $row['email'];
	}else{
		$_SESSION['email'] = $row['email'];
	}

	if(!isset($_SESSION['addr'])){
		$_SESSION['addr'] = $row['addr'];
	}else{
		$_SESSION['addr'] = $row['addr'];
	}

	$log_sql = "insert into count_user(idx,id,regdate,regip) values('".$row['idx']."','".$row['id']."','".$now."','".$ip."')";
	$log_res = mysqli_query($conn,$log_sql);

	echo "<script>alert('Welcome, my friend.'); location.href='/todo/main/main.php';</script>";
?>