<script>
	import { locale as currentLocale } from './translations';
	export let to = '';
	export let locale;

	locale = locale || currentLocale.get();
	if (!to.startsWith('/')) to = `/${to}`;
</script>

<a href={`/${locale}${to}`}><slot /></a>
