/** @format */
import generateMarkup from './generateMarkup';

export default function builder(slug, data, view, model) {
	let component = model();

	let tempElement = document.createElement('div');
	tempElement.classList.add('tempElement');

	if (Array.isArray(data)) {
		data.forEach((post) => {
			let markupObj = component.markup(post);
			generateMarkup(markupObj, tempElement);
		});
	} else {
		let markupObj = component.markup(data);
		generateMarkup(markupObj, tempElement);
	}

	view.innerHTML = tempElement.innerHTML;

	component.events && component.events(slug, view);
}
