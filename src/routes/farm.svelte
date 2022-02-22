<script>
	import Hero from '$lib/Hero.svelte';
	import Separator from '$lib/Separator.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('farm.title')}</svelte:fragment>
	<svelte:fragment slot="description">{$t('farm.description')}</svelte:fragment>
	<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-5 flex flex-col lg:h-screen">
	<div class="flex-grow flex lg:flex-row flex-col">
		<div class="lg:w-2/3 w-full lg:h-full h-96 lg:m-0 lg:p-20 lg:pr-0 order-last lg:order-first">
			<div class="w-full h-full bg-green-200" />
		</div>
		<div class="lg:w-1/3 w-full px-5 lg:px-0 lg:pr-20 lg:py-10">
			<div
				class="w-full h-full lg:rounded rounded-t bg-white shadow flex flex-col items-center space-y-5 lg:py-20 p-10 lg:px-20"
			>
				<div class="text-5xl font-cabin pb-5 text-gray-700 whitespace-nowrap">Ankhan O</div>
				<div class="text-xl pb-5 text-gray-600 text-center">{$t('farm.ankhan.description')}</div>
				<div class="w-full flex flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.born')}</div>
					<div class="text-4xl text-gray-800 font-cabin">2008</div>
				</div>
				<div class="w-full flex flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.height')}</div>
					<div class="text-4xl text-gray-800 font-cabin">156cm</div>
				</div>
				<div class="w-full flex flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.father')}</div>
					<div class="text-4xl text-gray-800 font-cabin">Antiss-W</div>
				</div>
				<div class="w-full flex flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.mother')}</div>
					<div class="text-4xl text-gray-800 font-cabin">Dalisca</div>
				</div>
				<div class="w-full flex flex-col items-center">
					<div class="text-sm text-gray-400">{$t('farm.ankhan.granfather')}</div>
					<div class="text-4xl text-gray-800 font-cabin">Antinor</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="max-w-6xl mx-auto flex flex-wrap justify-center">
	<div class="w-80 h-96 bg-green-200 m-5 mt-0 lg:mt-5" />
	<div class="w-80 h-96 bg-green-200 m-5 mt-0 lg:mt-5" />
	<div class="w-80 h-96 bg-green-200 m-5 mt-0 lg:mt-5" />
	<div class="w-80 h-96 bg-green-200 m-5 mt-0 lg:mt-5" />
	<div class="w-80 h-96 bg-green-200 m-5 mt-0 lg:mt-5" />
</div>
