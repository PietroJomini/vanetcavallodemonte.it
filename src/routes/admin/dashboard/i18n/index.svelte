<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	export let pages = [
		{
			name: 'Test',
			path: '/test'
		}
	];
</script>

<Card>
	<div slot="title">Traduzioni</div>
	<div slot="content">
		<Table
			head={['Pagina', 'Path']}
			rows={pages.map((page) => ({
				items: [page.name, page.path],
				to: `/admin/dashboard/i18n/${page.name}`
			}))}
		/>
	</div>
</Card>
