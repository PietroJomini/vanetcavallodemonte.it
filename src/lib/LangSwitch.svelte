<script>
	import OutClick from 'svelte-outclick';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { GlobeAlt } from '@steeze-ui/heroicons';

	let langs = ['Italiano', 'English', 'Français'];
	let open = false;
</script>

<div class="static" on:click={(_) => (open = !open)}>
	<OutClick on:outclick={(_) => (open = false)}>
		<div class="h-6 w-6 cursor-pointer"><Icon src={GlobeAlt} /></div>

		{#if open}
			<div class="absolute right-0 top-full w-full px-5 lg:w-48">
				<div class="-mt-4 flex w-full flex-col rounded bg-white p-2 shadow-lg lg:-mt-4">
					{#each langs as lang}
						<a href="/" class="p-2 text-xs font-semibold uppercase  text-gray-700">{lang}</a>
					{/each}
				</div>
			</div>
		{/if}
	</OutClick>
</div>
