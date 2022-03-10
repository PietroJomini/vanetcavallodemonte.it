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
	import Trash from '$lib/components/admin/icons/Trash.svelte';
	import Switch from '$lib/components/admin/input/Switch.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';
	import Confirm from '$lib/components/admin/input/Confirm.svelte';

	export let locale;
	let modal = false;

	const submit = async () => {
		fetch('/api/i18n/schema', {
			method: 'PATCH',
			body: JSON.stringify({ locale: locale.locale, enabled: locale.enabled })
		});

		goto('/admin/dashboard/i18n');
	};

	const del = async () => {
		fetch('/api/i18n/schema', {
			method: 'DELETE',
			body: JSON.stringify({ locale: locale.locale })
		});

		goto('/admin/dashboard/i18n');
	};
</script>

<Card>
	<div slot="title">{locale.name} - {locale.locale}</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/i18n')} />
		<Trash on:click={() => (modal = true)} />
		<Modal bind:show={modal}>
			<Confirm yes="SI" no="NO" on:yes={del} on:no={() => (modal = false)} />
		</Modal>
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Switch name="Abilitato" bind:value={locale.enabled} />
		</div>
	</div>
</Card>
