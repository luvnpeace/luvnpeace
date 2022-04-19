<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php'; 

	if(isset($_SESSION['idx'])){
		unset($_SESSION['idx']);
	}

	if(isset($_SESSION['id'])){
		unset($_SESSION['id']);
	}

	if(isset($_SESSION['name'])){
		unset($_SESSION['name']);
	}

	if(isset($_SESSION['phone'])){
		unset($_SESSION['phone']);
	}

	if(isset($_SESSION['email'])){
		unset($_SESSION['email']);
	}

	if(isset($_SESSION['addr'])){
		unset($_SESSION['addr']);
	}

	session_destroy();

	echo "<script>alert('See you, my friend.'); location.href='/todo/index.php';</script>";
?>