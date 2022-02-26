<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { locale } = params;

		const response = await fetch(`/api/i18n/schema`);
		const schema = await response.json();

		return { props: { locale: schema.locales.find((l) => l.locale === locale) } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Checkbox from '$lib/components/admin/input/Checkbox.svelte';
	import Trash from '$lib/components/admin/icons/Trash.svelte';

	export let locale;

	const submit = async () => {
		await fetch('/api/i18n/schema', {
			method: 'PATCH',
			body: JSON.stringify({ locale: locale.locale, enabled: locale.enabled })
		});

		goto('/admin/dashboard/i18n');
	};

	const del = async () => {
		await fetch('/api/i18n/schema', {
			method: 'DELETE',
			body: JSON.stringify({ locale: locale.locale })
		});

		goto('/admin/dashboard/i18n');
	};
</script>

<Card>
	<div slot="title">Modifica lingua</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/i18n')} />
		<Trash on:click={del} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Nome" bind:value={locale.name} disabled />
			<Text name="Locale" bind:value={locale.locale} disabled />
			<Checkbox name="Abilitata" bind:value={locale.enabled} />
		</div>
	</div>
</Card>
