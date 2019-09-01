/** @format */

import isolateSubstring from './isolateSubstring';

export default function splitMarkupString(string) {
	// crete an array of string characters
	let characterArray = string.split('');
	// create variables for element type, classes, and attributes

	let currentElement = {
		elementType: '',
		classes: [],
		attributes: [],
	};

	// find current item in string
	let currentElementPopulated = isolateSubstring(characterArray, 'element', currentElement);

	return currentElementPopulated;
}
