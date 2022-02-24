<script>
	import { Plus } from '@steeze-ui/heroicons';

	import { Icon } from '@steeze-ui/svelte-icon';
	import Card from '$lib/admin/Card.svelte';
	import Table from '$lib/admin/Table.svelte';

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
</script>

<Card>
	<div slot="title">Eventi</div>
	<div
		slot="actions"
		class="m-1 h-8 w-8 cursor-pointer rounded border p-1 text-gray-400 transition hover:text-emerald-500"
	>
		<a href="/admin/dashboard/events/new"><Icon src={Plus} /></a>
	</div>
	<div slot="content">
		<Table
			head={['Titolo', 'Descrizione', 'Inizio', 'Fine']}
			rows={events.map((event, i) => ({
				items: [
					event.title,
					event.description,
					event.start.toLocaleDateString('it-IT'),
					event.end.toLocaleDateString('it-IT')
				],
				to: '/admin/dashboard/events/edit'
			}))}
		/>
	</div>
</Card>
