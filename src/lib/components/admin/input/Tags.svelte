<script>
	export let name;
	export let value;
	export let required;
	export let error;
	export let className;

	export let options;
	export let selected;

	let map = options.map((option) => ({
		...option,
		selected: selected?.includes(option._id) || false
	}));

	$: value = map.filter(({ selected }) => selected).map(({ _id }) => _id);
</script>

<div class={className}>
	{#if name}
		<span class={error ? 'text-red-500' : 'text-gray-700'}>
			{name}{#if required} *{/if}
		</span>
	{/if}
	<div
		class={`mt-1 w-full rounded-md flex border p-1 space-x-1 bg-gray-100 ${
			error ? 'border-red-500' : 'border-transparent'
		}`}
	>
		{#each map as option}
			<div
				class={`cursor-pointer rounded-md select-none transition bg-white p-1 px-2 ${
					option.selected && 'text-white'
				}`}
				style={option.selected && `background-color: ${option.accent};`}
				on:click={() => (option.selected = !option.selected)}
			>
				{option.name}
			</div>
		{/each}
	</div>
</div>
