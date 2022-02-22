<script>
	import { slide, fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Plus, Minus } from '@steeze-ui/heroicons';

	export let className = '';

	let open = false;
</script>

<div class={'p-2 ' + className}>
	<div
		class="w-full select-none px-3 py-4 text-2xl relative cursor-pointer"
		on:click={() => (open = !open)}
	>
		<div class="w-3/4">
			<slot name="title" />
		</div>

		{#if open}
			<div class="absolute right-6 top-0 h-full w-4" transition:fade={{ duration: 200 }}>
				<Icon src={Minus} />
			</div>
		{:else}
			<div class="absolute right-6 top-0 h-full w-4" transition:fade={{ duration: 200 }}>
				<Icon src={Plus} />
			</div>
		{/if}
	</div>

	{#if open}
		<div transition:slide>
			<slot name="content" />
		</div>
	{/if}
</div>
