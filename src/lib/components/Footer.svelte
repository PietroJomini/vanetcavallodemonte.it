<script>
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import { Mail, Phone } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Separator from './Separator.svelte';
</script>

<!-- 
    copiryght
    socials
    github
    
 -->

<div class="mt-10 w-full px-10">
	<Separator horizontal />
	<div class="flex w-full flex-col items-center space-y-4 p-10">
		<div class="flex space-x-3">
			<a href="https://www.instagram.com/vanetcavallo/" target="_blank" class="h-6 w-6">
				<Instagram />
			</a>
			<a
				href="https://www.facebook.com/centroequestrevanet.cavallo/"
				target="_blank"
				class="h-6 w-6"
			>
				<Facebook />
			</a>
		</div>
		<div class="flex flex-wrap items-center justify-center space-x-3">
			<a href="tel:+39-324-786-7610" class="flex space-x-1">
				<div class="text-gray-700">+39 324 786 7610</div>
			</a>
			<a href="mailto:info@vanetcavallo.it" class="flex space-x-1">
				<div class="text-gray-700">info@vanetcavallodemonte.it</div>
			</a>
		</div>
	</div>
	<Separator horizontal />
	<div class="flex w-full flex-row flex-wrap items-center justify-center space-x-10 p-3">
		<span class="text-sm text-gray-400">© 2022 Vanet Cavallo. All rights reserverd.</span>
	</div>
</div>
