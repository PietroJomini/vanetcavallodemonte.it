<script context="module">
	export { load } from '$lib/auth';
</script>

<script>
	import Navbar from '$lib/components/admin/Navbar.svelte';
	import { Calendar, CurrencyEuro, GlobeAlt } from '@steeze-ui/heroicons';

	const tabs = [
		{
			key: 'events',
			name: 'Eventi',
			to: '/admin/dashboard/events',
			color: 'text-cyan-500',
			icon: Calendar
		},
		{
			key: 'prices',
			name: 'Prezzi',
			to: '/admin/dashboard/prices',
			color: 'text-emerald-400',
			icon: CurrencyEuro
		},
		{
			key: 'i18n',
			name: 'Traduzioni',
			to: '/admin/dashboard/i18n',
			color: 'text-amber-400',
			icon: GlobeAlt
		}
	];
</script>

<div class="flex h-screen w-screen">
	<Navbar {tabs} />
	<div class="h-full flex-grow p-3">
		<div class="relative h-full w-full space-y-3 overflow-auto rounded bg-gray-200 p-3">
			<slot />
		</div>
	</div>
</div>
