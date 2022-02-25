<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const response = await fetch('/api/prices');
		const { prices } = await response.json();
		return { props: { prices } };
	}
</script>

<script>
	import { goto } from '$app/navigation';

	import Card from '$lib/components/admin/Card.svelte';
	import Plus from '$lib/components/admin/icons/Plus.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	export let prices;
</script>

<Card>
	<div slot="title">Prezzi</div>
	<div slot="actions" class="flex">
		<Plus on:click={() => goto('/admin/dashboard/prices/new')} disabled />
	</div>
	<div slot="content">
		{#if prices.length > 0}
			<Table
				head={['Nome', 'Prezzo']}
				rows={prices.map(({ _id, name, price }) => ({
					items: [name, price],
					to: `/admin/dashboard/prices/edit/${_id}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Ancora nessun prezzo aggiunto</div>
		{/if}
	</div>
</Card>
