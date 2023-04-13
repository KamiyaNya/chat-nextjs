import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { useState } from 'react';
function getAbsoluteHeight(el) {
	var styles = window.getComputedStyle(el);
	var margin =
		parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

	return Math.ceil(el.offsetHeight + margin);
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Онлайн-подбор автомобилей KIA от официального дилера</title>
			</Head>
			<div className='fixed-crossbrowser-background'></div>
			<Header />
			<Main />
		</>
	);
}
