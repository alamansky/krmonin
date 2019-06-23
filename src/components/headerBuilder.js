/** @format */

import generateMarkup from '../utility/generateMarkup';

export default function headerBuilder(data, view) {
	data.forEach((post) => {
		let arr = [
			{
				'div.profile': [
					{
						'h2.profile__title': post.title.rendered,
					},
					{
						'h3.profile__blurb': post.acf.blurb,
					},
					{
						'img.profile__headshot': { src: post.acf.headshot },
					},
				],
			},
		];

		generateMarkup(arr, view);
	});
}
