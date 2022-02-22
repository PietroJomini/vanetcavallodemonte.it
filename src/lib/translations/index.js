import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'it',
			key: 'home',
			routes: ['/'],
			loader: async () => await import(`./it/home.json`)
		},
		{
			locale: 'it',
			key: 'ride',
			routes: ['/ride'],
			loader: async () => await import(`./it/ride.json`)
		},
		{
			locale: 'it',
			key: 'lessons',
			routes: ['/lessons'],
			loader: async () => await import(`./it/lessons.json`)
		},
		{
			locale: 'it',
			key: 'childs',
			routes: ['/childs'],
			loader: async () => await import(`./it/childs.json`)
		},
		{
			locale: 'it',
			key: 'trekking',
			routes: ['/trekking'],
			loader: async () => await import(`./it/trekking.json`)
		},
		{
			locale: 'it',
			key: 'camps',
			routes: ['/camps', '/camps/6-11', '/camps/12-17'],
			loader: async () => await import(`./it/camps.json`)
		},
		{
			locale: 'it',
			key: 'farm',
			routes: ['/farm'],
			loader: async () => await import(`./it/farm.json`)
		},
		{
			locale: 'it',
			key: 'contacts',
			routes: ['/contacts'],
			loader: async () => await import(`./it/contacts.json`)
		},
		{
			locale: 'it',
			key: 'prices',
			routes: ['/prices'],
			loader: async () => await import(`./it/prices.json`)
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
