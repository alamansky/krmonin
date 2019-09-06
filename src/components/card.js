/** @format */

import router from '../utility/router';

export default function card() {
	let arr = {
		markup(post) {
			let data = {
				title: post.title.rendered,
				subtitle: post.acf.subtitle,
				post: post.excerpt.rendered,
				isFeatured: post.acf.featured ? '.card--featured' : '',
				isFeaturedImage: post.acf.featured ? '.card__image--featured' : '',
				category: post.categories[0] == 2 ? 'blog' : 'stories',
				imgSrc: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url,
			};
			return [
				{
					[`div.card${data.isFeatured}`]: [
						{
							[`img.card__image${data.isFeaturedImage}.card__image--grayscale[src="${data.imgSrc}"`]: null,
						},
						{
							'div.card__text': [
								{
									'h2.card__title': data.title,
								},
								{
									'h3.card__subtitle': data.subtitle,
								},
								{
									'div.card__excerpt': data.post,
								},
								{
									[`button.button.button--secondary.card__button[data-id=${post.id}[data-type=${data.category}`]: 'Continue Reading',
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
