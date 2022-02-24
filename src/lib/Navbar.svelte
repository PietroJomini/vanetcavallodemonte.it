<script>
	import { slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { MenuAlt3, X, Calendar } from '@steeze-ui/heroicons';

	import Logo from './Logo.svelte';
	import LangSwitch from './LangSwitch.svelte';
	import Separator from '$lib/Separator.svelte';
	import { navbar } from './stores';
	import Link from './Link.svelte';

	const pages = [
		{ name: 'passeggiate', to: `ride` },
		{ name: 'lezioni', to: `lessons` },
		{ name: 'bambini', to: `childs` },
		{ name: 'trekking', to: `trekking` },
		{ name: 'campi estivi', to: `camps` },
		{ name: 'allevamento', to: `farm` },
		{ name: 'prezzi', to: `prices` },
		{ name: 'contatti', to: `contacts` }
	];

	let open = false;
	let toggle;
	$: lg = toggle && window.getComputedStyle(toggle).display == 'none';
	$: lg_slide = lg ? undefined : slide;
</script>

<div class="z-10 w-full text-gray-700" class:absolute={$navbar.absolute}>
	<div
		class="m-5 flex flex-col justify-between space-y-5 rounded bg-white bg-opacity-100 p-5 shadow-lg lg:flex-row lg:items-center lg:space-y-0"
	>
		<div class="flex flex-grow items-center justify-between lg:flex-none">
			<Logo />
			<div
				class="h-6 w-6 cursor-pointer lg:hidden"
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
					class="flex w-full flex-col space-y-4 p-4 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-4 lg:p-0"
				>
					{#each pages as page}
						<Link to={page.to}>
							<span class="whitespace-nowrap font-semibold uppercase">{page.name}</span>
						</Link>
					{/each}
				</div>
				<Separator horizontal />
				<div class="flex w-full items-center justify-center space-x-2">
					<Link to="events"><div class="h-6 w-6 cursor-pointer"><Icon src={Calendar} /></div></Link>
					<LangSwitch />
				</div>
			</nav>
		{/if}
	</div>
</div>
