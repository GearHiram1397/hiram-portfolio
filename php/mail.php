<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'mailer/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

 //Server settings
try {

    $mail->isSMTP();                                     //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                            //Enable SMTP authentication
    $mail->Username   = 'hiram1397@gmail.com';              //SMTP username 
    $mail->Password   = 'rcekqfeyrbazvpsa';                 //SMTP password
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;

    //Content
    $mail->isHTML(true);
    $mail-> CharSet= "utf-8";
    echo 'Message has been sent'; //message shown on sucsess message send
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; //message shown on errors
}