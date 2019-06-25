/** @format */

import env from '../../env.json';
import builder from './builder';

export default async function getData(slug, view, model) {
	let url = `http${env.ssl ? 's' : ''}://${env.domain}${env.subdirectory}/wp-json/wp/v2/${slug.toLowerCase()}?_embed`;
	let rawData = await fetch(url);
	let data = await rawData.json();

	view.innerHTML = '';
	builder(slug, data, view, model);
}
