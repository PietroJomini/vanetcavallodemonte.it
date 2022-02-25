<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const events = await fetch('/api/events');
		const tags = await fetch('/api/events/tags');

		return {
			props: {
				events: (await events.json()).events,
				tags: (await tags.json()).tags
			}
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';

	import Card from '$lib/components/admin/Card.svelte';
	import Plus from '$lib/components/admin/icons/Plus.svelte';
	import Table from '$lib/components/admin/Table.svelte';
	import TagList from '$lib/components/admin/TagList.svelte';

	export let events;
	export let tags;
</script>

<Card>
	<div slot="title">Eventi</div>
	<div slot="actions" class="flex">
		<Plus on:click={() => goto('/admin/dashboard/events/new')} />
	</div>
	<div slot="content">
		{#if events.length > 0}
			<Table
				head={['Titolo', 'Descrizione', 'Link', 'Inizio', 'Fine', 'Tags']}
				rows={events.map((event) => ({
					items: [
						event.title,
						event.description,
						event.link,
						event.start && new Date(event.start).toLocaleDateString('it-IT'),
						event.end && new Date(event.end).toLocaleDateString('it-IT'),
						{ type: 'component', component: event.tags && TagList, props: { tags: event.tags } }
					],
					to: `/admin/dashboard/events/edit/${event._id}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Ancora nessun evento pianificato</div>
		{/if}
	</div>
</Card>

<Card>
	<div slot="title">Tags</div>
	<div slot="actions" class="flex">
		<Plus on:click={() => goto('/admin/dashboard/events/tags/new')} />
	</div>
	<div slot="content">
		{#if tags.length > 0}
			<Table
				head={['Nome', 'Colore', 'Protetto']}
				rows={tags.map((tag) => ({
					items: [
						tag.name,
						`<div class="h-6 w-6 rounded" style="background-color: ${tag.accent}" >`,
						tag.protected ? 'SI' : 'NO'
					],
					to: `/admin/dashboard/events/tags/edit/${tag._id}`
				}))}
			/>
		{:else}
			<div class="w-full text-gray-400 italic">Ancora nessun tag inserito</div>
		{/if}
	</div>
</Card>
