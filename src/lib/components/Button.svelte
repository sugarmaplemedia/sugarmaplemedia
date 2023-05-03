<script lang="ts">
import Icon from "./Icon.svelte"
import type { Name } from "./Icon";

// TODO: Add ability to override href with function
export let href = "#"
export let icon: Name|null = null
</script>

<a 
    {href}
    class="
        px-4 lg:px-6 py-3 lg:py-4 w-fit
        flex gap-2 items-center
        bg-black
        text-xs lg:text-sm text-white uppercase tracking-wider font-semibold
        fill-white">
    {#if icon}
    <Icon name={icon} />
    {/if}
    <span>
        <slot>Button Text</slot>
    </span>
</a>