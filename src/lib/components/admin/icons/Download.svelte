<script>
	import { Download } from '@steeze-ui/heroicons';
	import Icon from './Icon.svelte';

	export let disabled;
</script>

<Icon on:click src={Download} className="hover:text-emerald-500" {disabled} />
