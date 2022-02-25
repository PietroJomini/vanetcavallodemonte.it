<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Number from '$lib/components/admin/input/Number.svelte';

	let name;
	let price;
	let error = false;

	$: checkPrice = price && !isNaN(price);

	const submit = async () => {
		if (name && checkPrice) {
			await fetch('/api/prices', {
				method: 'POST',
				body: JSON.stringify({ name, price })
			});

			goto('/admin/dashboard/prices');
		} else {
			error = true;
		}
	};
</script>

<Card>
	<div slot="title">Crea un nuovo prezzo</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/prices')} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Nome" required error={error && !name} bind:value={name} />
			<Number name="Prezzo" required error={error && !checkPrice} bind:value={price} />
		</div>
	</div>
</Card>
