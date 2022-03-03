import { promises } from 'fs';
import path from 'path';

const here = '';
export const base = path.join(here, 'static', 'translations');

export const paths = {
	schema: path.join(base, 'schema.json'),
	map: path.join(base, 'locales.map.json'),
	locale: (locale) => path.join(base, locale),
	page: (locale, page) => path.join(base, locale, `${page}.json`)
};

export const map = async (schema) => {
	const loaders = schema.locales
		.filter(({ enabled }) => enabled)
		.map(({ locale }) =>
			schema.pages.map(({ key, routes }) => ({
				locale,
				key,
				routes,
				loader: `/${paths.page(locale, key)}`
			}))
		)
		.flat();

	const body = JSON.stringify({ loaders });
	await promises.writeFile(paths.map, body);
};

export const schema = {
	read: async function ({ json = true } = {}) {
		const stream = await promises.readFile(paths.schema);
		const body = stream.toString();
		return json ? JSON.parse(body) : body;
	},
	write: async function (json) {
		const body = JSON.stringify(json);
		await promises.writeFile(paths.schema, body);
		await map(json);
	},
	update: async function (action) {
		const body = await this.read();
		await this.write(action(body));
	}
};

export const pages = {
	make: async function (locale) {
		const body = await schema.read();
		await promises.mkdir(paths.locale(locale));
		await Promise.all(
			body.pages.map(({ key }) => promises.writeFile(paths.page(locale, key), JSON.stringify({})))
		);
	},
	remove: async function (locale) {
		await promises.rm(paths.locale(locale), { recursive: true });
	},
	read: async function (locale, key) {
		const stream = await promises.readFile(paths.page(locale, key));
		return stream.toString();
	},
	write: async function (locale, key, body) {
		await promises.writeFile(paths.page(locale, key), JSON.stringify(body));
	}
};
