<script>
	import Collapsable from '$lib/components/Collapsable.svelte';
	import Price from '$lib/components/Price.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import { t } from '$lib/translations';

	const tree = [
		{
			title: 'prices.ride.title',
			items: [
				{ name: 'prices.ride.2', id: 'Passeggiate 2 ore', to: '/ride' },
				{ name: 'prices.ride.3', id: 'Passeggiate 3 ore', to: '/ride' },
				{ name: 'prices.ride.4', id: 'Passeggiate 4 ore', to: '/ride' },
				{ name: 'prices.ride.5', id: 'Passeggiate 5 ore', to: '/ride' }
			]
		},
		{
			title: 'prices.lessons.title',
			items: [
				{ name: 'prices.lessons.1', id: '1 lezione', to: '/lessons' },
				{ name: 'prices.lessons.5', id: '5 lezioni', to: '/lessons' },
				{ name: 'prices.lessons.10', id: '10 lezioni', to: '/lessons' }
			]
		},
		{
			title: 'prices.camps.title',
			items: [
				{ name: 'prices.camps.6_11', id: 'Campi 6-11', to: '/camps/6-11' },
				{ name: 'prices.camps.12_17', id: 'Campi 12-17', to: '/camps/12-17' }
			]
		},
		{
			title: 'prices.childs.title',
			items: [{ name: 'prices.childs.1', id: 'Avvicinamenti', to: '/childs' }]
		}
	];
</script>

<div class="font-cabin w-full pt-20 text-center text-6xl text-gray-700">{$t('prices.title')}</div>

<div class="mt-10 w-full p-10 text-gray-700">
	<div class="font-cabin mx-auto max-w-6xl">
		{#each tree as section}
			<Collapsable className="bg-white rounded shadow-md my-4">
				<div slot="title" class="font-cabin text-2xl uppercase text-gray-800">
					{$t(section.title)}
				</div>
				<div slot="content">
					<div class="py-4 px-4 md:px-10">
						{#each section.items as item}
							<a href={item.to} class="z-10 flex items-center py-2">
								<div class="font-cabin">{$t(item.name)}</div>
								<Separator horizontal grow dotted className="mx-10 translate-y-[2px]" width="4" />
								<div class="font-cabin flex">
									<Price name={item.id} />
									<div>€</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</Collapsable>
		{/each}
	</div>
</div>
