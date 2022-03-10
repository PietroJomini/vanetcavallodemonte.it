import { loaders } from '/static/translations/locales.map.json';

const base = 'http://www.vanetcavallodemonte.it';

export async function get() {
	return {
		body: loaders
			.map(({ locale, routes }) => routes?.map((route) => `${base}/${locale}${route}`))
			.flat()
			.join('\n')
			.trim()
	};
}
