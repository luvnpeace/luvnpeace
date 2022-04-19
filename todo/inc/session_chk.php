<?
	if(!isset($_SESSION['idx'])){
		echo "<script>alert('Login, please.'); location.href = '/todo/index.php';</script>";
	}else{
		if($_SESSION['idx'] < 1 || $_SESSION['idx'] == null || $_SESSION['idx'] == ""){
			echo "<script>alert('Login, please.'); location.href = '/todo/index.php';</script>";
		}
	}
?>