<script>
	import { slide, fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Plus, Minus } from '@steeze-ui/heroicons';

	let open = false;
</script>

<div class="p-2">
	<div
		class="w-full select-none px-3 pt-4 pb-2 text-2xl relative cursor-pointer"
		on:click={() => (open = !open)}
	>
		<div class="w-3/4 text-gray-800 font-cabin">
			<slot name="title" />
		</div>

		{#if open}
			<div class="absolute right-6 top-0 h-full w-6" transition:fade={{ duration: 200 }}>
				<Icon src={Plus} />
			</div>
		{:else}
			<div class="absolute right-6 top-0 h-full w-6" transition:fade={{ duration: 200 }}>
				<Icon src={Minus} />
			</div>
		{/if}
	</div>

	{#if open}
		<div class="text-gray-800 py-3 px-4 font-cabin" transition:slide>
			<slot name="content" />
		</div>
	{/if}
</div>
