/** @format */

import splitMarkupString from './splitMarkupString';
import addElementAttributes from './addElementAttributes';
import makeElement from './makeElement';

export default function generateMarkup(markupArray, parentElement) {
	//get first/next element obj from markup array
	let currentElementObject = markupArray.shift();

	//get obj key, which contains element type and class
	let currentElement = Object.keys(currentElementObject);

	//destructure type and class into seperate variables
	let { elementType, classes, attributes } = splitMarkupString(currentElement[0]);

	//create element of given type and add classes
	let element = makeElement(elementType, classes);

	//add attributes to element
	addElementAttributes(element, attributes);

	//insert element into DOM
	parentElement.insertBefore(element, null);

	//check if element has children
	//if element has children (element object's proeprty value is an array of objs), call function again
	if (Array.isArray(currentElementObject[currentElement])) {
		generateMarkup(currentElementObject[currentElement], element);
		//if element has no children, take element object's property value and add to element as content
	} else {
		element.innerHTML = currentElementObject[currentElement];
	}

	//check if element has siblings
	//if element does not have siblings, exit function
	if (markupArray.length == 0) {
		return;
		//if element does have siblings, call function on next sibling
	} else {
		generateMarkup(markupArray, parentElement);
	}
}
