<script>
	import Card from '$lib/components/Card.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Price from '$lib/components/Price.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import { t } from '$lib/i18n';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('childs.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('childs.description')}
		<div
			class="mt-8 flex items-baseline justify-center whitespace-nowrap rounded-lg border-2 border-green-400 p-4 pt-4 text-4xl text-gray-600 lg:w-min"
		>
			<Price name="Avvicinamenti" />
			<div class="text-3xl text-gray-300">€ /{$t('childs.person')}</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-10 pt-0">
	<Card>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('childs.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('childs.cards.3.content')}</svelte:fragment>
	</Card>
</div>
