import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		...['home', 'ride', 'lessons', 'childs', 'trekking'].map((key) => ({
			locale: 'it',
			key,
			loader: async () => await import(`./it/${key}.json`)
		}))
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
