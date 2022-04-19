<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/session_chk.php'; 
	
	$idx = $_POST['modi_idx'];
	$name = $_POST['modi_name'];
	$phone = $_POST['modi_phone'];
	$email = $_POST['modi_email'];
	$addr = $_POST['modi_addr'];
	$now = time();
	$ip = $_SERVER['REMOTE_ADDR'];
	$chk = $_POST['modi_pw_chk'];

	if($chk == 'y' || $chk == null || $chk == ''){
		$pw = $_POST['modi_pw'];
		$spw = md5($pw);
		$sql = "update member set pw='".$spw."',name='".$name."',phone='".$phone."',email='".$email."',addr='".$addr."',moddate='".$now."',modip='".$ip."' where idx='".$idx."'";
	}else{
		$sql = "update member set name='".$name."',phone='".$phone."',email='".$email."',addr='".$addr."',moddate='".$now."',modip='".$ip."' where idx='".$idx."'";
	}

	$res = mysqli_query($conn,$sql);
	$cnt = mysqli_affected_rows($conn);

	if($cnt > 0){

		if(!isset($_SESSION['name'])){
			$_SESSION['name'] = $name;
		}else{
			$_SESSION['name'] = $name;
		}

		if(!isset($_SESSION['phone'])){
			$_SESSION['phone'] = $phone;
		}else{
			$_SESSION['phone'] = $phone;
		}

		if(!isset($_SESSION['email'])){
			$_SESSION['email'] = $email;
		}else{
			$_SESSION['email'] = $email;
		}

		if(!isset($_SESSION['addr'])){
			$_SESSION['addr'] = $addr;
		}else{
			$_SESSION['addr'] = $addr;
		}

		echo "<script>alert('Modifying completed.'); history.go(-1);</script>";
	}else{
		echo "<script>alert('Modifying failed.'); history.go(-1);</script>";
	}

?>