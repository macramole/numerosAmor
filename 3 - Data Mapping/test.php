<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $ch = curl_init();

    // curl_setopt($ch, CURLOPT_URL, "http://wefeel.csiro.au/api/emotions/primary/joy/secondary/timepoints");
    curl_setopt($ch, CURLOPT_URL, urldecode( $_GET["url"] ) );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec ($ch);

    curl_close($ch);

    print_r($server_output);
 ?>
