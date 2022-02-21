<script>
	// TODO fetch price
	export let focus = false;
</script>

<div class="lg:w-1/4 flex items-center text-gray-600">
	<div
		class="w-full bg-white rounded text-center p-3"
		class:border-yellow-400={focus}
		class:border-2={focus}
	>
		<slot name="image" />
		<div class="p-5">
			<div class="text-4xl flex justify-center items-baseline border-b border-gray-300 pb-4">
				<slot name="formula" />
			</div>
			{#if $$slots.description}
				<div class="text-gray-400 whitespace-nowrap py-5">
					<slot name="description" />
				</div>
			{/if}
			<div
				class="text-4xl flex justify-center items-baseline border-gray-300 pt-4 whitespace-nowrap"
				class:border-t={$$slots.description}
			>
				<slot name="price" />
			</div>
		</div>
	</div>
</div>
