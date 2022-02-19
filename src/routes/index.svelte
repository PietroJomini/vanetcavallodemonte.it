<script>
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
