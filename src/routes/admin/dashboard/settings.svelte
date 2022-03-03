<script>
	import Card from '$lib/components/admin/Card.svelte';
	import Switch from '$lib/components/admin/input/Switch.svelte';
	import { onMount } from 'svelte';

	let options = [];

	onMount(async () => {
		const response = await fetch('/api/settings');
		options = await response.json();
	});

	const update = async ({ key, value }) =>
		await fetch('/api/settings', {
			method: 'PATCH',
			body: JSON.stringify({ key, value: !value })
		});
</script>

<Card>
	<div slot="title">Impostazioni</div>
	<div slot="content">
		{#each options as option}
			<Switch name={option.name} bind:value={option.value} on:click={() => update(option)} />
		{/each}
	</div>
</Card>
