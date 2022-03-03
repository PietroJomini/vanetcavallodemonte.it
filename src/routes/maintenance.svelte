<script context="module">
	import config from '$lib/config/config.json';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		if (!config.find(({ key }) => key === 'maintenance').value)
			return { status: 301, redirect: '/' };

		return {};
	};
</script>

<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Phone, Mail } from '@steeze-ui/heroicons';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';
</script>

<div class="flex h-screen w-screen items-center justify-center bg-slate-50">
	<div class="flex flex-col items-center space-y-10 rounded-xl bg-slate-50 md:bg-white md:p-20">
		<div class="font-serif text-6xl">Vanet Cavallo</div>
		<div class="flex flex-col items-center p-10 text-center">
			<div class="text-xl text-gray-500">Il nostro sito è in fase di rinnovamento</div>
			<div class="textl-2xl text-gray-900">Nel frattempo puoi trovarci tramite:</div>
		</div>
		<div class="flex flex-col space-y-4">
			<a href="tel:+39-324-786-7610" class="flex space-x-4">
				<div class="h-6 w-6 text-gray-600"><Icon src={Phone} /></div>
				<div class="text-gray-700">+39 324 786 7610</div>
			</a>
			<a href="mailto:info@vanetcavallo.it" class="flex space-x-4">
				<div class="h-6 w-6 text-gray-600"><Icon src={Mail} /></div>
				<div class="text-gray-700">info@vanetcavallodemonte.it</div>
			</a>
			<a href="https://www.instagram.com/vanetcavallo/" target="_blank" class="flex space-x-4">
				<div class="h-6 w-6 text-gray-600"><Instagram /></div>
				<div class="text-gray-700">@vanetcavallo</div>
			</a>
			<a
				href="https://www.facebook.com/centroequestrevanet.cavallo/"
				target="_blank"
				class="flex space-x-4"
			>
				<div class="h-6 w-6 text-gray-600"><Facebook /></div>
				<div class="text-gray-700">vanetcavallo</div>
			</a>
			<a
				href="https://api.whatsapp.com/send?phone=3247867610"
				target="_blank"
				class="flex space-x-4"
			>
				<div class="h-6 w-6 text-gray-600"><Whatsapp /></div>
				<div class="text-gray-700">+39 324 786 7610</div>
			</a>
		</div>
	</div>
</div>
