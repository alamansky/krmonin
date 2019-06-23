/** @format */

import env from '../../env.json';

export default async function getData(slug, view, func = null) {
	let url = `http${env.ssl ? 's' : ''}://${env.domain}${env.subdirectory}/wp-json/wp/v2/${slug.toLowerCase()}?_embed`;
	let rawData = await fetch(url);
	let data = await rawData.json();
	if (func) {
		func(data, view);
	} else {
		view.innerHTML = data['0'].title.rendered + data['0'].content.rendered;
	}
}
