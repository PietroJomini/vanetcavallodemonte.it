<script>
	export let name;
	export let value;
	export let required;
	export let error;
	export let className;
	export let disabled;
</script>

<div class={className}>
	{#if name}
		<span class={error ? 'text-red-500' : 'text-gray-700'}>
			{name}{#if required}{' *'}{/if}
		</span>
	{/if}
	<input
		type="date"
		class={`mt-1 w-full rounded-md transition  bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0 ${
			error ? 'border-red-500' : 'border-transparent'
		}`}
		placeholder=""
		bind:value
		{disabled}
	/>
</div>
