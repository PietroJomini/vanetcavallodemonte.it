<script>
	import { Icon } from '@steeze-ui/svelte-icon';

	export let src;
	export let className;
</script>

<div
	class={`m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition ${className}`}
	on:click
>
	<Icon {src} />
</div>
