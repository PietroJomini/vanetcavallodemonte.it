<script>
	import Spinner from './Spinner.svelte';

	export let endpoint;

	const load = async () => {
		if (!endpoint) return;

		const response = await fetch(endpoint);
		const body = await response.json();
		return body;
	};
</script>

<div class="flex flex-col divide-y rounded bg-white p-3 shadow">
	<div class="flex items-center justify-between">
		<div class="text-2xl text-gray-700"><slot name="title" /></div>
		<slot name="actions"><div class="m-1 h-8 w-8" /></slot>
	</div>
	<div class="pt-3">
		{#await load()}
			<Spinner />
		{:then response}
			<slot name="content" {response} />
		{/await}
	</div>
</div>
