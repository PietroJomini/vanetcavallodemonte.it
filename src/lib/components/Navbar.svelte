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
	import colors from '$lib/colors';

	const pages = [
		{ enabled: true, to: `ride`, key: `navbar.ride` },
		{ enabled: false, to: `lessons`, key: `navbar.lessons` },
		{ enabled: false, to: `childs`, key: `navbar.childs` },
		{ enabled: false, to: `trekking`, key: `navbar.trekking` },
		{ enabled: true, to: `camps`, key: `navbar.camps` },
		{ enabled: false, to: `farm`, key: `navbar.farm` },
		{ enabled: true, to: `prices`, key: `navbar.prices` },
		{ enabled: true, to: `contacts`, key: `navbar.contacts` }
	];

	let open = false;
</script>

<div class="z-10 w-full text-gray-700" class:absolute={$navbar.absolute}>
	<div
		class="m-5 flex flex-col justify-between space-y-5 rounded bg-white bg-opacity-100 p-5 shadow-lg lg:flex-row lg:items-center lg:space-y-0"
		transtion:slide
	>
		<div class="flex flex-grow items-center justify-between lg:flex-none">
			<Link pre={() => (open = false)}><Logo /></Link>
			<div class="h-6 w-6 cursor-pointer lg:hidden" on:click={() => (open = !open)}>
				{#if !open} <Icon src={MenuAlt3} /> {:else} <Icon src={X} />{/if}
			</div>
		</div>

		<nav class="hidden flex-row space-y-0 space-x-10 lg:flex">
			<div class="flex w-auto flex-row space-y-0 space-x-4 p-0">
				{#each pages.filter((page) => page.enabled) as page}
					<Link to={page.to}>
						<span
							class={`whitespace-nowrap font-semibold uppercase ${
								colors[page.to].text_hover
							} transition`}
						>
							{$t(page.key)}
						</span>
					</Link>
				{/each}
			</div>
			<div class="relative flex w-full items-center justify-center space-x-2 text-left">
				<Link to="events"
					><div class={`h-6 w-6 cursor-pointer transition ${colors.events.text_hover}`}>
						<Icon src={Calendar} />
					</div></Link
				>
				<LangSwitch />
			</div>
		</nav>

		{#if open}
			<nav class="flex flex-col space-y-5 transition-all" transition:slide>
				<div class="flex w-full flex-col space-y-4 p-4">
					{#each pages.filter((page) => page.enabled) as page}
						<Link to={page.to} pre={() => (open = false)}>
							<span class={`whitespace-nowrap font-semibold uppercase hover:${page.hover}`}>
								{$t(page.key)}
							</span>
						</Link>
					{/each}
				</div>
				<Separator horizontal />
				<div class="relative flex w-full items-center justify-center space-x-2 text-center">
					<Link to="events" pre={() => (open = false)}
						><div class="h-6 w-6 cursor-pointer"><Icon src={Calendar} /></div></Link
					>
					<LangSwitch />
				</div>
			</nav>
		{/if}
	</div>
</div>
