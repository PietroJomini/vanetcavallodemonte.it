import { defaultLocale, locales } from '$lib/translations';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const {
		url: { pathname }
	} = event;

	const supportedLocales = locales.get();

	let locale = supportedLocales.find(
		(l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase()
	);

	if (!locale) {
		const path = pathname.match(/\/.*?\/(.*)/);
		console.log(path && path[1], defaultLocale);
		return new Response(undefined, {
			headers: { location: `/${defaultLocale}/${path ? path[1] : ''}` },
			status: 301
		});
	}

	// Add html `lang` attribute
	const response = await resolve(event);
	const body = await response.text();
	return new Response(`${body}`.replace(/<html.*>/, `<html lang="${locale}">`), response);
};
