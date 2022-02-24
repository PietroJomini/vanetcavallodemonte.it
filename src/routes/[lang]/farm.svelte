<script>
	import Hero from '$lib/components/Hero.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('farm.title')}</svelte:fragment>
	<svelte:fragment slot="description">{$t('farm.description')}</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="flex w-full flex-col p-5 lg:h-screen">
	<div class="flex flex-grow flex-col lg:flex-row">
		<div class="order-last h-96 w-full lg:order-first lg:m-0 lg:h-full lg:w-2/3 lg:p-20 lg:pr-0">
			<div class="h-full w-full bg-green-200" />
		</div>
		<div class="w-full px-5 lg:w-1/3 lg:px-0 lg:py-10 lg:pr-20">
			<div
				class="flex h-full w-full flex-col items-center space-y-5 rounded-t bg-white p-10 shadow lg:rounded lg:py-20 lg:px-20"
			>
				<div class="font-cabin whitespace-nowrap pb-5 text-5xl text-gray-700">Ankhan O</div>
				<div class="pb-5 text-center text-xl text-gray-600">{$t('farm.ankhan.description')}</div>
				<div class="flex w-full flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.born')}</div>
					<div class="font-cabin text-4xl text-gray-800">2008</div>
				</div>
				<div class="flex w-full flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.height')}</div>
					<div class="font-cabin text-4xl text-gray-800">156cm</div>
				</div>
				<div class="flex w-full flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.father')}</div>
					<div class="font-cabin text-4xl text-gray-800">Antiss-W</div>
				</div>
				<div class="flex w-full flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.mother')}</div>
					<div class="font-cabin text-4xl text-gray-800">Dalisca</div>
				</div>
				<div class="flex w-full flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.granfather')}</div>
					<div class="font-cabin text-4xl text-gray-800">Antinor</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="mx-auto flex max-w-6xl flex-wrap justify-center">
	<div class="m-5 mt-0 h-96 w-80 bg-green-200 lg:mt-5" />
	<div class="m-5 mt-0 h-96 w-80 bg-green-200 lg:mt-5" />
	<div class="m-5 mt-0 h-96 w-80 bg-green-200 lg:mt-5" />
	<div class="m-5 mt-0 h-96 w-80 bg-green-200 lg:mt-5" />
	<div class="m-5 mt-0 h-96 w-80 bg-green-200 lg:mt-5" />
</div>
