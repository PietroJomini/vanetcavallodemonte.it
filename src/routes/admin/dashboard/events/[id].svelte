<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { id } = params;

		const response = await fetch(`/api/events?id=${id}`);
		const { events } = await response.json();

		const tags = await fetch('/api/events/tags');

		return { props: { id, events, tags: (await tags.json()).tags } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Trash from '$lib/components/admin/icons/Trash.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Tags from '$lib/components/admin/input/Tags.svelte';
	import Textarea from '$lib/components/admin/input/Textarea.svelte';
	import DatePicker from '$lib/components/admin/input/DatePicker.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';
	import Confirm from '$lib/components/admin/input/Confirm.svelte';

	export let id;
	export let events;
	export let tags;

	const event = {
		...events[0],
		start: events[0].start && new Date(events[0].start).toISOString().substring(0, 10),
		end: events[0].end && new Date(events[0].end).toISOString().substring(0, 10)
	};

	let error = false;
	let modal = false;

	const submit = async () => {
		if (event.title && event.start) {
			event._id = undefined;
			await fetch('/api/events', { method: 'PATCH', body: JSON.stringify({ id, event }) });
			goto('/admin/dashboard/events');
		} else {
			error = true;
		}
	};

	const del = async () => {
		await fetch('/api/events', { method: 'DELETE', body: JSON.stringify({ id }) });
		goto('/admin/dashboard/events');
	};
</script>

<Card>
	<div slot="title">Modifica evento</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/events')} />
		<Trash on:click={() => (modal = true)} />
		<Modal bind:show={modal}>
			<Confirm yes="SI" no="NO" on:yes={del} on:no={() => (modal = false)} />
		</Modal>
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Titolo" required error={error && !event.title} bind:value={event.title} />
			<Textarea name="Descrizione" bind:value={event.description} />

			<div class="flex space-x-3">
				<DatePicker
					className="w-1/2"
					name="Inizio"
					required
					error={error && !event.start}
					bind:value={event.start}
				/>
				<DatePicker className="w-1/2" name="Fine" bind:value={event.end} />
			</div>
			<Text name="Link" bind:value={event.link} />
			<Tags name="Tags" options={tags} bind:value={event.tags} selected={event.tags} />
		</div>
	</div>
</Card>
