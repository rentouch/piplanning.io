<?php

// configure
$from = 'piplanning@piplanning.ch'; 
$sendTo = 'sticky@piplanning.ch';
$subject = 'Anfrage PI Planning';
$fields = array('name' => 'Name', 'phone' => 'Phone', 'email' => 'Email'); // array variable name => Text to appear in email
$okMessage = 'Anfrage wurde gesendet. Wir werden uns bei Ihnen melden';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "Eine neue Anfrage von PI Planning\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
