<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { id } = params;

		const response = await fetch(`/api/events/tags?id=${id}`);
		const { tags } = await response.json();

		return { props: { id, tag: tags[0] } };
	}
</script>

<script>
	import { Check, Trash, X } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/components/admin/Card.svelte';
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/admin/Modal.svelte';

	const accents = [
		{ name: 'slate', value: '#64748B' },
		{ name: 'red', value: '#EF4444' },
		{ name: 'amber', value: '#F59E0B' },
		{ name: 'lime', value: '#84CC16' },
		{ name: 'emerald', value: '#10B981' },
		{ name: 'teal', value: '#14B8A6' },
		{ name: 'cyan', value: '#06B6D4' },
		{ name: 'sky', value: '#0EA5E9' },
		{ name: 'indigo', value: '#6366F1' },
		{ name: 'pink', value: '#EC4899' },
		{ name: 'rose', value: '#F43F5E' }
	];

	export let id;
	export let tag;

	let error = false;
	let modal = false;
	let open = false;

	const submit = async () => {
		if (tag.name) {
			await fetch('/api/events/tags', {
				method: 'PATCH',
				body: JSON.stringify({ id, name: tag.name, accent: tag.accent })
			});
			goto('/admin/dashboard/events');
		} else {
			error = true;
		}
	};

	const del = async () => {
		await fetch('/api/events/tags', { method: 'DELETE', body: JSON.stringify({ id }) });
		goto('/admin/dashboard/events');
	};
</script>

<Card>
	<div slot="title">Modifica tag</div>
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
					<div class="border-b py-2 text-xl">Eliminare il tag?</div>
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
				<span class={error && !tag.name ? 'text-red-500' : 'text-gray-700'}>Nome *</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					class:border-red-500={error && !tag.name}
					placeholder=""
					bind:value={tag.name}
				/>
			</div>
			<div>
				<span class={error && !tag.accent ? 'text-red-500' : 'text-gray-700'}>Colore *</span>
				<div
					class="bored-transparent mt-1 flex cursor-pointer rounded-md border bg-gray-100 p-3"
					class:border-red-500={error && !tag.accent}
					class:border-gray-500={open}
					on:click={() => (open = !open)}
				>
					{#if open}
						{#each accents as accent}
							<div
								class="mr-3 h-8 w-8 rounded"
								style={`background-color: ${accent.value}`}
								on:click={() => (tag.accent = accent.value)}
							/>
						{/each}
					{:else if tag.accent}
						<div class="mr-3 h-8 w-8 rounded" style={`background-color: ${tag.accent}`} />
					{:else}
						<div class=" text-gray-400">Seleziona un colore</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</Card>
