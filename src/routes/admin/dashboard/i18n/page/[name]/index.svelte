<script>
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Table from '$lib/components/admin/Table.svelte';
	import { onMount } from 'svelte';

	let schema;

	onMount(async () => {
		const res = await fetch('/api/i18n/schema');
		schema = await res.json();
	});
</script>

<Card>
	<div slot="title">Pagine / {$page.params.name}</div>
	<div class="flex" slot="actions">
		<X on:click={() => goto('/admin/dashboard/i18n')} />
	</div>
	<div slot="content">
		<Table
			head={['Lingua', 'Locale', 'Attivo']}
			rows={schema?.locales.map((locale) => ({
				items: [locale.name, locale.locale, locale.enabled ? 'SI' : 'NO'],
				to: `/admin/dashboard/i18n/page/${$page.params.name}/${locale.locale}`
			}))}
		/>
	</div>
</Card>
