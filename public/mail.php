<?php
$sendto   = "info@rbs-agency.com"; // почта, на которую будет приходить письмо
$username = $_POST["name"];   // сохраняем в переменную данные полученные из поля c именем
$message = $_POST["message"]; // сохраняем в переменную данные полученные из поля c сообщением
$usermail = $_POST["email"]; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$phone = $_POST["phone"];

// Формирование заголовка письма
$subject  = "Application from the site";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Message from the site</h2>\r\n";
$msg .= "<p><strong>From:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Mail:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Phone:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$message."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<center style='color:#34C759;font-size:24px;margin-top:1%;text-align:center;font-family:DM Sans;'>Your message has been successfully sent.</center>";
} else {
	echo "<center style='color:red;font-size:24px;margin-top:1%;text-align:center;font-family:DM Sans;'>There was an error sending.</center>";
}
?>