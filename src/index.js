/** @format */

import './style/style.scss';
import getData from './utility/getData';
import scrollToTop from './utility/scrollToTop';

import card from './components/card';
import page from './components/page';
import header from './components/header';
import social from './components/social';
import { loaders } from './components/loaders';

import { contact } from './pages/contact';

const feed = document.querySelector('.content');
const header__profile = document.querySelector('.header__profile');
const header__social = document.querySelector('.header__social');

getData('profile', header__profile, header, loaders.blank);
getData('social', header__social, social, loaders.blank);
getData('posts?_embed', feed, card);

const menu__list = document.querySelector('.menu__list');
menu__list.addEventListener('click', handleClick);

function handleClick(e) {
	let clickedItem = e.target.textContent;

	switch (clickedItem) {
		case 'Home':
			getData('posts?_embed', feed, card);
			break;
		case 'Stories':
			getData('posts?_embed&categories=3', feed, card);
			break;
		case 'Blog':
			getData('posts?_embed&categories=2', feed, card);
			break;
		case 'About':
			getData('pages?_embed&slug=about-me', feed, page);
			break;
		case 'Contact':
			document.querySelector('.content').innerHTML = contact.form;
			document.querySelector('#mc-embedded-subscribe').addEventListener('click', function() {
				let y = document.querySelector('.contact--success');
				y && document.removeChild(y);
				document.querySelector('#mce-NAME').value = '';
				document.querySelector('#mce-EMAIL').value = '';
				let x = document.createElement('div');
				x.innerHTML = contact.success;
				document.querySelector('#mc_embed_signup').appendChild(x);
			});
			break;
	}
	scrollToTop();
}
