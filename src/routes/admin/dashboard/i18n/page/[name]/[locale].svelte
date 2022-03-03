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
	let schema = [];

	const down = async () => {
		const page_response = await fetch(
			`/api/i18n/page?locale=${$page.params.locale}&page=${$page.params.name}`
		);

		const page_body = await page_response.json();
		rows = flatten(page_body).sort();

		const schema_response = await fetch('/api/i18n/schema');
		const schema_body = await schema_response.json();
		schema = flatten(schema_body.pages.find(({ key }) => key === $page.params.name).body);
		schema = schema.filter((row) => !rows.map((row) => row[0]).includes(row[0])).sort();
	};

	const up = async () => {
		const body = unflatten([
			...rows.filter(([_, value]) => value !== ''),
			...schema.filter(([_, value]) => value !== '')
		]);

		fetch(`/api/i18n/page?locale=${$page.params.locale}&page=${$page.params.name}`, {
			method: 'PATCH',
			body: JSON.stringify(body)
		});

		goto(`/admin/dashboard/i18n/page/${$page.params.name}`);
	};

	onMount(down);
</script>

<Card>
	<div slot="title">Pagine / {$page.params.name} / {$page.params.locale}</div>
	<div class="flex" slot="actions">
		<Check on:click={up} />
		<X on:click={() => goto(`/admin/dashboard/i18n/page/${$page.params.name}`)} />
	</div>
	<div slot="content" class="flex flex-col space-y-6">
		<div class="flex flex-col space-y-3">
			{#each rows as row}
				<div class="flex">
					<span class="w-80">{row[0]}</span>
					<Textarea bind:value={row[1]} className="flex-grow" />
				</div>
			{/each}
		</div>
		{#if schema.length > 0}
			<div class="w-full border-t py-3 text-center text-gray-700">Nuovi campi</div>
			<div class="flex flex-col space-y-3">
				{#each schema as row}
					<div class="flex">
						<span class="w-80">{row[0]}</span>
						<Textarea bind:value={row[1]} className="flex-grow" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</Card>
