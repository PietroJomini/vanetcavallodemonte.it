import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'it',
			key: 'home',
			loader: async () => await import('./it/home.json')
		},
		{
			locale: 'it',
			key: 'ride',
			loader: async () => await import('./it/ride.json')
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
