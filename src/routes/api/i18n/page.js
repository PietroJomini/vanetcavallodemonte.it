import { handler } from '$lib/api/method.js';
import { pages } from '$lib/i18n/locales.js';

export const get = handler({
	action: async ({ params: { page, locale } }) => pages.read(locale, page)
});

export const patch = handler({
	action: async ({ params: { page, locale }, body }) => pages.write(locale, page, body)
});
