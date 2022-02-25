<script>
	import { Check, X } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/components/admin/Card.svelte';
	import { goto } from '$app/navigation';

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

	let tag = {
		name: undefined,
		accent: undefined
	};

	let error = false;
	let open = false;

	const submit = async () => {
		if (tag.name && tag.accent) {
			await fetch('/api/events/tags', {
				method: 'POST',
				body: JSON.stringify(tag)
			});

			goto('/admin/dashboard/events');
		} else {
			error = true;
		}
	};
</script>

<Card>
	<div slot="title">Crea un nuovo evento</div>
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
