<script>
	import Collapsable from '$lib/Collapsable.svelte';
	import PriceCard from '$lib/PriceCard.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<div class="w-full p-5 pt-0 flex flex-col h-screen">
	<div class="flex-grow flex lg:flex-row flex-col">
		<div class="lg:w-2/3 w-full lg:p-20 flex flex-col justify-center py-10 lg:pb-40">
			<div class="text-5xl font-cabin pt-10 text-gray-800">{$t('ride.title')}</div>
			<div class="max-w-2xl mt-4 font-cabin text-gray-700">{$t('ride.description')}</div>
			<div
				class="max-w-2xl mt-4 lg:w-min lg:whitespace-nowrap font-cabin text-gray-700 font-bold font-cabin border-b-2 text-xl border-yellow-500"
			>
				{$t('ride.reserve')}
			</div>
		</div>
		<div class="lg:w-1/2 w-full h-full bg-green-200" />
	</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<!-- TODO prices -->
<div class="p-5 max-w-7xl mx-auto">
	<div class="text-4xl font-cabin text-gray-800 text-center">{$t('ride.prices')}</div>

	<div class="mt-12 p-4 flex flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-4">
		<PriceCard min_partecipants="2" lenght="2" price="30" focus />
		<PriceCard min_partecipants="3" lenght="3" price="45" />
		<PriceCard min_partecipants="3" lenght="4" price="55" />
		<PriceCard min_partecipants="3" lenght="5" price="65" />
	</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<div class="p-5 max-w-6xl mx-auto divide-y divide-gray-200 mb-40">
	<div class="text-4xl font-cabin pb-10 text-gray-800 text-center">
		{$t('ride.faq_name')}
	</div>

	<Collapsable>
		<svelte:fragment slot="title">{$t('ride.faq.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('ride.faq.1.content')}</svelte:fragment>
	</Collapsable>

	<Collapsable>
		<svelte:fragment slot="title">{$t('ride.faq.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('ride.faq.2.content')}</svelte:fragment>
	</Collapsable>
</div>
