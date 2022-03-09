import { handler } from '$lib/api/method.js';
import { schema, pages } from '$lib/i18n/locales.js';

export const get = handler({
	action: () => schema.read({ json: false })
});

export const post = handler({
	action: async ({ body: { name, locale, enabled } }) =>
		Promise.all([
			schema.update((body) => ({
				...body,
				locales: [...body.locales, { name, locale, enabled, protected: false }]
			})),
			pages.make(locale)
		])
});

export const patch = handler({
	action: async ({ body: { locale, enabled } }) =>
		schema.update((body) => {
			body.locales.find((l) => l.locale === locale).enabled = enabled;
			return body;
		})
});

export const del = handler({
	action: async ({ body: { locale } }) =>
		Promise.all([
			schema.update((body) => ({
				...body,
				locales: body.locales.filter((l) => l.locale !== locale)
			})),
			pages.remove(locale)
		])
});
