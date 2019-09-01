/** @format */

export default function findNextItemTypeAndStartPosition(currentString) {
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
	// if there is no next item, return second param of null
	return [i, null];
}
