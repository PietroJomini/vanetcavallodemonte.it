<script context="module">
	import { loadTranslations, locale } from '$lib/i18n';
	import config from '$lib/config/config.json';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => {
		if (config.find(({ key }) => key === 'maintenance').value)
			return { status: 301, redirect: '/maintenance' };

		const { pathname } = url;
		const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;
		const route = pathname.replace(new RegExp(`^/${lang}`), '');
		await loadTranslations(lang, route);

		locale.set(lang); // <== keep this just before the `return` – see https://github.com/sveltekit-i18n/lib/issues/32
		return { stuff: { route, lang, maintenance: false } };
	};
</script>

<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';

	onMount(() => document.querySelector('body').classList.add('bg-gray-100'));
</script>

<svelte:head>
	<title>Vanet Cavallo</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
