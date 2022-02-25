<script>
	import { Trash } from '@steeze-ui/heroicons';
	import Icon from './Icon.svelte';

	export let disabled;
</script>

<Icon on:click src={Trash} className="hover:text-red-500" {disabled} />
