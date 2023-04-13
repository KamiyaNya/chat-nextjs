import { NAME } from '../partials/consultName';

export default function ContactPopup() {
	return (
		<div class='blockpopup__bg'>
			<div class='blockpopup blockpopup__show'>
				<div class='blockpopup__close'></div>
				<div class='blockpopup__add chatheader'>
					<div class='blockpopup__add-img'></div>
					<div class='blockpopup__add-text'>
						<div class='konsul__name'>{NAME}</div>
						<div class='konsul_pos'>Онлайн-консультант автосалона Renault</div>
					</div>
				</div>
				<div class='blockpopup__chat'>
					<div class='msgpopup'></div>
					<div class='blockpopup__chat-msg msgpopup mestext'>
						Здравствуйте!
						<br />
						Напишите свой номер и я подробно расскажу о доступных автомобилях в наличии и ближайших поставках.
					</div>
					<div class='msgpopup butslink'>
						<input
							class='inptext popup_name'
							type='text'
							placeholder='Ваше имя'
						/>
						<input
							class='inptext popup_phone'
							type='text'
							placeholder='+7 (___) ___-__-__'
						/>
						<div class='divbutphone'>
							<button class='butpopup'>Отправить</button>
							<div class='error errorphone'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
