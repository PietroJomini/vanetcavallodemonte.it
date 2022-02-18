<script>
    import feather from "feather-icons"
    
    export let name
    export let strokeWidth = false
    export let stroke = false

    $: icon = feather.icons[name]
    $: if (icon) {
        if (stroke) icon.attrs["stroke"] = stroke
        if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth
    }
</script>

{#if icon}
  <svg {...icon.attrs} class="w-full h-full">
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}
