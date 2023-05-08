<script lang="ts">
import Icon from "./Icon.svelte"
import type { Name } from "./Icon";

// TODO: Add ability to override href with function
export let href: string|null = null
export let target: string|null = null
export let icon: Name|null = null
export let darkMode = false
</script>

{#if href}
<a 
    {href}
    {target}
    class="
        px-4 lg:px-6 py-3 lg:py-4 w-fit
        flex gap-2 items-center
        {!darkMode ? 'bg-black' : 'bg-white'}
        text-xs lg:text-sm {!darkMode ? 'text-white' : 'text-black'} uppercase tracking-wider font-semibold
        {!darkMode ? 'fill-white' : 'fill-black'}">
    {#if icon}
    <Icon name={icon} />
    {/if}
    <span>
        <slot>Button Text</slot>
    </span>
</a>
{:else}
<button 
    class="
        px-4 lg:px-6 py-3 lg:py-4 w-fit
        flex gap-2 items-center
        {!darkMode ? 'bg-black' : 'bg-white'}
        text-xs lg:text-sm {!darkMode ? 'text-white' : 'text-black'} uppercase tracking-wider font-semibold
        {!darkMode ? 'fill-white' : 'fill-black'}">
    {#if icon}
    <Icon name={icon} />
    {/if}
    <span>
        <slot>Button Text</slot>
    </span>
</button>
{/if}