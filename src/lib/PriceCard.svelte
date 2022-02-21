<script>
	import { t } from './translations';

	// TODO price
	export let min_partecipants;
	export let lenght;
	export let price;
	export let focus = false;
</script>

<div class="lg:w-1/4 flex items-center text-gray-600">
	<div
		class="w-full bg-white rounded text-center p-3"
		class:border-yellow-400={focus}
		class:border-2={focus}
	>
		<div class="bg-green-200 w-full h-80 hidden lg:block" />
		<div class="p-5 space-y-1">
			<div class="text-4xl  flex justify-center items-baseline border-b border-gray-300 pb-4">
				{lenght}
				<div class="text-3xl text-gray-300">h</div>
			</div>
			<div class="text-gray-400 whitespace-nowrap py-5">
				<div>
					{$t('ride.from')} <b class="text-gray-500">{min_partecipants}</b>{$t('ride.people')}
				</div>
				{#if focus}
					<div>{$t('ride.perfect')} <b class="text-yellow-400">{$t('ride.beginners')}</b></div>
				{/if}
			</div>
			<div
				class="text-4xl flex justify-center items-baseline border-t border-gray-300 pt-4 whitespace-nowrap"
			>
				{price}
				<div class="text-3xl text-gray-300">€ /{$t('ride.person')}</div>
			</div>
		</div>
	</div>
</div>
