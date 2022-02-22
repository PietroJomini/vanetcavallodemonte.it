<script>
	import { slide, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let types = [
		{ key: 'bear', selected: true, accent: 'text-teal-500' },
		{ key: 'lacking', selected: false, accent: 'text-slate-500' },
		{ key: 'secretary', selected: false, accent: 'text-amber-500' },
		{ key: 'medical', selected: false, accent: 'text-lime-500' },
		{ key: 'language', selected: true, accent: 'text-emerald-500' },
		{ key: 'haunt', selected: true, accent: 'text-cyan-500' },
		{ key: 'feeling', selected: false, accent: 'text-indigo-500' },
		{ key: 'red', selected: true, accent: 'text-pink-500' },
		{ key: 'greasy', selected: false, accent: 'text-rose-500' },
		{ key: 'jaded', selected: true, accent: 'text-sky-500' },
		{ key: 'berry', selected: false, accent: 'text-cyan-400' },
		{ key: 'mist', selected: false, accent: 'text-red-500' }
	];

	$: selected = types.filter((type) => type.selected);

	const getRandomTypes = () => {
		let n = Math.floor(Math.random() * 4);
		let t = [];
		while (t.length < n) t.push(types[Math.floor(Math.random() * types.length)]);
		return t;
	};

	const events = [
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date('24 Feb 2022'),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso con un nome esageratamente lunghissimissimo',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet mauris ut sodales ornare. Quisque viverra scelerisque est nec dictum. Vivamus a tellus eget leo aliquet sodales vel eget purus. Aliquam a erat odio. Maecenas mauris sapien, lobortis et leo et, condimentum ultricies dui. Fusce tempor tincidunt lacus, venenatis vulputate neque volutpat et. Nullam id eros a nibh eleifend fermentum ut nec augue. Praesent mattis ex vitae erat interdum dictum. ',
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		},
		{
			title: 'Evento a caso',
			description: "Descrizione dell'evento",
			start: new Date(),
			end: new Date(),
			types: ['hey', 'x-22'],
			link: ''
		}
	].map((e, i) => ({ ...e, title: e.title + ` ${i}`, types: getRandomTypes() }));

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
					on:click={() => (types = types.map((type) => ({ ...type, selected: false })))}
				>
					Resetta il filtro
				</span>
			{/if}
		</div>
		<div
			class="mt-12 flex w-full flex-row flex-wrap justify-center lg:mt-0 lg:w-1/3 lg:justify-end"
		>
			{#each types as type}
				<div
					class={`mx-2 cursor-pointer rounded px-2 ${
						type.selected ? type.accent : 'text-gray-400'
					}`}
					on:click={() => (type.selected = !type.selected)}
				>
					#{type.key}
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-10 w-full select-none p-5 text-center text-sm text-gray-400">
		{#if selected.length === 0}
			Mostra tutti gli eventi
		{:else}
			Mostra gli eventi di tipo {@html selected
				.map((type) => `<span class="text-gray-800">${type.key}</span>`)
				.join(' o ')}
		{/if}
	</div>

	{#each selected.length === 0 ? events : events.filter( (event) => event.types.some((type) => types.filter(({ key }) => key === type.key)[0].selected) ) as event (event.title)}
		<div
			class="m-2 flex h-96 items-end rounded-xl bg-emerald-200 p-2 shadow-md"
			transition:fade={{ duration: 100 }}
			animate:flip={{ duration: 200 }}
		>
			<div class="flex aspect-square w-72 flex-col items-center rounded-xl bg-white p-2">
				<span class="font-cabin mt-6 mb-2 text-center text-2xl">{event.title}</span>
				<div class="p-2 text-sm text-gray-400">
					{formatDate(event.start)}
					{#if event.end.getTime() !== event.start.getTime()} - {formatDate(event.end)}{/if}
				</div>
				<div
					class={`flex flex-grow items-end overflow-hidden p-2 text-gray-700 text-center ${
						event.types.length === 0 ? 'line-clamp-6' : 'line-clamp-5'
					} `}
				>
					{event.description || ''}
				</div>
				<div class="flex flex-wrap items-center p-2">
					{#each event.types as type}
						<div class={`mx-1 rounded text-gray-400`}>
							#{type.key}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
