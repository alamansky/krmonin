/** @format */

export default function header() {
	let arr = {
		markup(post) {
			return [
				{
					'div.profile': [
						{ 'button.button--hamburger': '' },
						{
							[`img.profile__title[src="${post.acf.logo}"`]: null,
						},
						{
							'h4.profile__blurb': post.acf.blurb,
						},
						{
							[`img.profile__headshot[src="${post.acf.image}"`]: null,
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
