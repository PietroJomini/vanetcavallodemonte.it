import i18n from 'sveltekit-i18n';
import { createHook } from './hook.js';
import map from '/static/translations/locales.map.json';

export const defaultLocale = 'it';
export const exceptions = ['api', 'admin', 'maintenance', 'robots.txt', 'sitemap.txt'];

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: map.loaders.map((l) => ({
		...l,
		loader: () => import(/* @vite-ignore */ l.loader)
	})),
	fallbackLocale: defaultLocale
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
export const hook = createHook({ locales, defaultLocale, exceptions });
