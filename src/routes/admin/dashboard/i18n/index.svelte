<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import Plus from '$lib/components/admin/icons/Plus.svelte';
	import Table from '$lib/components/admin/Table.svelte';
	import { onMount } from 'svelte';

	let schema;

	onMount(async () => {
		const res = await fetch('/api/i18n/schema');
		schema = await res.json();
	});
</script>

<Card>
	<div slot="title">Lingue</div>
	<div slot="actions" class="flex">
		<Plus on:click={() => goto('/admin/dashboard/i18n/new')} />
	</div>
	<div slot="content">
		<Table
			head={['Lingua', 'Nativo', 'Locale', 'Attivo', 'Protetto']}
			rows={schema?.locales.map((locale) => ({
				items: [
					locale.name,
					locale.native,
					locale.locale,
					locale.enabled ? 'SI' : 'NO',
					locale.protected ? 'SI' : 'NO'
				],
				to: !locale.protected && `/admin/dashboard/i18n/${locale.locale}`
			}))}
		/>
	</div>
</Card>

<Card>
	<div slot="title">Pagine</div>
	<div slot="content">
		<Table
			head={['Nome', 'ID']}
			rows={schema?.pages.map((page) => ({
				items: [page.name, page.key],
				to: `/admin/dashboard/i18n/page/${page.key}/`
			}))}
		/>
	</div>
</Card>
