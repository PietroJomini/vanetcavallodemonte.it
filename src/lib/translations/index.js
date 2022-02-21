import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'it',
			key: 'home',
			loader: async () => await import('./it/home.json')
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
