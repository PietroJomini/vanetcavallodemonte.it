<script context="module">
	export { load } from '$lib/auth';
</script>

<script>
	import Navbar from '$lib/admin/Navbar.svelte';
	import { Calendar } from '@steeze-ui/heroicons';

	const tabs = [
		{
			key: 'events',
			name: 'Eventi',
			to: '/admin/dashboard/events',
			color: 'text-cyan-500',
			icon: Calendar
		}
	];
</script>

<div class="flex h-screen w-screen">
	<Navbar {tabs} />
	<div class="h-full flex-grow p-3">
		<div class="relative h-full w-full overflow-auto rounded bg-gray-200 p-3">
			<slot />
		</div>
	</div>
</div>
