<script>
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
	import Link from '$lib/components/Link.svelte';
	import Image from '$lib/components/Image.svelte';
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
	<svelte:fragment slot="image"><Image bg key="/camps/1.jpg" /></svelte:fragment>
</Hero>
