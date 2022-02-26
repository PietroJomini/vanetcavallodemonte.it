<script>
	import { locale as currentLocale } from '$lib/i18n';
	export let to = '';
	export let locale;

	locale = locale || currentLocale.get();
	if (!to.startsWith('/')) to = `/${to}`;
</script>

<a href={`/${locale}${to}`}><slot /></a>
