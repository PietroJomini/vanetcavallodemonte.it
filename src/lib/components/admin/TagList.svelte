<script>
	export let tags;

	const load = async (tag) => {
		const res = await fetch(`/api/events/tags?id=${tag}`);
		const body = await res.json();
		return body.tags[0];
	};

	let full_tags = Promise.all(tags.map((tag) => load(tag)));
</script>

{#await full_tags}
	<div class="text-gray-400 italic text-sm">Loading...</div>
{:then tags}
	<div class="flex flex-wrap space-x-1">
		{#each tags as tag}
			<div class="border-b-2 px-1" style={`border-color: ${tag.accent};`}>
				{tag.name}
			</div>
		{/each}
	</div>
{/await}
