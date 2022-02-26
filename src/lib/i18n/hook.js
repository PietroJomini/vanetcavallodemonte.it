export const apply =
	(locale, excepted) =>
	({ html }) =>
		excepted ? html : html.replace(/<html.*>/, `<html lang="${locale}">`);

export const createHook =
	({ locales, defaultLocale, exceptions = [] }) =>
	({ pathname }) => {
		const supportedLocales = locales.get();
		const reqLocale = `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase();
		const locale = supportedLocales.find((l) => l === reqLocale);
		const excepted = exceptions.includes(reqLocale);

		if (!locale && !excepted) {
			const path = pathname.match(/\/.*?\/(.*)/);
			const location = `/${defaultLocale}/${path ? path[1] : ''}`;
			return {
				failed: true,
				redirect: new Response(undefined, {
					headers: { location },
					status: 301
				})
			};
		}

		return { failed: false, apply: apply(locale, excepted) };
	};
