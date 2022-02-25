<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const res = await fetch('/api/events/tags');
		const { tags } = await res.json();
		return { props: { tags } };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Card from '$lib/components/admin/Card.svelte';
	import X from '$lib/components/admin/icons/X.svelte';
	import Check from '$lib/components/admin/icons/Check.svelte';
	import Text from '$lib/components/admin/input/Text.svelte';
	import Textarea from '$lib/components/admin/input/Textarea.svelte';
	import Tags from '$lib/components/admin/input/Tags.svelte';
	import DatePicker from '$lib/components/admin/input/DatePicker.svelte';

	let title;
	let description;
	let start;
	let end;
	let link;
	let selected_tags;

	export let tags;
	let error = false;

	const submit = async () => {
		if (title && start) {
			await fetch('/api/events', {
				method: 'POST',
				body: JSON.stringify({ title, description, start, end, link, tags: selected_tags })
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
			<Text name="Titolo" required error={error && !title} bind:value={title} />
			<Textarea name="Descrizione" bind:value={description} />
			<div class="flex space-x-3">
				<DatePicker
					className="w-1/2"
					name="Inizio"
					required
					error={error && !start}
					bind:value={start}
				/>
				<DatePicker className="w-1/2" name="Fine" bind:value={end} />
			</div>
			<Text name="Link" bind:value={link} />
			<Tags name="Tags" options={tags} bind:value={selected_tags} />
		</div>
	</div>
</Card>
