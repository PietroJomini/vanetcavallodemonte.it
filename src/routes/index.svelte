<script>
    import { t } from '$lib/translations' 
    import { onMount, onDestroy } from 'svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/splide.min.css';

    import { navbar } from '$lib/stores.js'

    onMount(() => navbar.update(v => ({ ...v, absolute: true })))
    onDestroy(() => navbar.update(v => ({ ...v, absolute: false })))
</script>

<!-- TODO when images https://splidejs.com/guides/options/#lazyload -->
<Splide options={{
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
}}>
    <SplideSlide><div class="w-screen h-screen bg-blue-400"></div></SplideSlide>
    <SplideSlide><div class="w-screen h-screen bg-yellow-400"></div></SplideSlide>
    <SplideSlide><div class="w-screen h-screen bg-green-400"></div></SplideSlide>
</Splide>

<div class="text-center p-10 pt-20 max-w-6xl mx-auto">
  <div class="p-4 text-4xl font-cabin mt-2 text-gray-600">{$t('home.title.1')}</div>
  <div class="w-0 border-r-2 border-gray-400 h-20 mx-auto my-4"></div>
  <div class="text-7xl mb-4 font-cabin text-gray-800">{$t('home.title.2')}</div>
  <div class="max-w-4xl mx-auto text-gray-700 font-cabin">{$t('home.title.3')}</div>
</div>