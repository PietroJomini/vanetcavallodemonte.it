<script>
	import { goto } from '$app/navigation';

	export let rows = [];
	export let head = {};
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
		{#each rows as row}
			<tr class="group" class:cursor-pointer={row.to} on:click={() => row.to && goto(row.to)}>
				{#each row.items as item}
					<td class="border-t border-gray-200 p-1 py-2 text-gray-500 group-hover:text-gray-700">
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
