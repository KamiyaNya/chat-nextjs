export default function MessageBotText({ children, id }) {
	return (
		<div
			class='message mesbot'
			data-mesbot={id}>
			<div class='mesimg'></div>
			<div class='mescont'>
				<div class='mestext'>{children}</div>
			</div>
		</div>
	);
}
