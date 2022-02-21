<script>
	import Hero from '$lib/Hero.svelte';
	import { t } from '$lib/translations';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('camps.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('camps.description')}
		<div class="w-full flex mt-4 p-4 space-x-8 justify-center">
			<a href="/camps/6-11" class="text-xl font-cabin underline">6-11 {$t('camps.years')}</a>
			<a href="/camps/12-17" class="text-xl font-cabin underline">12-17 {$t('camps.years')}</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><div class="w-full h-full bg-green-200" /></svelte:fragment>
</Hero>
