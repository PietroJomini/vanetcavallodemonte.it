<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const events = await fetch('/api/events');
		const tags = await fetch('/api/events/tags');

		return {
			props: {
				events: (await events.json()).events,
				tags: (await tags.json()).tags.map((tag) => ({ ...tag, selected: false }))
			}
		};
	}
</script>

<script>
	import { slide, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let tags;
	$: selected = tags.filter((tag) => tag.selected);

	const getRandomTypes = () => {
		let n = Math.floor(Math.random() * 4);
		let t = [];
		while (t.length < n) t.push(tags[Math.floor(Math.random() * tags.length)]);
		return t;
	};

	export let events;
	$: events = events.map((e) => ({
		...e,
		start: new Date(e.start),
		end: e.end && new Date(e.end),
		tags: getRandomTypes()
	}));

	const months = [
		'Gen',
		'Feb',
		'Mar',
		'Apr',
		'Mag',
		'Giu',
		'Lug',
		'Ago',
		'Set',
		'Ott',
		'Nov',
		'Dic'
	];

	const formatDate = (date) => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
</script>

<div class="text-cabin mt-40 mb-10 w-full px-10 text-center text-4xl lg:text-left">
	Gli eventi di <div class="text-cabin text-6xl">Vanet Cavallo</div>
</div>

<div class="flex flex-wrap justify-center p-10 pt-0">
	<div
		class="flex w-full select-none flex-col items-center justify-between rounded bg-white p-10 shadow lg:flex-row"
	>
		<div class="flex flex-col justify-start text-center lg:text-left">
			<div class="font-cabin text-3xl text-gray-700">Seleziona il tipo di evento</div>
			{#if selected.length > 0}
				<span
					transition:slide
					class="mt-2 cursor-pointer text-sm text-gray-400 lg:mt-0"
					on:click={() => (tags = tags.map((tag) => ({ ...tag, selected: false })))}
				>
					Resetta il filtro
				</span>
			{/if}
		</div>
		<div
			class="mt-12 flex w-full flex-row flex-wrap justify-center lg:mt-0 lg:w-1/3 lg:justify-end"
		>
			{#each tags as tag}
				<div
					class="mx-2 cursor-pointer rounded px-2"
					class:text-gray-400={!tag.selected}
					style={tag.selected && `color: ${tag.accent};`}
					on:click={() => (tag.selected = !tag.selected)}
				>
					#{tag.name}
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-10 w-full select-none p-5 text-center text-sm text-gray-400">
		{#if selected.length === 0}
			Mostra tutti gli eventi
		{:else}
			Mostra gli eventi di tipo {@html selected
				.map((tag) => `<span class="text-gray-800">${tag.name}</span>`)
				.join(' o ')}
		{/if}
	</div>

	{#each selected.length === 0 ? events : events.filter( (event) => event.tags.some((tag) => tags.filter(({ name }) => name === tag.name)[0].selected) ) as event (event.title)}
		<div
			class="m-2 flex h-96 items-end rounded-xl bg-emerald-200  p-2 shadow-md"
			transition:fade={{ duration: 100 }}
			animate:flip={{ duration: 200 }}
		>
			<div class="flex aspect-square w-72 flex-col items-center rounded-xl bg-white p-2">
				<span class="font-cabin mt-6 mb-2 text-center text-2xl">{event.title}</span>
				<div class="p-2 text-sm text-gray-400">
					{formatDate(event.start)}
					{#if event.end && event.end.getTime() !== event.start.getTime()}
						- {formatDate(event.end)}{/if}
				</div>
				<div
					class={`flex flex-grow items-end overflow-hidden p-2 text-gray-700 text-center ${
						event.tags.length === 0 ? 'line-clamp-6' : 'line-clamp-5'
					} `}
				>
					{event.description || ''}
				</div>
				<div class="flex flex-wrap items-center p-2">
					{#each event.tags as tag}
						<div class={`mx-1 rounded text-gray-400`}>
							#{tag.name}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
