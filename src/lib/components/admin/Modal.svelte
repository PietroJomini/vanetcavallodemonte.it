<script>
	export let show = false;
</script>

{#if show}
	<div
		class="absolute top-0 left-0 z-10 h-full w-full bg-gray-500 opacity-50"
		on:click={() => (show = false)}
	/>
	<div
		class="pointer-events-none absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center"
	>
		<div class="pointer-events-auto">
			<slot />
		</div>
	</div>
{/if}
