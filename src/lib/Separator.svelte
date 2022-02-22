<script>
	export let vertical = false;
	export let horizontal = false;
	export let dotted = false;
	export let weight = 300;
	export let width = 1;
	export let className = '';
	export let pad = false;
	export let grow = false;

	if (vertical && horizontal) horizontal = false;
</script>

<div class={pad ? 'p-10 lg:py-20 max-w-6xl mx-auto' : ''} class:flex-grow={grow}>
	<div
		class={className}
		class:w-0={vertical}
		class:h-0={horizontal}
		class:border-dotted={dotted}
		class:border-gray-100={weight == 100}
		class:border-gray-200={weight == 200}
		class:border-gray-300={weight == 300}
		class:border-gray-400={weight == 400}
		class:border-gray-500={weight == 500}
		class:border-gray-600={weight == 600}
		class:border-gray-700={weight == 700}
		class:border-gray-800={weight == 800}
		class:border-gray-900={weight == 900}
		class:border-t={horizontal && width == 1}
		class:border-t-2={horizontal && width == 2}
		class:border-t-4={horizontal && width == 4}
		class:border-r={vertical && width == 1}
		class:border-r-2={vertical && width == 2}
		class:border-r-4={vertical && width == 4}
	/>
</div>
