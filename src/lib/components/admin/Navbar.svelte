<script>
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let tabs;

	$: name = $page.url.pathname.match(/\/admin\/dashboard\/([^\/]*)\/?.*/)?.[1];
	$: selected = tabs.find((tab) => tab.key === name);
</script>

<div class="flex h-screen w-52 shrink-0 flex-col justify-between p-3 pr-0">
	<div class="flex w-full flex-col">
		<a
			href="/admin/dashboard"
			class="w-full cursor-pointer pt-12  pb-4 text-2xl font-bold uppercase text-gray-600 transition"
		>
			Admin Dashboard
		</a>
		{#each tabs as tab}
			<div
				class={`mt-0 w-full cursor-pointer py-1 px-3 font-bold transition ${
					tab.name === selected?.name ? tab.color : 'text-gray-500'
				}`}
			>
				<a href={tab.to} class="flex items-center">
					<div
						class={`mr-3 h-5 w-5 transition ${
							tab.name === selected?.name ? tab.color : 'text-gray-400'
						}`}
					>
						<Icon src={tab.icon} />
					</div>
					{tab.name}
				</a>
			</div>
		{/each}
	</div>
	<a
		href="/api/auth/logout"
		class="w-full rounded bg-gray-100 p-2 text-center text-gray-500 transition hover:bg-gray-200 hover:text-red-500 hover:shadow focus:outline-none"
	>
		Logout
	</a>
</div>
