<script>
	import Collapsable from '$lib/Collapsable.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';

	const tree = [
		{
			title: 'prices.ride.title',
			items: [
				{ name: 'prices.ride.2', price: 30, to: '/ride' },
				{ name: 'prices.ride.3', price: 45, to: '/ride' },
				{ name: 'prices.ride.4', price: 55, to: '/ride' },
				{ name: 'prices.ride.5', price: 65, to: '/ride' }
			]
		},
		{
			title: 'prices.lessons.title',
			items: [
				{ name: 'prices.lessons.1', price: 20, to: '/lessons' },
				{ name: 'prices.lessons.5', price: 90, to: '/lessons' },
				{ name: 'prices.lessons.10', price: 160, to: '/lessons' }
			]
		},
		{
			title: 'prices.camps.title',
			items: [
				{ name: 'prices.camps.6_11', price: 400, to: '/camps/6-11' },
				{ name: 'prices.camps.12_17', price: 400, to: '/camps/12-17' }
			]
		},
		{
			title: 'prices.childs.title',
			items: [{ name: 'prices.childs.1', price: 30, to: '/childs' }]
		}
	];
</script>

<div class="text-6xl text-center w-full font-cabin pt-20 text-gray-700">{$t('prices.title')}</div>

<div class="w-full p-10 mt-10 text-gray-700">
	<div class="max-w-6xl mx-auto font-cabin">
		{#each tree as section}
			<Collapsable className="bg-white rounded shadow-md my-4">
				<div slot="title" class="text-gray-800 font-cabin text-2xl uppercase">
					{$t(section.title)}
				</div>
				<div slot="content">
					<div class="py-4 px-4 md:px-10">
						{#each section.items as item}
							<a href={item.to} class="flex items-center py-2 z-10">
								<div class="font-cabin">{$t(item.name)}</div>
								<Separator horizontal grow dotted className="mx-10 translate-y-[2px]" width="4" />
								<div class="font-cabin flex">
									{item.price}
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
