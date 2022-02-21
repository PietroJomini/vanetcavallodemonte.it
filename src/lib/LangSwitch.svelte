<script>
	import OutClick from 'svelte-outclick'
    import { Icon } from '@steeze-ui/svelte-icon'
    import { GlobeAlt } from '@steeze-ui/heroicons'

    let langs = ['Italiano', 'English', 'Français']
    let open = false
</script>

<div class="static" on:click="{ _ => open = !open }">
    <OutClick on:outclick="{ _ => open = false }">
        <div class="cursor-pointer h-6 w-6"><Icon src={GlobeAlt} /></div>

        {#if open}
            <div class="absolute w-full lg:w-48 right-0 top-full px-5">
                <div class="bg-white w-full rounded shadow-lg p-2 flex flex-col -mt-4 lg:-mt-4">
                    {#each langs as lang}
                    <a href="/" class="p-2 text-xs uppercase font-semibold  text-gray-700">{lang}</a>
                    {/each}
                </div>
            </div>
        {/if}

    </OutClick>
</div>
