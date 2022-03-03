<script>
	import { t } from '$lib/i18n';
	import { onMount, onDestroy } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	import { navbar } from '$lib/stores.js';
	import Separator from '$lib/components/Separator.svelte';
	import Card from '$lib/components/Card.svelte';
	import Image from '$lib/components/Image.svelte';

	import { carousel } from '/static/images/map.json';

	onMount(() => navbar.update((v) => ({ ...v, absolute: true })));
	onDestroy(() => navbar.update((v) => ({ ...v, absolute: false })));
</script>

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
	{#each carousel as src}
		<SplideSlide>
			<div class="h-screen w-screen"><Image bg key={`carousel/${src}`} /></div>
		</SplideSlide>
	{/each}
</Splide>

<div class="mx-auto max-w-6xl p-10 pt-20 text-center">
	<div class="font-cabin mt-2 p-4 text-4xl text-gray-600">{$t('home.title.1')}</div>
	<Separator vertical weight="400" width="2" className="h-20 mx-auto my-4" />
	<div class="font-cabin mb-4 text-7xl text-gray-800">{$t('home.title.2')}</div>
	<div class="font-cabin mx-auto max-w-4xl text-gray-700">{$t('home.title.3')}</div>
</div>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="w-full p-10 pt-0">
	<Card>
		<svelte:fragment slot="image">
			<Image dummy />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('home.cards.1.title')}</svelte:fragment>
		<svelte:fragment slot="content">
			{$t('home.cards.1.content')}
			<a
				class="mt-3 block cursor-pointer text-sm font-bold italic underline"
				href="/{$t('home.cards.1.page')}">{$t('home.discover')} ></a
			>
		</svelte:fragment>
	</Card>
	<Card flip>
		<svelte:fragment slot="image">
			<Image dummy />
		</svelte:fragment>
		<svelte:fragment slot="title">{$t('home.cards.2.title')}</svelte:fragment>
		<svelte:fragment slot="content">
			{$t('home.cards.2.content')}
			<a
				class="mt-3 block cursor-pointer text-sm font-bold italic underline"
				href="/{$t('home.cards.2.page')}">{$t('home.discover')} ></a
			>
		</svelte:fragment>
	</Card>
</div>
