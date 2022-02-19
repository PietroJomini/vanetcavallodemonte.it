<script>
    import { slide } from 'svelte/transition'

    import Logo from './Logo.svelte'
    import LangSwitch from './LangSwitch.svelte'
    import Icon from './Icon.svelte'

    const pages = ['passeggiate','lezioni','bambini','trekking','campi estivi','allevamento','prezzi','contatti']

    let open = false
    let toggle
    $: lg = toggle && window.getComputedStyle(toggle).display == 'none'
    $: lg_slide = lg ? undefined : slide
</script>

<div class="w-full text-gray-700 absolute">
    <div class="p-5 m-5 flex justify-between lg:items-center lg:flex-row flex-col space-y-5 lg:space-y-0 rounded shadow-lg bg-white bg-opacity-100">
        <div class="flex justify-between items-center flex-grow lg:flex-none">
            <Logo></Logo>
            <div class="lg:hidden cursor-pointer w-6 h-6" on:click="{ () => open = !open }" bind:this={toggle}>
                {#if !open } <Icon name="menu" /> {:else} <Icon name="x" />{/if}
            </div>
        </div>

        {#if open || lg}
            <nav class={open ? 'flex flex-col space-y-5' : 'flex lg:space-y-0 lg:space-x-10'} transition:lg_slide>
                <div class="flex space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0 flex-col lg:flex-row w-full lg:w-auto">
                    {#each pages as page} <a href="/" class="font-semibold uppercase whitespace-nowrap">{page}</a> {/each}
                </div>
                <div class="w-full border-t lg:border-t-0 border-gray-300 flex items-center justify-center pt-5 lg:pt-0 space-x-2">
                    <div class="w-6 h-6 cursor-pointer"><Icon name="calendar" /></div>
                    <LangSwitch />
                </div>
            </nav>
        {/if}

    </div>
</div>
