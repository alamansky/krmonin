/** @format */
import generateMarkup from '../utility/generateMarkup';
import pageBuilder from './pageBuilder';
import getData from '../utility/getData';

export default function cardBuilder(data, view) {
	data.forEach((post) => {
		let arr = [
			{
				'div.card': [
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

		generateMarkup(arr, view);
	});
	view.addEventListener('click', dumb);

	function dumb(e) {
		let x = e.target.dataset.slug;
		getData(x, view, pageBuilder);
	}
}
