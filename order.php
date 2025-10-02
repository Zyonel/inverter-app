<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "kels_psolution@yahoo.com";  // change this to your email
    $subject = "New Solar Order";
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $product = htmlspecialchars($_POST['product']);
    $quantity = htmlspecialchars($_POST['quantity']);
    $installation = htmlspecialchars($_POST['installation']);
    $notes = htmlspecialchars($_POST['notes']);

    $message = "
    New Solar Order Received:

    Name: $name
    Email: $email
    Phone: $phone
    Address: $address
    Product: $product
    Quantity: $quantity
    Installation: $installation
    Notes: $notes
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "✅ Order placed successfully. We will contact you soon.";
    } else {
        echo "❌ Error: Unable to send your order. Please try again.";
    }
}
?>
