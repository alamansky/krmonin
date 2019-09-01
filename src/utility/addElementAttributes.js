/** @format */

export default function addElementAttributes(element, elementAttributes) {
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
	return element;
}
