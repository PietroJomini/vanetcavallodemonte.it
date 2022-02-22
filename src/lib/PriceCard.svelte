<script>
	// TODO fetch price
	export let focus = false;
</script>

<div class="flex items-center text-gray-600 lg:w-1/4">
	<div
		class="w-full rounded bg-white p-3 text-center"
		class:border-yellow-400={focus}
		class:border-2={focus}
	>
		<slot name="image" />
		<div class="p-5">
			<div class="flex items-baseline justify-center border-b border-gray-300 pb-4 text-4xl">
				<slot name="formula" />
			</div>
			{#if $$slots.description}
				<div class="whitespace-nowrap py-5 text-gray-400">
					<slot name="description" />
				</div>
			{/if}
			<div
				class="flex items-baseline justify-center whitespace-nowrap border-gray-300 pt-4 text-4xl"
				class:border-t={$$slots.description}
			>
				<slot name="price" />
			</div>
		</div>
	</div>
</div>
