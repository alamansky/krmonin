/** @format */

import env from '../../env.json';
import router from '../utility/router';

export default function post() {
	let arr = {
		markup(post) {
			return [
				{
					[`article.page[data-id=${post.id}[data-type=${post.categories[0] == 2 ? 'blog' : 'story'}`]: [
						{
							[`img.page__image[src="${post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url}"`]: null,
						},
						{
							'h1.page__title': post.title.rendered,
						},
						{
							'div.page__body': post.content.rendered,
						},
						{
							'div.page__buttons': [
								{
									'button.button.button--secondary.page__previous': 'Previous',
								},
								{
									'button.button.button--secondary.page__next': 'Next',
								},
							],
						},
					],
				},
			];
		},
		async events() {
			// get category of post (blog vs story) from post's data-dash attribute
			let category = document.querySelector('.page').dataset.type;
			// create url for custom blog/story ID route
			let url = `http${env.ssl ? 's' : ''}://${env.domain}${env.subdirectory}/wp-json/rest-routes/v2/${category}-ids`;
			// get url
			let rawData = await fetch(url);
			let data = await rawData.json();

			//extract IDs from JSON
			let IDs = data.map((data) => data.ID);

			//get current id from post's data-dash attribute
			let currentID = document.querySelector('article').dataset.id;

			//create empty vars for prev and next
			let prev;
			let next;

			//give correct values to prev and next
			function findAdjacentPostIDs() {
				for (let i = 0; i < IDs.length; ++i) {
					if (IDs[i] == currentID) {
						prev = IDs[i - 1] ? IDs[i - 1] : IDs[IDs.length - 1];
						next = IDs[i + 1] ? IDs[i + 1] : IDs[0];
					}
				}
			}

			findAdjacentPostIDs();

			// bad code, get rid of this...
			if (category == 'story') {
				category = 'stories';
			}

			//add event listeners
			document.querySelector('.page__next').addEventListener('click', () => {
				router.updateRoute(`#${category}/${next}`);
			});
			document.querySelector('.page__previous').addEventListener('click', () => {
				router.updateRoute(`#${category}/${prev}`);
			});
		},
	};

	return arr;
}
