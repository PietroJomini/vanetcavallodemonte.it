<script>
	export let src;
	export let alt;

	export let dummy = false;
</script>

{#if dummy}
	<div class="h-full w-full bg-cyan-400" />
{:else}
	<img {src} {alt} />
{/if}
