/** @format */

export default function page() {
	let arr = {
		markup(post) {
			return [
				{
					'article.page': [
						{
							'img.page__image': {
								src: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url,
							},
						},
						{
							'h2.page__title': post.title.rendered,
						},
						{
							'div.card__body': post.content.rendered,
						},
					],
				},
			];
		},
	};

	return arr;
}
