/** @format */

import splitMarkupString from './splitMarkupString';

export default function generateMarkup(arr, parentElement) {
	//get first/next element obj from array
	let firstObj = arr.shift();

	//get obj key, which contains element type and class
	let firstElement = Object.keys(firstObj);

	//destructure type and class into seperate variables
	let { elementType, elementClasses, elementAttributes } = splitMarkupString(firstElement[0]);

	//create element of given type
	let element = document.createElement(elementType);

	//add classes to element
	if (elementClasses) {
		elementClasses.forEach((style) => element.classList.add(style));
	}

	//add attributes to element
	if (elementAttributes) {
		elementAttributes.forEach((attribute) => {
			let [attributeName, attributeValue] = attribute;
			// if data-dash attribute, add to dataset property
			if (attributeName.substring(0, 5) == 'data-') {
				let abbr = attributeName.substring(5);
				element.dataset[abbr] = attributeValue;
				// if other attribute, check for attribute type and apply
			} else {
				switch (attributeName) {
					case 'src':
						element.src = attributeValue;
						break;
					case 'href':
						element.href = attributeValue;
						break;
					case 'target':
						element.target = attributeValue;
						break;
					default:
						break;
				}
			}
		});
	}

	//insert element into DOM
	parentElement.insertBefore(element, null);

	//if element has children (objs in array), call function again
	if (Array.isArray(firstObj[firstElement])) {
		generateMarkup(firstObj[firstElement], element);
		//if element has a child obj, add attributes to element
	} else if (typeof firstObj[firstElement] === 'object') {
		let x = firstObj[firstElement];
		if (x.hasOwnProperty('src')) {
			element.src = x.src;
		}
		//if element does not have children, give it content
	} else {
		element.innerHTML = firstObj[firstElement];
	}

	//if element does not have siblings, exit function
	if (arr.length == 0) {
		return;
		//if element does have siblings, call function on next sibling
	} else {
		generateMarkup(arr, parentElement);
	}
}
