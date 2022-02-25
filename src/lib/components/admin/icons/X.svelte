<script>
	import { X } from '@steeze-ui/heroicons';
	import Icon from './Icon.svelte';

	export let disabled;
</script>

<Icon on:click src={X} className="hover:text-red-500" {disabled} />
