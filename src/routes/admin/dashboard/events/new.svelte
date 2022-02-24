<script>
	import { Check, X } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/components/admin/Card.svelte';
	import { goto } from '$app/navigation';

	let title;
	let description;
	let start;
	let end;
	let link;

	let error = false;

	const submit = async () => {
		if (title && start) {
			await fetch('/api/events', {
				method: 'POST',
				body: JSON.stringify({ title, description, start, end, link })
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
				<span class={error && !title ? 'text-red-500' : 'text-gray-700'}>Titolo *</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					class:border-red-500={error && !title}
					placeholder=""
					bind:value={title}
				/>
			</div>
			<div>
				<span class="text-gray-700">Descrizione</span>
				<textarea
					class=" mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
					bind:value={description}
				/>
			</div>
			<div class="flex">
				<div class="w-1/2 pr-3">
					<span class={error && !start ? 'text-red-500' : 'text-gray-700'}>Inizio *</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						class:border-red-500={error && !start}
						placeholder=""
						bind:value={start}
					/>
				</div>
				<div class="w-1/2 pl-3">
					<span class="text-gray-700">Fine</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder=""
						bind:value={end}
					/>
				</div>
			</div>
			<div>
				<span class="text-gray-700">Link</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
					bind:value={link}
				/>
			</div>
		</div>
	</div>
</Card>
