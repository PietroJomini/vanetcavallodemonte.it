<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const response = await fetch('/api/prices');
		const { prices } = await response.json();
		return { props: { prices } };
	}
</script>

<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	export let prices;
</script>

<Card>
	<div slot="title">Prezzi</div>
	<div slot="content">
		{#if prices.length > 0}
			<Table
				head={['Nome', 'Prezzo']}
				rows={prices.map(({ _id, name, price }) => ({
					items: [name, price],
					to: `/admin/dashboard/prices/${_id}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Ancora nessun prezzo aggiunto</div>
		{/if}
	</div>
</Card>
