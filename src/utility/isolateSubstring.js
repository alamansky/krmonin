/** @format */

import findNextSubstring from './findNextSubstring';

export default function isolateSubstring(currentString, currentSubstringCategory, currentElement) {
	let [nextItemStartPosition, nextItemType] = findNextSubstring(currentString);

	//cut out current item from currentString
	let currentSubstring = currentString.slice(0, nextItemStartPosition).join('');
	// get next string for paratmer to recursive function
	let nextString = currentString.slice(nextItemStartPosition);

	switch (currentSubstringCategory) {
		case 'element':
			currentElement.elementType = currentSubstring;
			break;
		case 'class':
			currentElement.classes.push(currentSubstring.substring(1));
			break;
		case 'attribute':
			currentElement.attributes.push(
				currentSubstring
					//remove double quotes
					.replace(/"/gi, '')
					.substring(1)
					.split('='),
			);
			break;
	}

	if (nextItemType != null) {
		isolateSubstring(nextString, nextItemType, currentElement);
	}

	return currentElement;
}
