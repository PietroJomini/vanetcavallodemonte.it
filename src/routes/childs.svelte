<script>
	import Card from '$lib/Card.svelte';
	import Hero from '$lib/Hero.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('childs.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('childs.description')}
		<div
			class="text-4xl text-gray-600 flex justify-center items-baseline pt-4 whitespace-nowrap lg:w-min mt-8 border-2 rounded-lg p-4 border-green-400"
		>
			30 <div class="text-3xl text-gray-300">€ /{$t('childs.person')}</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="p-10 pt-0 w-full">
	<Card>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.3.content')}</svelte:fragment>
	</Card>
</div>
