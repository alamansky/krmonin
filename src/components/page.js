/** @format */

export default function page() {
	let arr = {
		markup(post) {
			let data = {
				imgSrc: post['_embedded']['wp:featuredmedia']['0'].media_details.sizes.full.source_url,
				title: post.title.rendered,
				content: post.content.rendered,
			};
			return [
				{
					'article.page': [
						{
							[`img.page__image.page__image--left[src="${data.imgSrc}"`]: null,
						},
						{
							'h1.page__title': data.title,
						},
						{
							'div.page__body': data.content,
						},
					],
				},
			];
		},
	};

	return arr;
}
