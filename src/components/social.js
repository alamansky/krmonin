/** @format */

export default function social() {
	let arr = {
		markup(post) {
			return [
				{
					[`a.header__social__link[target=_blank[href="${post.acf.social_media_url}"`]: [
						{
							'img.header__social__icon': { src: post.acf.icon },
						},
					],
				},
			];
		},
	};

	return arr;
}
