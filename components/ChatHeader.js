import { motion } from 'framer-motion';
import Advantage from './Advantage';
export default function ChatHeader() {
	return (
		<div className='chatheader'>
			<div className='advantages'>
				<Advantage
					text='Выгода 10% по госпрограмме'
					aiClass='ai1'
				/>
				<Advantage
					text='Кредит без первоначального взноса'
					aiClass='ai2'
				/>
				<Advantage
					text='Более 25 комплектаций в наличии'
					aiClass='ai3'
				/>
			</div>
		</div>
	);
}
