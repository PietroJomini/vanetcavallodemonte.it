<script>
	import { slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { MenuAlt3, X, Calendar } from '@steeze-ui/heroicons';

	import Logo from './Logo.svelte';
	import LangSwitch from './LangSwitch.svelte';
	import Separator from './Separator.svelte';
	import { navbar } from '$lib/stores';
	import Link from './Link.svelte';
	import { t } from '$lib/i18n';

	const pages = [
		{ to: `ride`, key: `navbar.ride` },
		{ to: `lessons`, key: `navbar.lessons` },
		{ to: `childs`, key: `navbar.childs` },
		{ to: `trekking`, key: `navbar.trekking` },
		{ to: `camps`, key: `navbar.camps` },
		{ to: `farm`, key: `navbar.farm` },
		{ to: `prices`, key: `navbar.prices` },
		{ to: `contacts`, key: `navbar.contacts` }
	];

	let open = false;
</script>

<div class="z-10 w-full text-gray-700" class:absolute={$navbar.absolute}>
	<div
		class="m-5 flex flex-col justify-between space-y-5 rounded bg-white bg-opacity-100 p-5 shadow-lg lg:flex-row lg:items-center lg:space-y-0"
		transtion:slide
	>
		<div class="flex flex-grow items-center justify-between lg:flex-none">
			<Logo />
			<div class="h-6 w-6 cursor-pointer lg:hidden" on:click={() => (open = !open)}>
				{#if !open} <Icon src={MenuAlt3} /> {:else} <Icon src={X} />{/if}
			</div>
		</div>

		<nav class="hidden flex-row space-y-0 space-x-10 lg:flex">
			<div class="flex w-auto flex-row space-y-0 space-x-4 p-0">
				{#each pages as page}
					<Link to={page.to}>
						<span class="whitespace-nowrap font-semibold uppercase">{$t(page.key)}</span>
					</Link>
				{/each}
			</div>
			<div class="relative flex w-full items-center justify-center space-x-2 text-left">
				<Link to="events"><div class="h-6 w-6 cursor-pointer"><Icon src={Calendar} /></div></Link>
				<LangSwitch />
			</div>
		</nav>

		{#if open}
			<nav
				class="flex flex-col space-y-5 transition-all"
				transition:slide
				on:click={() => (open = !open)}
			>
				<div class="flex w-full flex-col space-y-4 p-4">
					{#each pages as page}
						<Link to={page.to}>
							<span class="whitespace-nowrap font-semibold uppercase">{$t(page.key)}</span>
						</Link>
					{/each}
				</div>
				<Separator horizontal />
				<div class="relative flex w-full items-center justify-center space-x-2 text-center">
					<Link to="events"><div class="h-6 w-6 cursor-pointer"><Icon src={Calendar} /></div></Link>
					<LangSwitch />
				</div>
			</nav>
		{/if}
	</div>
</div>
