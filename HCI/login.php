<?php

session_start();

$connect = mysqli_connect('localhost','root','')or die("could not connect to database");

mysqli_select_db($connect, 'userregistration');

$username = $_POST['username'];
$password = $_POST['password'];

$s = "SELECT * FROM usertable WHERE username = '$username' && password = '$password'";

$result = mysqli_query($connect,$s);

$number = mysqli_num_rows($result);

if($number == 1){
    header('location: main.html');
}else{
    header('location: loginerror.html');
}
    
?>