<script>
	import Hero from '$lib/Hero.svelte';
	import { t, locale } from '$lib/translations';
	import Link from '$lib/Link.svelte';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('camps.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('camps.description')}
		<div class="mt-4 flex w-full justify-center space-x-8 p-4">
			<Link to="camps/6-11">
				<span class="font-cabin text-xl underline">6-11 {$t('camps.years')}</span>
			</Link>
			<Link to="camps/12-17">
				<span class="font-cabin text-xl underline">12-17 {$t('camps.years')}</span>
			</Link>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>
