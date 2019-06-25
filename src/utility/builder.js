/** @format */
import generateMarkup from './generateMarkup';

export default function builder(slug, data, view, model) {
	let component = model();

	if (Array.isArray(data)) {
		data.forEach((post) => {
			let markupObj = component.markup(post);
			generateMarkup(markupObj, view);
		});
	} else {
		let markupObj = component.markup(data);
		generateMarkup(markupObj, view);
	}
	component.events && component.events(slug, view);
}
