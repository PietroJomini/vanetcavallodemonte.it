<script>
	export let name;
	export let value;
	export let className;
</script>

<div class={`${className} flex items-center space-x-3 justify-between`}>
	{#if name}<span class="text-gray-700">{name} </span>{/if}
	<label class="items-cente relative flex cursor-pointer">
		<input type="checkbox" class="sr-only" bind:checked={value} on:click />
		<div class="toggle-bg h-6 w-11 rounded-full bg-gray-200" />
	</label>
</div>

<style>
	.toggle-bg:after {
		content: '';
		@apply absolute top-1 left-1 h-4 w-4 rounded-full border-none bg-white shadow-sm transition;
	}

	input:checked + .toggle-bg:after {
		transform: translateX(120%);
	}

	input:checked + .toggle-bg {
		@apply bg-emerald-400;
	}
</style>
