<script>
	import Collapsable from '$lib/components/Collapsable.svelte';
	import PriceCard from '$lib/components/PriceCard.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { t } from '$lib/i18n';
	import Price from '$lib/components/Price.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<Hero>
	<svelte:fragment slot="title">{$t('ride.title')}</svelte:fragment>
	<svelte:fragment slot="description">
		{$t('ride.description')}
		<div
			class="font-cabin font-cabin mt-4 max-w-2xl border-b-2 border-yellow-500 text-xl font-bold text-gray-700 lg:w-min lg:whitespace-nowrap"
		>
			{$t('ride.reserve')}
		</div>
	</svelte:fragment>
	<svelte:fragment slot="image"><Image key="ride/1.jpeg" bg /></svelte:fragment>
</Hero>

<Separator horizontal dotted weight="200" width="4" pad />

<!-- TODO prices -->
<div class="mx-auto max-w-7xl p-5">
	<div class="font-cabin text-center text-4xl text-gray-800">{$t('ride.prices')}</div>

	<div class="mt-12 flex flex-col space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-4">
		<PriceCard focus>
			<svelte:fragment slot="image">
				<div class="h-80 w-full lg:block">
					<Image key="ride/2.jpeg" bg className="rounded" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="formula">
				2
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">2 </b>{$t('ride.people')}</div>
				<div>{$t('ride.perfect')} <b class="text-yellow-400">{$t('ride.beginners')}</b></div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="Passeggiate 2 ore" />
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full lg:block">
					<Image key="ride/3.jpg" bg className="rounded" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="formula">
				3
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="Passeggiate 3 ore" />
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full lg:block">
					<Image key="ride/4.jpg" bg className="rounded" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="formula">
				4
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="Passeggiate 4 ore" />
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
		<PriceCard>
			<svelte:fragment slot="image">
				<div class="hidden h-80 w-full lg:block">
					<Image key="ride/5.jpg" bg className="rounded" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="formula">
				5
				<div class="text-3xl text-gray-300">h</div>
			</svelte:fragment>
			<svelte:fragment slot="description">
				<div>{$t('ride.from')} <b class="text-gray-500">3 </b>{$t('ride.people')}</div>
			</svelte:fragment>
			<svelte:fragment slot="price">
				<Price name="Passeggiate 5 ore" />
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</svelte:fragment>
		</PriceCard>
	</div>
</div>

<Separator horizontal dotted weight="200" width="4" pad />

<div class="mx-auto mb-40 max-w-6xl divide-y divide-gray-300 p-5">
	<div class="font-cabin pb-10 text-center text-4xl text-gray-800">
		{$t('ride.faq_name')}
	</div>

	<Collapsable>
		<div class="font-cabin text-gray-800" slot="title">{$t('ride.faq.1.title')}</div>
		<div class="font-cabin px-3 pb-6 pt-0 text-gray-700" slot="content">
			{$t('ride.faq.1.content')}
		</div>
	</Collapsable>
	<Collapsable>
		<div class="font-cabin text-gray-800" slot="title">{$t('ride.faq.2.title')}</div>
		<div class="font-cabin px-3 pb-6 pt-0 text-gray-700" slot="content">
			{$t('ride.faq.2.content')}
		</div>
	</Collapsable>
</div>
