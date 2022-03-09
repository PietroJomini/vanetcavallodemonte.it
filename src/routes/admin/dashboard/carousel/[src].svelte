<script>
	import { goto } from '$app/navigation';
	import Trash from '$lib/components/admin/icons/Trash.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Confirm from '$lib/components/admin/input/Confirm.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';
	import Card from '$lib/components/admin/Card.svelte';
	import { page } from '$app/stores';
	import Image from '$lib/components/Image.svelte';

	let modal = false;
	const del = async () => {
		await fetch('/api/images', {
			method: 'DELETE',
			body: JSON.stringify({ src: $page.params.src })
		});

		goto('/admin/dashboard/carousel');
	};
</script>

<Card>
	<div slot="title">{$page.params.src}</div>
	<div slot="actions" class="flex">
		<X on:click={() => goto('/admin/dashboard/carousel')} />
		<Trash on:click={() => (modal = true)} />
		<Modal bind:show={modal}>
			<Confirm yes="SI" no="NO" on:yes={del} on:no={() => (modal = false)} />
		</Modal>
	</div>
	<div slot="content">
		<Image key={`carousel/${$page.params.src}`} />
	</div>
</Card>
