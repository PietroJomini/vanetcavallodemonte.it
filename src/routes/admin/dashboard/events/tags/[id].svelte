<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const { id } = params;

		const response = await fetch(`/api/events/tags?id=${id}`);
		const { tags } = await response.json();

		return { props: { id, tag: tags[0] } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Trash from '$lib/components/admin/icons/Trash.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Color from '$lib/components/admin/input/Color.svelte';
	import Modal from '$lib/components/admin/Modal.svelte';
	import Confirm from '$lib/components/admin/input/Confirm.svelte';

	const accents = [
		{ name: 'slate', value: '#64748B' },
		{ name: 'red', value: '#EF4444' },
		{ name: 'amber', value: '#F59E0B' },
		{ name: 'lime', value: '#84CC16' },
		{ name: 'emerald', value: '#10B981' },
		{ name: 'teal', value: '#14B8A6' },
		{ name: 'cyan', value: '#06B6D4' },
		{ name: 'sky', value: '#0EA5E9' },
		{ name: 'indigo', value: '#6366F1' },
		{ name: 'pink', value: '#EC4899' },
		{ name: 'rose', value: '#F43F5E' }
	];

	export let id;
	export let tag;

	let error = false;
	let modal = false;

	const submit = async () => {
		if (tag.name) {
			await fetch('/api/events/tags', {
				method: 'PATCH',
				body: JSON.stringify({ id, name: tag.name, accent: tag.accent })
			});
			goto('/admin/dashboard/events');
		} else {
			error = true;
		}
	};

	const del = async () => {
		await fetch('/api/events/tags', { method: 'DELETE', body: JSON.stringify({ id }) });
		goto('/admin/dashboard/events');
	};
</script>

<Card>
	<div slot="title">Modifica tag</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/events')} />
		<Trash on:click={() => (modal = true)} disabled={tag.protected} />
		<Modal bind:show={modal}>
			<Confirm yes="SI" no="NO" on:yes={del} on:no={() => (modal = false)} />
		</Modal>
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text
				name="Nome"
				required
				error={error && !tag.name}
				bind:value={tag.name}
				disabled={tag.protected}
			/>
			<Color
				colors={accents.map(({ value }) => value)}
				bind:value={tag.accent}
				required
				error={error && !tag.accent}
			/>
		</div>
	</div>
</Card>
