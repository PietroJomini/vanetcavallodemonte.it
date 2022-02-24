<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const response = await fetch('/api/events');
		const { events } = await response.json();
		return { props: { events } };
	}
</script>

<script>
	import { Plus } from '@steeze-ui/heroicons';

	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/components/admin/Card.svelte';
	import Table from '$lib/components/admin/Table.svelte';

	export let events = [];
</script>

<Card>
	<div slot="title">Eventi</div>
	<div
		slot="actions"
		class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-emerald-500"
	>
		<a href="/admin/dashboard/events/new"><Icon src={Plus} /></a>
	</div>
	<div slot="content">
		{#if events.length > 0}
			<Table
				head={['Titolo', 'Descrizione', 'Link', 'Inizio', 'Fine']}
				rows={events.map((event) => ({
					items: [
						event.title,
						event.description,
						event.link,
						event.start && new Date(event.start).toLocaleDateString('it-IT'),
						event.end && new Date(event.end).toLocaleDateString('it-IT')
					],
					to: `/admin/dashboard/events/edit/${event._id}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Ancora nessun evento pianificato</div>
		{/if}
	</div>
</Card>
