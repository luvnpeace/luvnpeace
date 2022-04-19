<?
	$host = 'localhost';
	$user = 'todo';
	$pass = 'todo100!';
	$db = 'todo';
	$conn = mysqli_connect($host,$user,$pass,$db) or die ('DB connection failed.');
	mysqli_select_db($conn,$db) or die('DB selection failed.');
?>