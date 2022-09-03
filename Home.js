$group_id     = 'ID_ПРИЛОЖЕНИЯ';
$access_token = 'ACCESS_TOKEN';
$message      = 'Hello, world!';
$image        = __DIR__ . '/logo.png';
 
// Получение сервера vk для загрузки изображения.
$server = file_get_contents('https://api.vk.com/method/photos.getWallUploadServer?group_id=' . $group_id . '&access_token=' . $access_token . '&v=5.00');
$server = json_decode($server);
 
if (!empty($server->response->upload_url)) {
	// Отправка изображения на сервер.
	if (function_exists('curl_file_create')) {
		$curl_file = curl_file_create($image);
	} else {
		$curl_file = '@' . $image;
	}
 
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $server->response->upload_url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, array('photo' => $curl_file));
	$upload = curl_exec($ch);
	curl_close($ch);
 
	$upload = json_decode($upload);
	if (!empty($upload->server)) {
		// Сохранение фото в группе.
		$save = file_get_contents('https://api.vk.com/method/photos.saveWallPhoto?group_id=' . $group_id . '&server=' . $upload->server . '&photo=' . stripslashes($upload->photo) . '&hash=' . $upload->hash . '&access_token=' . $access_token . '&v=5.00');
		$save = json_decode($save);
		if (!empty($save->response[0]->id)) {
			// Отправляем сообщение.
			$params = array(
				'v'            => '5.70',
				'access_token' => $access_token,
				'owner_id'     => '-' . $group_id, 
				'from_group'   => '1', 
				'message'      => $message,
				'attachments'  => 'photo' . $save->response[0]->owner_id . '_' . $save->response[0]->id
			);
			
			file_get_contents('https://api.vk.com/method/wall.post?' . http_build_query($params));
		}
	}
}