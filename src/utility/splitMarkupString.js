/** @format */

export default function splitMarkupString(string) {
	// crete an array of string characters
	let characterArray = string.split('');
	// create variables for element type, classes, and attributes
	let elementType;
	let classes = [];
	let attributes = [];

	function isolateCurrentItem(currentString, currentType) {
		// find where the next element begins to know where the urrent element ends
		function findNextItemTypeAndStartPosition() {
			for (var i = 1; i < currentString.length; ++i) {
				switch (currentString[i]) {
					// skip over characters between double quotes
					case '"':
						for (var j = i + 1; j < currentString.length; ++j) {
							if (currentString[j] == '"') {
								i = j + 1;
							}
						}
						break;
					// next type of item will be a class, starting at currentString[i]
					case '.':
						return [i, 'class'];
					// next type of item will be an attribute, starting at currentString[i]
					case '[':
						return [i, 'attribute'];
					default:
						break;
				}
			}
			// there is no next item
			return [i, null];
		}

		let nextItemTypeAndStartPosition = findNextItemTypeAndStartPosition();
		let [nextItemStartPosition, nextItemType] = nextItemTypeAndStartPosition;

		//cut out current item from currentString
		let currentItem = currentString.slice(0, nextItemStartPosition);
		// get next string for paratmer to recursive function
		let nextString = currentString.slice(nextItemStartPosition);

		switch (currentType) {
			case 'element':
				elementType = currentItem.join('');
				break;
			case 'class':
				classes.push(currentItem.join('').substring(1));
				break;
			case 'attribute':
				attributes.push(
					currentItem
						.join('')
						//remove double quotes
						.replace(/"/gi, '')
						.substring(1)
						.split('='),
				);
				break;
		}

		if (nextItemType == null) {
			return;
		} else {
			isolateCurrentItem(nextString, nextItemType);
		}
	}

	// find current item in string
	isolateCurrentItem(characterArray, 'element');

	return {
		elementType: elementType,
		elementClasses: classes,
		elementAttributes: attributes,
	};
}
