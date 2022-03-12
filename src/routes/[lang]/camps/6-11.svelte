<script>
	import Card from '$lib/components/Card.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
	import Price from '$lib/components/Price.svelte';
	import Link from '$lib/components/Link.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('camps.a6_11.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('camps.a6_11.description')}
		<div
			class="mt-8 flex flex-col whitespace-nowrap rounded-lg border-2 border-green-400 p-4 pt-4 text-gray-600 lg:w-min"
		>
			<div class="flex items-baseline whitespace-nowrap text-4xl text-gray-600">
				<Price name="Campi 6-11" />
				<div class="text-3xl text-gray-300">€ /{$t('camps.persons')}</div>
			</div>
			<Link to={`/events?s=["Campi 6-11"]`}>
				<div class="mt-2 font-bold italic underline">{$t('camps.a6_11.dates')}</div>
			</Link>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><Image key="camps/6-11/1.jpg" bg /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-10 pt-0">
	<Card>
		<svelte:fragment slot="image"><Image key="camps/6-11/cards/1.jpg" bg /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a6_11.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a6_11.cards.1.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><Image key="camps/6-11/cards/2.jpg" bg /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a6_11.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a6_11.cards.2.content')}</svelte:fragment>
	</Card>
	<Card>
		<svelte:fragment slot="image"><Image key="camps/6-11/cards/3.jpg" bg /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a6_11.cards.3.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a6_11.cards.3.content')}</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image"><Image key="camps/6-11/cards/4.jpg" bg /></svelte:fragment>
		<svelte:fragment slot="title">{$t('camps.a6_11.cards.4.title')}</svelte:fragment>
		<svelte:fragment slot="content">{$t('camps.a6_11.cards.4.content')}</svelte:fragment>
	</Card>
</div>
