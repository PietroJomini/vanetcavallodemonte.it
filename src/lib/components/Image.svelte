<script>
	export let key;
	export let alt = key;
	export let className = '';
	export let dummy = false;
	export let bg = false;

	$: src = `/static/images/${key}`;
</script>

{#if dummy}
	<div class={`h-full w-full bg-cyan-400 ${className}`} />
{:else if bg}
	<div
		class={`w-full h-full bg-center bg-cover ${className}`}
		style={`background-image: url(${src})`}
	/>
{:else}
	<img class={`w-full h-full ${className}`} {src} {alt} />
{/if}
