<script>
	import Card from '$lib/Card.svelte';
	import Separator from '$lib/Separator.svelte';
	import Hero from '$lib/Hero.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('camps.a12_17.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('camps.a12_17.description')}
		<div
			class="text-gray-600 mt-8 border-2 rounded-lg p-4 lg:w-min border-green-400 pt-4 whitespace-nowrap flex flex-col"
		>
			<div class="text-4xl text-gray-600 flex items-baseline whitespace-nowrap">
				400 <div class="text-3xl text-gray-300">€ /{$t('camps.persons')}</div>
			</div>
			<a class="mt-2 underline italic font-bold" href="?">
				{$t('camps.a12_17.dates')}
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="p-10 pt-0 w-full">
	<Card>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a12_17.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a12_17.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a12_17.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a12_17.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a12_17.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a12_17.cards.3.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a12_17.cards.4.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a12_17.cards.4.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a12_17.cards.5.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a12_17.cards.5.content')}</svelte:fragment>
	</Card>
</div>
