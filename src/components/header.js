/** @format */

export default function header() {
	let arr = {
		markup(post) {
			return [
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
		},
	};

	return arr;
}
