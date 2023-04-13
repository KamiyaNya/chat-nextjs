import { Tooltip } from '@chakra-ui/react';
export default function Advantage({ text, aiClass, tootipText }) {
	if (tootipText) {
		return (
			<div className='advantage'>
				<div className={`advantageimg ${aiClass}`}></div>
				<div className='advantagetext'>
					<span>
						{text}
						<Tooltip label={tootipText}>
							<div className='priceinfo2'></div>
						</Tooltip>
					</span>
				</div>
			</div>
		);
	}

	return (
		<div className='advantage'>
			<div className={`advantageimg ${aiClass}`}></div>
			<div className='advantagetext'>
				<span>{text}</span>
			</div>
		</div>
	);
}
