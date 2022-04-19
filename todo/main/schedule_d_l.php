<?
	include_once $_SERVER['DOCUMENT_ROOT'].'/todo/inc/headinfo.php';
	
	$idx = $_SESSION['idx'];
	$class = 'd';
	$date = $_POST['date'];

	$result = array();

	$sql = "select * from schedule where idx = '".$idx."' and class = '".$class."' and s_sdate = '".$date."' and s_edate = '".$date."' order by s_stime, s_etime";
	$res = mysqli_query($conn,$sql);
	while($row = mysqli_fetch_array($res)){
		array_push($result, $row);
	}
	echo json_encode($result);
?>