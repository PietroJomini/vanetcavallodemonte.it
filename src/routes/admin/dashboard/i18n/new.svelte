<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const response = await fetch(`/api/i18n/schema`);
		const schema = await response.json();

		return { props: { locales: schema.locales } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Checkbox from '$lib/components/admin/input/Checkbox.svelte';

	let name;
	let locale;
	let enabled;
	let error = false;

	export let locales;
	$: checkLocale = locale && !locales.find((l) => l.locale === locale);

	const submit = async () => {
		if (name && checkLocale) {
			await fetch('/api/i18n/schema', {
				method: 'POST',
				body: JSON.stringify({ name, locale, enabled })
			});

			goto('/admin/dashboard/i18n');
		} else {
			error = true;
		}
	};
</script>

<Card>
	<div slot="title">Crea un nuovo prezzo</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/i18n')} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Nome" required error={error && !name} bind:value={name} />
			<Text name="Locale" required error={error && !checkLocale} bind:value={locale} />
			<Checkbox name="Abilitato" bind:value={enabled} />
		</div>
	</div>
</Card>
