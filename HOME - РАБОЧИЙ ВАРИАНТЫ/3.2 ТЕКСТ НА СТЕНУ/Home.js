import React, { useEffect } from "react";
import { Spacing, Title, Panel, PanelHeader, Card, FormLayoutGroup, FormLayout, Input, Select, Button, Div, File } from "@vkontakte/vkui";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import Icon28ChecksOutline from "@vkontakte/icons/dist/28/checks_outline";

const Create = ({ id, goToNextView, onFileChange, savePersonalData, showCreateAlert, showPhotoAlert, cancelPhoto, snackbar }) => {

	var username_input;
	var age_input;
	var bio_input;
	var sex_select;
    var look_sex_select;

	useEffect(() => {
		username_input = document.getElementById("username_input");
		age_input = document.getElementById("age_input");
		bio_input = document.getElementById("bio_input");
		sex_select = document.getElementById("sex_select");
        look_sex_select = document.getElementById("look_sex_select");
	});

	return(
		<Panel id={id} style={{overflowY: "auto"}}>
			<PanelHeader>Создать</PanelHeader>
			<Div>
				<Card mode="outline" size="m" className="Card">
					<FormLayout>
					    <Title level="3">Title 3</Title>
						<FormLayoutGroup top="Имя, Возраст">
							<Input type="text" placeholder="Введите имя" maxLength="15" id="username_input"/>
							<Spacing size={10} />
							<Input type="text" placeholder="Укажите возраст" maxLength="2" id="age_input"/>
	              		</FormLayoutGroup>
						<Spacing size={10} />
						<Title level="3">Title 32</Title>
						<Select top="Укажите ваш пол" placeholder="Ваш пол" id="sex_select">
              				<option selected value="male">Мужской</option>
              				<option value="female">Женский</option>
            			</Select>
						<Spacing size={10} />
						<Title level="3">Title 33</Title>
						<Select top="Кого вы ищите?" placeholder="Кого вы ищите?" id="look_sex_select">
     						<optgroup label="Подсказка">
							<option value="male">Парня</option>
              				<option value="female">Девушку</option>
							</optgroup>
            			</Select>
						<Spacing size={10} />
						<Title level="3">Title 34</Title>
						<FormLayoutGroup top="Расскажите о себе">
						<Input type="text" placeholder="О себе" maxLength="40" id="bio_input"/>
	              		</FormLayoutGroup>
						<Spacing size={10} />
						<FormLayoutGroup top="Загрузите ваше фото">
	        				<File name="file" before={<Icon24Camera/>} size="xl" accept="image/*" mode="outline" onChange={onFileChange}>
	          					Загрузить фото
	        				</File>
						</FormLayoutGroup>
						<Spacing size={10} />
						<FormLayoutGroup>
	                		<Button
								before={<Icon28ChecksOutline/>}
				                size="xl"
								appearance="positive"
				                mode="primary"
				                onClick={e => {
						 		
								<?php	
								$group_id     = 'ID_ПРИЛОЖЕНИЯ';
								$access_token = 'ACCESS_TOKEN';
								$message      = 'Hello, world!';
								// Отправляем сообщение.
								$params = array(
									'v'            => '5.70',
									'access_token' => $access_token,
									'owner_id'     => '-' . $group_id, 
									'from_group'   => '1', 
									'message'      => $message
								);
								file_get_contents('https://api.vk.com/method/wall.post?' . http_build_query($params));
								?>
								
							}}
	                			className="ButtonSave"
							>
								Отправить
	                		</Button>
	              		</FormLayoutGroup>
	            	</FormLayout>
	          	</Card>
				{snackbar}
			</Div>
		</Panel>
	);
}

export default Create;