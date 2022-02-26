<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Card from '$lib/components/admin/Card.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Textarea from '$lib/components/admin/input/Textarea.svelte';
	import { flatten, unflatten } from '$lib/json';
	import { onMount } from 'svelte';

	let rows = [];

	const down = async () => {
		const res = await fetch(`/api/i18n?locale=${$page.params.locale}&page=${$page.params.page}`);
		const body = await res.json();

		rows = flatten(body);
	};

	const up = async () => {
		const body = unflatten(rows);
		await fetch(`/api/i18n?locale=${$page.params.locale}&page=${$page.params.page}`, {
			method: 'PATCH',
			body: JSON.stringify(body)
		});

		goto(`/admin/dashboard/i18n/${$page.params.page}`);
	};

	onMount(down);
</script>

<Card>
	<div slot="title">Traduzioni / {$page.params.page} / {$page.params.locale}</div>
	<div slot="actions" class="flex">
		<X on:click={() => goto(`/admin/dashboard/i18n/${$page.params.page}`)} />
		<Check on:click={up} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			{#each rows as row}
				<div class="flex">
					<span class="w-80">{row[0]}</span>
					<Textarea bind:value={row[1]} className="flex-grow" />
				</div>
			{/each}
		</div>
	</div>
</Card>
