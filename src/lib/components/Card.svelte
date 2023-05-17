<script lang="ts">
import Icon from "./Icon.svelte"
import type { Name } from "./Icon"

export let icon: Name | null = null
export let title: string | null = null
</script>

<article
	class="relative max-w-md rounded-[0_32px_0_32px] border-2 border-gray py-4 pl-12 pr-4 xs:pl-16">
	{#if icon}
		<div class="absolute -left-6 -top-6 w-fit rounded-full bg-black p-4 xs:-left-4 xs:-top-4">
			<Icon name={icon} class="h-8 w-8 fill-white" />
		</div>
	{/if}
	<div class="flex h-full flex-col gap-2">
		{#if title}
			<h3>{title}</h3>
		{/if}
		<slot />
	</div>
</article>
