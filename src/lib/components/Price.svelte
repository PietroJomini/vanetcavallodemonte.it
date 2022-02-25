<script>
	import { prices } from '$lib/stores';

	export let name;

	const load = async () => {
		const res = await fetch(`/api/prices?name=${name}`);
		const body = await res.json();
		const price = body.prices[0].price;

		prices.set({ ...$prices, name: price });
		return price;
	};

	const promise = load();
</script>

{#await promise}
	{$prices[name] || '-'}
{:then price}
	{price}
{/await}
