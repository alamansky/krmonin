/** @format */

import { router } from '../utility/router';

export default function card() {
	let arr = {
		markup(post) {
			return [
				{
					[`div.card${post.acf.featured ? '.card--featured' : ''}[data-type=${
						post.categories[0] == 2 ? 'blog' : 'story'
					}`]: [
						{
							[`img.card__image${post.acf.featured ? '.card__image--featured' : ''}.card__image--grayscale`]: {
								src: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url,
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
									'div.card__excerpt': `${post.excerpt.rendered}`,
								},
								{
									[`button.button.button--secondary.card__button[data-id=${post.id}[data-type=${
										post.categories[0] == 2 ? 'blog' : 'stories'
									}`]: 'Continue Reading',
								},
							],
						},
					],
				},
			];
		},
		events() {
			let cardButtons = document.querySelectorAll('.button');
			cardButtons.forEach((item) => {
				item.addEventListener('click', () => {
					router.updateRoute(`#${item.dataset.type}/${item.dataset.id}`);
				});
				item.addEventListener('mouseenter', (e) => {
					e.target.parentElement.parentElement.childNodes[0].classList.remove('card__image--grayscale');
				});
				item.addEventListener('mouseleave', (e) => {
					e.target.parentElement.parentElement.childNodes[0].classList.add('card__image--grayscale');
				});
			});
		},
	};

	return arr;
}
