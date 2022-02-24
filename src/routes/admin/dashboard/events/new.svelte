<script>
	import { Check, X } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/admin/Card.svelte';
</script>

<Card>
	<div slot="title">Crea un nuovo evento</div>
	<div slot="actions">
		<div class="flex">
			<a
				href="/admin/dashboard/events"
				class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-emerald-500"
				><Icon src={Check} /></a
			>
			<a
				href="/admin/dashboard/events"
				class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-red-500"
				><Icon src={X} /></a
			>
		</div>
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<div>
				<span class="text-gray-700">Titolo *</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
				/>
			</div>
			<div>
				<span class="text-gray-700">Descrizione *</span>
				<textarea
					class=" mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
				/>
			</div>
			<div class="flex">
				<div class="w-1/2 pr-3">
					<span class="text-gray-700">Inizio *</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder=""
					/>
				</div>
				<div class="w-1/2 pl-3">
					<span class="text-gray-700">Fine</span>
					<input
						type="date"
						class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder=""
					/>
				</div>
			</div>
			<div>
				<span class="text-gray-700">Link</span>
				<input
					type="text"
					class="mt-1 w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
					placeholder=""
				/>
			</div>
		</div>
	</div>
</Card>
