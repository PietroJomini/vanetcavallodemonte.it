<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Plus from '$lib/components/admin/icons/Plus.svelte';
	import Table from '$lib/components/admin/Table.svelte';
	import Image from '$lib/components/Image.svelte';

	const upload = () => {};

	const sort = (order) =>
		fetch('/api/images', {
			method: 'PATCH',
			body: JSON.stringify({ order })
		});
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
					items: [
						src,
						{
							type: 'component',
							component: Image,
							props: { key: `carousel/${src}`, className: 'h-10 w-auto' }
						}
					],
					to: `/admin/dashboard/carousel/${src}`,
					data: { src }
				}))}
				sortable
				on:sort={({ detail: { rows } }) => sort(rows.map((row) => row.data.src))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Nessuna immagine presente</div>
		{/if}
	</div>
</Card>
