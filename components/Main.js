import { motion } from 'framer-motion';
import Copyright from './Copyright';
import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

function getAbsoluteHeight(el) {
	var styles = window.getComputedStyle(el);
	var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

	return Math.ceil(el.offsetHeight + margin);
}
export default function Main() {
	const mainBlockRef = useRef();
	const headingRef = useRef();
	const [chatHeight, setChatHeight] = useState(0);
	useEffect(() => {
		let totalHeight = mainBlockRef.current.getBoundingClientRect().top + getAbsoluteHeight(headingRef.current);
		setChatHeight(window.innerHeight - totalHeight);
	}, []);

	return (
		<div
			className='main mainshow'
			ref={mainBlockRef}>
			<Copyright />
			<motion.h1
				ref={headingRef}
				initial={{ translateY: '100%', opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{
					easing: 'ease',
					opacity: { duration: 0.3 },
					translateY: { duration: 0.5 },
				}}>
				Онлайн-подбор автомобилей KIA от официального дилера
			</motion.h1>
			<Box
				minHeight={chatHeight}
				height={chatHeight}>
				<motion.div
					className='chat'
					initial={{
						opacity: 0,
						translateY: '300px',
						scale: 0.9,
					}}
					animate={{
						opacity: 1,
						translateY: 0,
						scale: 1,
					}}
					transition={{
						easing: 'ease',
						duration: 0.7,
					}}>
					<ChatHeader />
					<ChatContent />
				</motion.div>
			</Box>
		</div>
	);
}
