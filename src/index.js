/** @format */

import './style/style.scss';
import headerBuilder from './components/headerBuilder';
import getData from './utility/getData';
import cardBuilder from './components/cardBuilder';
import pageBuilder from './components/pageBuilder';

const feed = document.querySelector('.content');
const header__profile = document.querySelector('.header__profile');

getData('profile', header__profile, headerBuilder);

const menu__list = document.querySelector('.menu__list');
menu__list.addEventListener('click', handleClick);

function handleClick(e) {
	let clickedItem = e.target.textContent;

	if (clickedItem === 'Home' || clickedItem === 'Stories' || clickedItem === 'Blog') {
		feed.innerHTML = '';
		getData(clickedItem, feed, cardBuilder);
	} else if (clickedItem === 'Contact' || clickedItem === 'About') {
		feed.innerHTML = '';
		getData(clickedItem, feed, pageBuilder);
	}
}
