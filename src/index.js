/** @format */

import './style/style.scss';
import getData from './utility/getData';

import card from './components/card';
import page from './components/page';
import header from './components/header';

const feed = document.querySelector('.content');
const header__profile = document.querySelector('.header__profile');

getData('profile', header__profile, header);

const menu__list = document.querySelector('.menu__list');
menu__list.addEventListener('click', handleClick);

function handleClick(e) {
	let clickedItem = e.target.textContent;

	if (clickedItem === 'Home' || clickedItem === 'Stories' || clickedItem === 'Blog') {
		getData(clickedItem, feed, card);
	} else if (clickedItem === 'Contact' || clickedItem === 'About') {
		getData(clickedItem, feed, page);
	}
}
