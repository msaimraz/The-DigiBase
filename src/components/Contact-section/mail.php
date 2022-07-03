<?php
//get data from form  

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "msraza.02@gmail.com";
$subject = "Mail From The DigiBase";

$txt = "Name = " . $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@digibase.com" . "\r\n" .
    "CC: msraza.002@gmail.com";
if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
//redirect
// header("Location:thankyou.html");
