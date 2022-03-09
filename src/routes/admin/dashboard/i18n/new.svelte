<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const response = await fetch(`/api/i18n/schema`);
		const schema = await response.json();

		return { props: { locales: schema.locales } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Table from '$lib/components/admin/Table.svelte';
	import codes from '$lib/i18n/ISO639codes.js';

	export let locales;
	let filter;

	$: locales.forEach(({ locale }) => delete codes[locale]);
	$: codes_list = Object.keys(codes).map((code) => ({ code, ...codes[code] }));
	$: lc_filter = filter && filter.toLowerCase();
	$: filtered_codes = codes_list.filter(({ name, native, code }) =>
		filter
			? name.toLowerCase().match(lc_filter) ||
			  native.toLowerCase().match(lc_filter) ||
			  code.match(lc_filter)
			: true
	);

	const submit = async (code) => {
		const { name, native } = codes[code];
		fetch('/api/i18n/schema', {
			method: 'POST',
			body: JSON.stringify({ name, native, locale: code })
		});

		goto('/admin/dashboard/i18n');
	};
</script>

<Card>
	<div slot="title">Seleziona una lingua</div>
	<div slot="actions" class="flex">
		<X on:click={() => goto('/admin/dashboard/i18n')} />
	</div>
	<div slot="content" class="flex flex-col space-y-3">
		<Text bind:value={filter} name="Filtro" />
		<Table
			head={['Nome', 'Nativo', 'Locale']}
			rows={filtered_codes.map(({ code, name, native }) => ({
				items: [name, native, code],
				click: () => submit(code)
			}))}
		/>
	</div>
</Card>
