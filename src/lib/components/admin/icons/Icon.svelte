<script>
	import { Icon } from '@steeze-ui/svelte-icon';

	export let src;
	export let className;
	export let disabled;
</script>

{#if disabled}
	<div class={`m-1 h-8 w-8 rounded border p-1 text-gray-300 transition`}>
		<Icon {src} />
	</div>
{:else}
	<div
		class={`m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition ${className}`}
		on:click
	>
		<Icon {src} />
	</div>
{/if}
