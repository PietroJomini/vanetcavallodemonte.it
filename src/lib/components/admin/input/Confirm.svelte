<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let yes;
	export let no;
</script>

<div class="flex w-80 flex-col rounded bg-white p-3">
	<div class="border-b py-2 text-xl">Eliminare l'evento?</div>
	<div class="mt-1 text-sm text-red-500">Attenzione: azione irreversibile</div>
	<div class="mt-4 flex space-x-2">
		<div
			class="flex-grow cursor-pointer rounded border p-3 px-5 text-center text-gray-400 transition hover:text-emerald-500"
			on:click={() => dispatch('no')}
		>
			{no}
		</div>
		<div
			class="flex-grow cursor-pointer rounded border p-3 px-5 text-center text-gray-400 transition hover:text-red-500"
			on:click={() => dispatch('yes')}
		>
			{yes}
		</div>
	</div>
</div>
