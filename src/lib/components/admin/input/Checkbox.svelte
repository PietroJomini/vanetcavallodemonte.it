<script>
	export let name;
	export let value;
	export let required;
	export let error;
	export let className;
	export let disabled;
</script>

<div class={`${className} flex items-center space-x-3`}>
	{#if name}
		<span class={error ? 'text-red-500' : 'text-gray-700'}>
			{name}{#if required}{' *'}{/if}
		</span>
	{/if}
	<input
		type="checkbox"
		class={`mt-1 w-6 h-6 transition rounded-md border bg-gray-100 focus:bg-white focus:ring-0 ${
			error ? 'border-red-500' : 'border-gray-200'
		}`}
		placeholder=""
		bind:checked={value}
		{disabled}
	/>
</div>
