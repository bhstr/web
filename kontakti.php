<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email settings
    $to = "info@nkarev.edu.mk";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message: $message\n";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Пораката е испратена успешно.";
    } else {
        echo "Грешка при испраќање на пораката.";
    }
} else {
    echo "Невалиден метод на барање.";
}
?>
