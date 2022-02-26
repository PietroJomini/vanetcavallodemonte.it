<script>
	import Card from '$lib/components/Card.svelte';
	import PriceCard from '$lib/components/PriceCard.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
	import Price from '$lib/components/Price.svelte';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('lessons.title')}</svelte:fragment>
	<svelte:fragment slot="description">{$t('lessons.description')}</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="mx-auto max-w-7xl p-5">
	<div class="font-cabin text-center text-4xl text-gray-800">{$t('lessons.prices')}</div>
	<div
		class="mt-12 flex flex-col justify-center space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-4"
	>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full bg-green-200 lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="1 lezione" />
				<div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>

		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full bg-green-200 lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				5 x 1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="5 lezioni" />
				<div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>

		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full bg-green-200 lg:block" />
			</svelte:fragment>
			<svelte:fragment slot="formula">
				10 x 1 <div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="10 lezioni" />
				<div class="text-3xl text-gray-300">€ /{$t('lessons.person')}</div>
			</svelte:fragment>
		</PriceCard>
	</div>
</div>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-10 pt-0">
	<Card>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('lessons.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('lessons.cards.3.content')}</svelte:fragment>
	</Card>
</div>
