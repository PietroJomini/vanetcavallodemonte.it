<script>
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let rows = [];
	export let head = {};

	// sortable
	export let sortable = false;
	let swap_target;
	let last_left;

	const dispatch = createEventDispatcher();
	const parent = (node) => (node.nodeName === 'TR' ? node : parent(node.parentNode));

	const drag_events = {
		start: (event) => {},
		over: (event) => (swap_target = new Number(parent(event.target).dataset.index)),
		leave: (event) => (last_left = new Number(parent(event.target).dataset.index)),
		end: (event) => {
			const source = new Number(event.target.dataset.index);
			if (source === swap_target) return;

			const pivot = rows.splice(source, 1);
			rows = [...rows.slice(0, swap_target), pivot[0], ...rows.slice(swap_target)];

			dispatch('sort', { source, target: swap_target, rows });
		}
	};
</script>

<table class="whitespace-no-wrap w-full table-auto border-collapse">
	<thead>
		<tr class="text-left">
			{#each head as item}
				<th class="sticky top-0 border-b p-1 text-sm font-bold uppercase text-gray-700">
					{item}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row, index}
			<tr
				class="group"
				class:cursor-pointer={row.to}
				on:click={() => (row.click ? row.click() : row.to && goto(row.to))}
				data-index={index}
				draggable={sortable}
				on:dragstart={drag_events.start}
				on:dragover={drag_events.over}
				on:dragleave={drag_events.leave}
				on:dragend={drag_events.end}
			>
				{#each row.items as item}
					<td
						class="border-t border-gray-200 p-1 py-2 text-gray-500 group-hover:text-gray-700"
						class:select-none={sortable}
					>
						{#if item?.type === 'component'}
							<svelte:component this={item.component} {...item?.props || {}} />
						{:else if item}
							{@html item}
						{/if}
					</td>
				{/each}
				{#if row.actions}
					<td
						class="flex justify-end space-x-1 border-t border-gray-200 text-gray-500 group-hover:text-gray-700"
					>
						{#each row.actions as action}
							<svelte:component
								this={action.component}
								on:click={action?.event}
								{...action?.props || {}}
							/>
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
