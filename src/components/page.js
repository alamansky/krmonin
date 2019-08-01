/** @format */

export default function page() {
	let arr = {
		markup(post) {
			return [
				{
					'article.page': [
						{
							'img.page__image.page__image--left': {
								src: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url,
							},
						},
						{
							'h1.page__title': post.title.rendered,
						},
						{
							'div.page__body': post.content.rendered,
						},
					],
				},
			];
		},
	};

	return arr;
}
