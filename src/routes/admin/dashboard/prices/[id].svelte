<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { id } = params;

		const response = await fetch(`/api/prices?id=${id}`);
		const { prices } = await response.json();

		return { props: { id, price: prices[0] } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Number from '$lib/components/admin/input/Number.svelte';

	export let price;
	export let id;
	let error = false;

	$: checkPrice = price.price && !isNaN(price.price);

	const submit = async () => {
		if (price.name && checkPrice) {
			await fetch('/api/prices', {
				method: 'PATCH',
				body: JSON.stringify({ id, price: price.price })
			});

			goto('/admin/dashboard/prices');
		} else {
			error = true;
		}
	};
</script>

<Card>
	<div slot="title">Modifica prezzo</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/prices')} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Nome" required error={error && !price.name} bind:value={price.name} disabled />
			<Number name="Prezzo" required error={error && !checkPrice} bind:value={price.price} />
		</div>
	</div>
</Card>
