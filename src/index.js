/** @format */

import './style/style.scss';

import getData from './utility/getData';
import scrollToTop from './utility/scrollToTop';

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

let route = null;

function parseRoute(route) {
	let routes = ['home', 'stories', 'blog', 'about', 'contact'];
	let routeObj = {
		home: () => getData('posts?_embed', feed, card),
		stories: () => {
			route.includes('/')
				? getData(`posts/${route.split('/')[1]}?_embed`, feed, post)
				: getData('posts?_embed&categories=3', feed, card);
		},
		blog: () => {
			route.includes('/')
				? getData(`posts/${route.split('/')[1]}?_embed`, feed, post)
				: getData('posts?_embed&categories=2', feed, card);
		},
		about: () => getData('pages?_embed&slug=about-me', feed, page),
		contact: () => {
			getData('pages?_embed&slug=contact-page', feed, contactPage);
		},
	};
	routes.map((x) => {
		if (route.includes(x)) {
			routeObj[x]();
		}
	});
}

function router() {
	let newRoute = window.location.hash;
	if (newRoute != route) {
		route = newRoute;

		parseRoute(route);
		scrollToTop();
	}
}

setInterval(router, 500);

function handleMenuClick(e) {
	let clickedItem = e.target.textContent.toLowerCase();
	window.location.hash = `#${clickedItem}`;
}
