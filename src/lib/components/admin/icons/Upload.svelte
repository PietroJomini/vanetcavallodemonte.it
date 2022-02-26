<script>
	import { Upload } from '@steeze-ui/heroicons';
	import Icon from './Icon.svelte';

	export let disabled;
</script>

<Icon on:click src={Upload} className="hover:text-emerald-500" {disabled} />
