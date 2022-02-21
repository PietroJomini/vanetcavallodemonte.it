<script>
	import Card from '$lib/Card.svelte';
	import PriceCard from '$lib/PriceCard.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<div class="w-full p-5 pt-0 flex flex-col h-screen">
	<div class="flex-grow flex lg:flex-row flex-col">
		<div class="lg:w-2/3 w-full lg:p-20 flex flex-col justify-center py-10 lg:pb-40">
			<div class="text-5xl font-cabin pt-10 text-gray-800">{$t('lessons.title')}</div>
			<div class="max-w-2xl mt-4 font-cabin text-gray-700">{$t('lessons.description')}</div>
		</div>
		<div class="lg:w-1/2 w-full h-full bg-green-200" />
	</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<div class="p-5 max-w-7xl mx-auto">
	<div class="text-4xl font-cabin text-gray-800 text-center">{$t('lessons.prices')}</div>
	<div
		class="mt-12 p-4 flex flex-col lg:flex-row lg:space-y-0 space-y-4 lg:space-x-4 justify-center"
	>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				20 <div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>

		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				5 x 1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				90 <div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>

		<PriceCard>
			<svelte:fragment slot="image">
				<div class="bg-green-200 w-full h-80 hidden lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				10 x 1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				180 <div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>
	</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<div class="p-10 pt-0 w-full">
	<Card>
		<svelte:fragment slot="image">
			<div class="w-full h-full bg-green-200" />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image">
			<div class="w-full h-full bg-green-200" />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image">
			<div class="w-full h-full bg-green-200" />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.3.content')}</svelte:fragment>
	</Card>
</div>
