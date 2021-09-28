<?php

session_start(); 

$connect = mysqli_connect('localhost','root','') or die("could not connect to database");

mysqli_select_db($connect, 'userregistration');

$username = $_POST['username'];  
$email = $_POST['email'];
$password = $_POST['password'];

$s = "SELECT * FROM usertable WHERE username = '$username'"; 

$result = mysqli_query($connect,$s);

$number = mysqli_num_rows($result);

if($number == 1){
    header('location: usernametaken.html');
}else{
    $reg = "INSERT INTO usertable(username, email, password) VALUES ('$username','$email','$password')";
    mysqli_query($connect, $reg);
    header('location: registersuccess.html');
}

?>