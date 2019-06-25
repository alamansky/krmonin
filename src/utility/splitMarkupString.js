/** @format */

export default function splitMarkupString(string) {
	let arr = [];

	//does element have a class?
	if (string.includes('.')) {
		arr.push(string.split('.')[0]);

		//does element have a data attribute?
		if (string.includes('[')) {
			let arr2 = string.split('.')[1].split('[');
			arr2;
			let arr3 = arr2[1].split('=');
			arr2.pop();

			//return element with class and data attribute
			return arr.concat(arr2.concat(arr3));
		} else {
			arr.push(string.split('.')[1]);

			//return element with class
			return arr;
		}

		//return element
	} else {
		arr.push(string);
		return arr;
	}
}
