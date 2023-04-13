import { motion } from 'framer-motion';
import { useRef } from 'react';
import { PHONE } from './../partials/phoneNumber';

export default function Header() {
	const myref = useRef();
	return (
		<motion.div
			className='header logophone'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'ease', duration: 0.3 }}
			ref={myref}>
			<div className='main mainshow'>
				<div className='logogrid'>
					<div className='logo'></div>
					<div className='logotext'>
						Официальный дилер КИА &quot;Киа-Бест-Форевер&quot;
						<br />
						г. Москва, пр. Маркетологов, 11
					</div>
				</div>
				<div className='phone'>{PHONE}</div>
			</div>
		</motion.div>
	);
}
