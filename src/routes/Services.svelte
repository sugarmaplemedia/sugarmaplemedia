<script lang="ts">
import Section from "$lib/components/section/Section.svelte"
import Card from "$lib/components/Card.svelte"
import Icon from "$lib/components/Icon.svelte"
import Button from "$lib/components/Button.svelte"

import type { Name as IconName } from "$lib/components/Icon"

type Service = {
	title: string
	description: string
	icon: IconName
	buttonText: string
}

let services: Service[] = [
	{
		title: "Web Development",
		description:
			"Our bread and butter. We develop websites for clients of all sizes and requests. Want something custom? We're excited to build it. Want something you can manage it yourself? We'll put it together and walk you through it.",
		icon: "brackets",
		buttonText: "Let's do it"
	},
	{
		title: "Web Design",
		description:
			"We design websites for clients looking for a special match for their special brand. We'll make sure you walk away with a website that is uniquely yours.",
		icon: "desktop",
		buttonText: "I want this"
	},
	{
		title: "Graphic Design",
		description:
			"Logos. Marketing materials. Collateral. There's a lot to cover, and we can handle it all. When you need some visual, we will give you something visionary.",
		icon: "brush",
		buttonText: "I'm interested"
	},
	{
		title: "Content Creation",
		description:
			"Exciting videos. Social media posts that pop. Writing that engages. We take it all seriously in the name of bringing out our your brand's greatest potential.",
		icon: "image",
		buttonText: "Yes please"
	}
]
</script>

<Section id="services">
	<svelte:fragment slot="header">Services</svelte:fragment>

	{#each services as service}
		<Card icon={service.icon} title={service.title}>
			<p class="mb-2 grow">{service.description}</p>
			<!-- <Button>{service.buttonText}</Button> -->
		</Card>
	{/each}

	<svelte:fragment slot="footer">
		<p class="max-w-[21rem] text-center text-sm text-gray">
			Ready to see how we can help? Reach out today to explore the possibilities (and get a
			free quote).
		</p>
		<Button href="#footer" icon="chatbubbles">Talk with us</Button>
	</svelte:fragment>
</Section>
