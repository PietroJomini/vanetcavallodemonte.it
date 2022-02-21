<script>
	import { t } from '$lib/translations';
	import { onMount, onDestroy } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	import { navbar } from '$lib/stores.js';
	import Separator from '$lib/Separator.svelte';

	onMount(() => navbar.update((v) => ({ ...v, absolute: true })));
	onDestroy(() => navbar.update((v) => ({ ...v, absolute: false })));
</script>

<!-- TODO when images https://splidejs.com/guides/options/#lazyload -->
<Splide
	options={{
		type: 'loop',
		rewind: true,
		speed: 500,
		arrows: false,
		pagination: true,
		drag: true,
		autoplay: true,
		interval: 5000,
		pauseOnHover: false,
		pauseOnFocus: false,
		keyboard: false
	}}
>
	<SplideSlide><div class="w-screen h-screen bg-blue-400" /></SplideSlide>
	<SplideSlide><div class="w-screen h-screen bg-yellow-400" /></SplideSlide>
	<SplideSlide><div class="w-screen h-screen bg-green-400" /></SplideSlide>
</Splide>

<div class="text-center p-10 pt-20 max-w-6xl mx-auto">
	<div class="p-4 text-4xl font-cabin mt-2 text-gray-600">{$t('home.title.1')}</div>
	<Separator vertical weight="400" width="2" className="h-20 mx-auto my-4" />
	<div class="text-7xl mb-4 font-cabin text-gray-800">{$t('home.title.2')}</div>
	<div class="max-w-4xl mx-auto text-gray-700 font-cabin">{$t('home.title.3')}</div>
</div>

<div class="p-10 lg:py-20 max-w-6xl mx-auto">
	<Separator horizontal dotted weight="200" width="4" />
</div>

<div class="p-10 pt-0 w-full">
	<div class="flex xl:flex-row flex-col p-4 w-full xl:max-w-7xl mx-auto group py-10">
		<div class="xl:w-1/2 h-96 bg-green-200 xl:order-first" />
		<div class="group xl:w-1/2 xl:h-96 py-10 flex items-center justify-center text-center flex-col">
			<div class="transition-all pb-3 text-3xl w-full font-cabin text-gray-800">
				{$t('home.cards.1.title')}
			</div>
			<div class="p-2 xl:w-2/3 text-gray-700">{$t('home.cards.1.content')}</div>
			<span class="text-sm underline font-bold italic mt-2 cursor-pointer"
				><a href="/{$t('home.cards.1.page')}">{$t('home.discover')} ></a>
			</span>
		</div>
	</div>

	<div class="flex xl:flex-row flex-col p-4 w-full xl:max-w-7xl mx-auto group py-10">
		<div class="xl:w-1/2 h-96 bg-green-200 xl:order-last" />
		<div class="group xl:w-1/2 xl:h-96 py-10 flex items-center justify-center text-center flex-col">
			<div class="transition-all pb-3 text-3xl w-full font-cabin text-gray-800">
				{$t('home.cards.2.title')}
			</div>
			<div class="p-2 xl:w-2/3 text-gray-700">{$t('home.cards.2.content')}</div>
			<span class="text-sm underline font-bold italic mt-2 cursor-pointer">
				<a href="/{$t('home.cards.2.page')}">{$t('home.discover')} ></a>
			</span>
		</div>
	</div>
</div>
