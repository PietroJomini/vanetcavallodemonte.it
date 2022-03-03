<script>
	export let key;
	export let alt;

	$: src = `/static/images/${key}`;

	export let dummy = false;
	export let bg = false;
</script>

{#if dummy}
	<div class="h-full w-full bg-cyan-400" />
{:else if bg}
	<div class="w-full h-full bg-center bg-cover" style={`background-image: url(${src})`} />
{:else}
	<img {src} {alt} />
{/if}
