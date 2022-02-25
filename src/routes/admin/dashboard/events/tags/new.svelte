<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Color from '$lib/components/admin/input/Color.svelte';

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

	let name;
	let accent;
	let error = false;

	const submit = async () => {
		if (name && accent) {
			await fetch('/api/events/tags', {
				method: 'POST',
				body: JSON.stringify({ name, accent })
			});

			goto('/admin/dashboard/events');
		} else {
			error = true;
		}
	};
</script>

<Card>
	<div slot="title">Crea un nuovo evento</div>
	<div slot="actions" class="flex">
		<Check on:click={submit} />
		<X on:click={() => goto('/admin/dashboard/events')} />
	</div>
	<div slot="content">
		<div class="flex flex-col space-y-3">
			<Text name="Nome" required error={error && !name} bind:value={name} />
			<Color
				colors={accents.map(({ value }) => value)}
				bind:value={accent}
				required
				error={error && !accent}
			/>
		</div>
	</div>
</Card>
