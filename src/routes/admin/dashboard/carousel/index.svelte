<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Plus from '$lib/components/admin/icons/Plus.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	const upload = () => {};
</script>

<Card endpoint="/api/images">
	<div slot="title">Immagini</div>
	<div slot="actions" class="flex">
		<Plus on:click={upload} />
	</div>
	<div slot="content" let:response>
		{@const images = response.carousel}
		{#if images.length > 0}
			<Table
				head={['Nome']}
				rows={images.map((src) => ({
					items: [src],
					to: `/admin/dashboard/carousel/${src}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Nessuna immagine presente</div>
		{/if}
	</div>
</Card>
