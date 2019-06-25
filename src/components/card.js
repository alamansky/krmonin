/** @format */

import getData from '../utility/getData';
import post from './post';

export default function card() {
	let arr = {
		markup(post) {
			return [
				{
					[`div.card[id=${post.id}`]: [
						{
							'img.card__image': {
								src: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.medium.source_url,
							},
						},
						{
							'div.card__text': [
								{
									'h2.card__title': post.title.rendered,
								},
								{
									'h3.card__subtitle': post.acf.subtitle,
								},
								{
									'p.card__excerpt': `${post.content.rendered.substring(0, 100)}...`,
								},
							],
						},
					],
				},
			];
		},
		events(slug, view) {
			let cards = document.querySelectorAll('.card');
			cards.forEach((item) => item.addEventListener('click', () => getData(`${slug}/${item.dataset.id}`, view, post)));
		},
	};

	return arr;
}
