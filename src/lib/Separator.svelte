<script>
    export let vertical = false
    export let horizontal = false

    if (vertical && horizontal) horizontal = false
</script>

<div class="border-l border-t border-gray-300" class:w-0={vertical} class:h-0={horizontal}></div>
