/** @format */

import env from '../../env.json';
import builder from './builder';
import { loaders } from '../components/loaders';

export default async function getData(slug, view, model, customLoader = loaders.spin) {
	customLoader(view);
	let url = `http${env.ssl ? 's' : ''}://${env.domain}${env.subdirectory}/wp-json/wp/v2/${slug.toLowerCase()}`;
	let rawData = await fetch(url);
	let data = await rawData.json();

	builder(slug, data, view, model);
}
