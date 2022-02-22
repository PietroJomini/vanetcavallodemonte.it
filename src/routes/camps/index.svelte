<script>
	import Hero from '$lib/Hero.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('camps.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('camps.description')}
		<div class="mt-4 flex w-full justify-center space-x-8 p-4">
			<a href="/camps/6-11" class="font-cabin text-xl underline">6-11 {$t('camps.years')}</a>
			<a href="/camps/12-17" class="font-cabin text-xl underline">12-17 {$t('camps.years')}</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="h-full w-full bg-green-200" /></svelte:fragment>
</Hero>
