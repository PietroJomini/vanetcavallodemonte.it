<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { LocationMarker, Phone, Mail } from '@steeze-ui/heroicons';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';
	import { t } from '$lib/translations';
</script>

<div class="lg:h-screen flex flex-col">
	<div class="w-full flex-grow lg:flex flex-col p-5 lg:p-10 lg:flex-row max-w-7xl mx-auto">
		<div class="lg:w-2/3 h-full hidden lg:block">
			<div class="h-full w-full bg-green-300" />
		</div>

		<div class="lg:w-1/3 lg:-translate-x-10 lg:flex lg:items-center">
			<div class="bg-white shadow-lg p-10 flex flex-col space-y-4 rounded">
				<div class="text-2xl text-center pb-12 w-full text-gray-700 font-cabin rounded">
					{$t('contacts.find_us')}
				</div>
				<a
					href="https://www.google.com/maps/place/Vanet+Cavallo/@44.3294175,7.2787295,741m/data=!3m1!1e3!4m5!3m4!1s0x12cd1010cc9bb6d9:0x20c9d91025c918af!8m2!3d44.3294173!4d7.2804675"
					target="_blank"
					class="flex space-x-4"
				>
					<div class="h-6 w-6 text-gray-600"><Icon src={LocationMarker} /></div>
					<div class="text-gray-700">Loc. Perosa Vanet 1</div>
				</a>
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
</div>
