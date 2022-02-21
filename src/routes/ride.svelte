<script>
	import Collapsable from '$lib/Collapsable.svelte';
	import PriceCard from '$lib/PriceCard.svelte';
	import Separator from '$lib/Separator.svelte';
	import Hero from '$lib/Hero.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('ride.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('ride.description')}
		<div
			class="max-w-2xl mt-4 lg:w-min lg:whitespace-nowrap font-cabin text-gray-700 font-bold font-cabin border-b-2 text-xl border-yellow-500"
		>
			{$t('ride.reserve')}
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
</Hero>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<!-- TODO prices -->
<div class="p-5 max-w-7xl mx-auto">
	<div class="text-4xl font-cabin text-gray-800 text-center">{$t('ride.prices')}</div>

	<div class="mt-12 p-4 flex flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-4">
		<PriceCard focus>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				2
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">2 </b>{$t('ride.people')}</div>
				<div>{$t('ride.perfect')} <b class="text-yellow-400">{$t('ride.beginners')}</b></div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				30
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				3
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				45
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				4
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				55
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				5
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				65
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
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
