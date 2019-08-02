/** @format */

export default function header() {
	let arr = {
		markup(post) {
			return [
				{
					'div.profile': [
						{ 'button.button--hamburger': '' },
						{
							'h2.profile__title': post.title.rendered,
						},
						{
							'h4.profile__blurb': post.acf.blurb,
						},
						{
							'img.profile__headshot': { src: post.acf.image },
						},
					],
				},
			];
		},
		async events() {
			document.querySelector('.button--hamburger').addEventListener('click', function() {
				document.querySelector('.header__menu').classList.toggle('header__menu--active');
				document.querySelector('.header__social').classList.toggle('header__social--active');
				document.querySelector('.content').classList.toggle('test');
			});
			document.querySelector('.menu').addEventListener('click', function() {
				document.querySelector('.header__menu').classList.remove('header__menu--active');
				document.querySelector('.header__social').classList.remove('header__social--active');
				document.querySelector('.content').classList.remove('test');
			});
		},
	};

	return arr;
}
