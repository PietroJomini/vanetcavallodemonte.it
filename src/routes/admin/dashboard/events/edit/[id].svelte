<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { id } = params;

		const response = await fetch(`/api/events?id=${id}`);
		const { events } = await response.json();

		return { props: { id, events } };
	}
</script>

<script>
	import { Check, Trash, X } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/components/admin/Card.svelte';
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/admin/Modal.svelte';

	export let id;
	export let events;

	const event = {
		...events[0],
		start: events[0].start && new Date(events[0].start).toISOString().substring(0, 10),
		end: events[0].end && new Date(events[0].end).toISOString().substring(0, 10)
	};

	let error = false;
	let modal = false;

	const submit = async () => {
		if (event.title && event.start) {
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
	<div slot="actions">
		<div class="flex">
			<div
				class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-emerald-500"
				on:click={submit}
			>
				<Icon src={Check} />
			</div>
			<a
				href="/admin/dashboard/events"
				class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-red-500"
			>
				<Icon src={X} />
			</a>
			<div
				class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-red-500"
				on:click={() => (modal = true)}
			>
				<Icon src={Trash} />
			</div>
			<Modal bind:show={modal}>
				<div class="flex w-80 flex-col rounded bg-white p-3">
					<div class="border-b py-2 text-xl">Eliminare l'evento?</div>
					<div class="mt-1 text-sm text-red-500">Attenzione: azione irreversibile</div>
					<div class="mt-4 flex space-x-2">
						<div
							class="flex-grow cursor-pointer rounded border p-3 px-5 text-center text-gray-400 transition hover:text-emerald-500"
							on:click={() => (modal = false)}
						>
							NO
						</div>
						<div
							class="flex-grow cursor-pointer rounded border p-3 px-5 text-center text-gray-400 transition hover:text-red-500"
							on:click={del}
						>
							SI
						</div>
					</div>
				</div>
			</Modal>
		</div>
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<div>
				<span class={error && !event.title ? 'text-red-500' : 'text-gray-700'}>Titolo *</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					class:border-red-500={error && !event.title}
					placeholder=""
					bind:value={event.title}
				/>
			</div>
			<div>
				<span class="text-gray-700">Descrizione</span>
				<textarea
					class=" mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
					bind:value={event.description}
				/>
			</div>
			<div class="flex">
				<div class="w-1/2 pr-3">
					<span class={error && !event.start ? 'text-red-500' : 'text-gray-700'}>Inizio *</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						class:border-red-500={error && !event.start}
						placeholder=""
						bind:value={event.start}
					/>
				</div>
				<div class="w-1/2 pl-3">
					<span class="text-gray-700">Fine</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder=""
						bind:value={event.end}
					/>
				</div>
			</div>
			<div>
				<span class="text-gray-700">Link</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
					bind:value={event.link}
				/>
			</div>
		</div>
	</div>
</Card>
