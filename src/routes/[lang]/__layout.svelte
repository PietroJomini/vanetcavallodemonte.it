<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';

	onMount(() => document.querySelector('body').classList.add('bg-gray-100'));
</script>

<Navbar />
<slot />
