<form method="post">
    <input type='text' name='user_id' placeholder='кому'>
    <br>
    <input type='text' name='message' placeholder='сообщение'>
    <br>
    <input type='text' name='attachment' placeholder='вложение'>
    <br>
    <input type='submit' name='submit'>
</form>


<?php
// VK API - wall.post создаем запись на стене с вложением
$token = "ACCESS_TOKEN";
// Только STANDALONE токен!.
if(empty($_POST['user_id'])){}
if(empty($_POST['message'])){}
if(empty($_POST['submit'])){}
else{
    $query = file_get_contents("https://api.vk.com/method/wall.post?owner_id=".$_POST['ID_ПРИЛОЖЕНИЯ']."&attachment=".$_POST['attachment']."&message=".urlencode($_POST['message'])."&access_token=".$token);
    header('location: /');
}
?>
