/** @format */

export default function contactPage() {
	let arr = {
		markup(post) {
			return [
				{
					'article.page': [
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
