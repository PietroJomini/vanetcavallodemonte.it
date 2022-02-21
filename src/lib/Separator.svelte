<script>
    export let vertical = false
    export let horizontal = false
    export let dotted = false
    export let className = ''
    export let weight = 300
    export let width = 1

    if (vertical && horizontal) horizontal = false
    let border = `border-${vertical ? 'r' : 't'}`
    if (width > 1) border += `-${width}`
</script>

<div 
    class={`border-gray-${weight} ` + className + ` ${border}`} 
    class:w-0={vertical}
    class:h-0={horizontal}
    class:border-dotted={dotted}
>
</div>
