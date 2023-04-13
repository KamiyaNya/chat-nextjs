import { PHONE } from './../partials/phoneNumber';
export default function FixedBot() {
	return (
		<div class='fixed__bot'>
			<div class='fixed__botitem'>
				<div class='mesimg'></div>
				<div class='bot__stats'>
					<div class='bot__name'>{NAME}</div>
					<div class='bot__post'>Консультант автосалона Renault</div>
				</div>
				<a
					class='fixed__phone'
					href={`tel:${PHONE}`}>
					<div class='fixed__btn'>
						<span class='fixed__text'>Позвонить:</span>
						<span class='fixed__ph phone_mw'>{PHONE}</span>
					</div>
				</a>
			</div>
		</div>
	);
}
