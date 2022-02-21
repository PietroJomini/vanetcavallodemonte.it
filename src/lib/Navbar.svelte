<script>
	import { slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { MenuAlt3, X, Calendar } from '@steeze-ui/heroicons';

	import Logo from './Logo.svelte';
	import LangSwitch from './LangSwitch.svelte';
	import Separator from '$lib/Separator.svelte';
	import { navbar } from './stores';

	const pages = [
		{ name: 'passeggiate', to: '/ride' },
		{ name: 'lezioni', to: '/lessons' },
		{ name: 'bambini', to: '/' },
		{ name: 'trekking', to: '/' },
		{ name: 'campi estivi', to: '/' },
		{ name: 'allevamento', to: '/' },
		{ name: 'prezzi', to: '/' },
		{ name: 'contatti', to: '/' }
	];

	let open = false;
	let toggle;
	$: lg = toggle && window.getComputedStyle(toggle).display == 'none';
	$: lg_slide = lg ? undefined : slide;
</script>

<div class="w-full text-gray-700 z-10" class:absolute={$navbar.absolute}>
	<div
		class="p-5 m-5 flex justify-between lg:items-center lg:flex-row flex-col space-y-5 lg:space-y-0 rounded shadow-lg bg-white bg-opacity-100"
	>
		<div class="flex justify-between items-center flex-grow lg:flex-none">
			<Logo />
			<div
				class="lg:hidden cursor-pointer w-6 h-6"
				on:click={() => (open = !open)}
				bind:this={toggle}
			>
				{#if !open} <Icon src={MenuAlt3} /> {:else} <Icon src={X} />{/if}
			</div>
		</div>

		{#if open || lg}
			<nav
				class={open ? 'flex flex-col space-y-5' : 'flex lg:space-y-0 lg:space-x-10'}
				transition:lg_slide
			>
				<div
					class="flex space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0 flex-col lg:flex-row w-full lg:w-auto"
				>
					{#each pages as page}
						<a href={page.to} class="font-semibold uppercase whitespace-nowrap">{page.name}</a>
					{/each}
				</div>
				<Separator horizontal />
				<div class="w-full flex items-center justify-center space-x-2">
					<a href="events" class="w-6 h-6 cursor-pointer"><Icon src={Calendar} /></a>
					<LangSwitch />
				</div>
			</nav>
		{/if}
	</div>
</div>
