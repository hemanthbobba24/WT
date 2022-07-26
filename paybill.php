<!DOCTYPE html>
<html lang="en">

<head>
    <title>Pay Bill</title>

    <style>
    body {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    form>* {
        margin: 20px 0;
    }

    form input {
        padding: 12px 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        border: 2px solid #333;
        width: 100%;
    }

    button {
        background: #007bff;
        color: #eee;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
    }

    nav {
        background: #007bff;
        color: #eee;
        width: 100%;
        padding: 10px;
        margin: 0;
    }
    </style>
</head>

<body>

    <nav>
        <h1>EasyMed Portal Payment</h1>
    </nav>
    <form method="post">
        <h1>Enter Your Credit Card Details</h1>
        <input type="text" placeholder="Credit Card No" name="cCard">
        <input type="text" placeholder="CVV" name="cvv">
        <input type="text" placeholder="Expiry Date" name="Expiry Date">
        <input type="text" placeholder="OTP" name="opt">

        <button onclick="alert('Bill Paid Succesfully ')">Pay Bill</button>
    </form>

</body>

</html>
<?php



?>