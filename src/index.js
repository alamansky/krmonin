/** @format */

import './style/style.scss';

import getData from './utility/getData';
import router from './utility/router';

import card from './components/card';
import page from './components/page';
import post from './components/post';
import header from './components/header';
import social from './components/social';
import contactPage from './components/contact';
import { loaders } from './components/loaders';

const feed = document.querySelector('.content');
const header__profile = document.querySelector('.header__profile');
const header__social = document.querySelector('.header__social');

getData('profile', header__profile, header, loaders.blank);
getData('social', header__social, social, loaders.blank);
getData('posts?_embed', feed, card);

const menu__list = document.querySelector('.menu__list');
menu__list.addEventListener('click', handleMenuClick);

function handleMenuClick(e) {
	let clickedItem = e.target.textContent;
	router.updateRoute(`#${clickedItem}`);
}

router.on('home', () => getData('posts?_embed', feed, card));
router.on('stories', () => {
	router.currentRoute.includes('/')
		? getData(`posts/${router.currentRoute.split('/')[1]}?_embed`, feed, post)
		: getData('posts?_embed&categories=3', feed, card);
});
router.on('blog', () => {
	router.currentRoute.includes('/')
		? getData(`posts/${router.currentRoute.split('/')[1]}?_embed`, feed, post)
		: getData('posts?_embed&categories=2', feed, card);
});
router.on('about', () => getData('pages?_embed&slug=about-me', feed, page));
router.on('contact', () => {
	getData('pages?_embed&slug=contact-page', feed, contactPage);
});
router.on('appearances', () => getData('pages?_embed&slug=appearances', feed, page));
router.init();
