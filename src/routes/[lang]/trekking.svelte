<script>
	import Card from '$lib/components/Card.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('trekking.title')}</svelte:fragment>
	<svelte:fragment slot="description">{$t('trekking.description')}</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-10 pt-0">
	<Card>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('trekking.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('trekking.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
		<svelte:fragment slot="title">{$t('trekking.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('trekking.cards.2.content')}</svelte:fragment>
	</Card>
</div>
