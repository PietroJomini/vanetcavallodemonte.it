<script>
	import { Check } from '@steeze-ui/heroicons';
	import Icon from './Icon.svelte';

	export let disabled;
</script>

<Icon on:click src={Check} className="hover:text-emerald-500" {disabled} />
