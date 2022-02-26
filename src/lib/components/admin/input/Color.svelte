<script>
	import OutClick from 'svelte-outclick';

	export let name;
	export let value;
	export let required;
	export let error;
	export let className;
	export let colors;
	export let disabled;

	let open = false;
</script>

<div class={className}>
	{#if name}
		<span class={error ? 'text-red-500' : 'text-gray-700'}>
			{name}{#if required} *{/if}
		</span>
	{/if}
	<OutClick on:outclick={() => (open = false)}>
		<div
			class="bored-transparent mt-1 flex cursor-pointer rounded-md border bg-gray-100 p-3 transition"
			class:border-red-500={error}
			class:border-gray-500={open}
			on:click={() => (open = !open)}
		>
			{#if open && !disabled}
				{#each colors as color}
					<div
						class="mr-3 h-8 w-8 rounded"
						style={`background-color: ${color}`}
						on:click={() => (value = color)}
					/>
				{/each}
			{:else if value}
				<div class="mr-3 h-8 w-8 rounded" style={`background-color: ${value}`} />
			{:else}
				<div class=" text-gray-400">Seleziona un colore</div>
			{/if}
		</div>
	</OutClick>
</div>
