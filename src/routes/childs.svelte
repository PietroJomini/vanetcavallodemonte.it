<script>
	import Card from '$lib/Card.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<div class="w-full p-5 pt-0 flex flex-col h-screen">
	<div class="flex-grow flex lg:flex-row flex-col">
		<div class="lg:w-2/3 w-full lg:p-20 flex flex-col justify-center py-10 lg:pb-40">
			<div class="text-5xl font-cabin pt-10 text-gray-800">{$t('childs.title')}</div>
			<div class="max-w-2xl mt-4 font-cabin text-gray-700">{$t('childs.description')}</div>
			<div
				class="text-4xl text-gray-600 flex justify-center items-baseline pt-4 whitespace-nowrap lg:w-min mt-8 border-2 rounded-lg p-4 border-green-400"
			>
				30 <div class="text-3xl text-gray-300">€ /{$t('childs.person')}</div>
			</div>
		</div>
		<div class="lg:w-1/2 w-full h-full bg-green-200" />
	</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

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
