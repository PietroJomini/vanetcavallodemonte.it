<script>
	import { goto } from '$app/navigation';

	import { locale as currentLocale } from '$lib/i18n';
	export let to = '';
	export let locale;
	export let pre;

	locale = locale;
	if (!to.startsWith('/')) to = `/${to}`;

	const go = () => {
		if (pre) pre();
		if (locale) window.location = `/${locale}${to}`;
		else goto(`/${currentLocale.get()}${to}`, { state: {} });
	};
</script>

<!-- <a href={`/${locale}${to}`}><slot /></a> -->
<div class="cursor-pointer" on:click={go}><slot /></div>
