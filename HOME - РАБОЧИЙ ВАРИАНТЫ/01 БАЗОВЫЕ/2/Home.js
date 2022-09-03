<?php
$group_id = "-ID_ПРИЛОЖЕНИЯ";
$token = "ACCESS_TOKEN";
$api_ver = "5.73";
$text = "HELLO WORLD";
$url = sprintf('https://api.vk.com/method/wall.post?');
$ch = curl_init();
curl_setopt_array( $ch, array(
    CURLOPT_POST    => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_SSL_VERIFYPEER => FALSE,
    CURLOPT_SSL_VERIFYHOST => FALSE,
    CURLOPT_POSTFIELDS     => array(
    "owner_id" => $group_id,
    "from_group" => 1,
    "message" => $text,
    "access_token" => $token,
    "v" => "5.73",
),
    CURLOPT_URL => $url,
));
$query = curl_exec($ch);
curl_close($ch);
if(!$query){
    printf('Error');
    exit;
}
else{
    printf('Success');
    exit;
}
?>