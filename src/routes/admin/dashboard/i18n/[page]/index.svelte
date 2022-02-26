<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	const langs = [
		{ name: 'Italiano', locale: 'it' },
		{ name: 'Inglese', locale: 'en' }
	];
</script>

<Card>
	<div slot="title">Traduzioni / {$page.params.page}</div>
	<div slot="actions" class="flex">
		<X on:click={() => goto('/admin/dashboard/i18n')} />
	</div>
	<div slot="content">
		<Table
			head={['Lingua', 'Locale']}
			rows={langs.map((lang) => ({
				items: [lang.name, lang.locale],
				to: `/admin/dashboard/i18n/${$page.params.page}/${lang.locale}`
			}))}
		/>
	</div>
</Card>
