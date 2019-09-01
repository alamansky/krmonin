/** @format */

export default function makeElement(elementType, elementClasses = null) {
	let element = document.createElement(elementType);

	if (elementClasses) {
		elementClasses.forEach((style) => element.classList.add(style));
	}

	return element;
}
