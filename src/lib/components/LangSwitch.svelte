<script>
	import OutClick from 'svelte-outclick';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { GlobeAlt } from '@steeze-ui/heroicons';
	import Link from './Link.svelte';
	import { page } from '$app/stores';

	$: ({ stuff } = $page);

	let langs = [
		{ name: 'Italiano', locale: 'it' },
		{ name: 'English', locale: 'en' }
	];

	let open = false;
</script>

<div class="" on:click={(_) => (open = !open)}>
	<OutClick on:outclick={(_) => (open = false)}>
		<div class="h-6 w-6 cursor-pointer"><Icon src={GlobeAlt} /></div>

		{#if open}
			<div class="absolute right-0 top-14 w-full px-5 lg:-right-10 lg:w-48">
				<div class="flex w-full flex-col rounded bg-white p-2 shadow-lg">
					{#each langs as lang}
						<Link locale={lang.locale} to={stuff.route}>
							<span class="cursor-pointer p-2 text-xs font-semibold uppercase text-gray-700">
								{lang.name}
							</span>
						</Link>
					{/each}
				</div>
			</div>
		{/if}
	</OutClick>
</div>
