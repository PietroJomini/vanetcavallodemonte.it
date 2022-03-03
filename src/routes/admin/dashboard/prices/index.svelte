<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Table from '$lib/components/admin/Table.svelte';
</script>

<Card endpoint="/api/prices">
	<div slot="title">Prezzi</div>
	<div slot="content" let:response>
		{@const prices = response.prices}
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
