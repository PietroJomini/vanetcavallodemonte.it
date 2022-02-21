<script>
	import { t } from '$lib/translations';
	import { onMount, onDestroy } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	import { navbar } from '$lib/stores.js';
	import Separator from '$lib/Separator.svelte';
	import Card from '$lib/Card.svelte';

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
	<Card>
		<svelte:fragment slot="image">
			<div class="w-full h-full bg-green-200" />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('home.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">
			{$t('home.cards.1.content')}
			<a
				class="block text-sm underline font-bold italic mt-3 cursor-pointer"
				href="/{$t('home.cards.1.page')}">{$t('home.discover')} ></a
			>
		</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image">
			<div class="w-full h-full bg-green-200" />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('home.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">
			{$t('home.cards.2.content')}
			<a
				class="block text-sm underline font-bold italic mt-3 cursor-pointer"
				href="/{$t('home.cards.2.page')}">{$t('home.discover')} ></a
			>
		</svelte:fragment>
	</Card>
</div>
