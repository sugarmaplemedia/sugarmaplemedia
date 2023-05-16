<script lang="ts">
import Header from "$lib/components/section/Header.svelte";
import Icon from "$lib/components/Icon.svelte";
import Button from "$lib/components/Button.svelte";

import type { Name as IconName } from "$lib/components/Icon";

type Service = {
    title: string,
    description: string,
    icon: IconName,
    buttonText: string,
}

let services: Service[] = [
    {
        title: "Web Development",
        description: "Our bread and butter. We develop websites for clients of all sizes and requests. Want something custom? We're excited to build it. Want something you can manage it yourself? We'll put it together and walk you through it.",
        icon: "brackets",
        buttonText: "Let's do it"
    },
    {
        title: "Web Design",
        description: "We design websites for clients looking for a special match for their special brand. We'll make sure you walk away with a website that is uniquely yours.",
        icon: "desktop",
        buttonText: "I want this"
    },
    {
        title: "Graphic Design",
        description: "Logos. Marketing materials. Collateral. There's a lot to cover, and we can handle it all. When you need some visual, we will give you something visionary.",
        icon: "brush",
        buttonText: "I'm interested"
    },
    {
        title: "Content Creation",
        description: "Exciting videos. Social media posts that pop. Writing that engages. We take it all seriously in the name of bringing out our your brand's greatest potential.",
        icon: "image",
        buttonText: "Yes please"
    }
]
</script>

<section id="services" class="px-4 xs:px-6 flex flex-col items-center gap-8 scroll-m-8 sm:scroll-m-24">
    <Header>Services</Header> 
    <main class="max-w-4xl pl-4 xs:pl-0 flex flex-col md:grid md:grid-cols-2 items-center md:items-stretch gap-8">
        <!-- Model object -->
        {#each services as service}
        <article class="max-w-md pl-12 xs:pl-16 pr-4 py-4 relative border-2 border-gray rounded-[0_32px_0_32px]">
            <div class="w-fit p-4 absolute -left-6 xs:-left-4 -top-6 xs:-top-4 bg-black rounded-full">
                <Icon name={service.icon} class="w-8 h-8 fill-white"/>
            </div>
            <div class="h-full flex flex-col gap-2">
                <h3>{service.title}</h3>
                <p class="mb-2 grow">{service.description}</p>
                <!-- <Button>{service.buttonText}</Button> -->
            </div>
        </article>
        {/each}
    </main>
    <footer class="flex flex-col items-center gap-4">
        <p class="max-w-[21rem] text-center text-sm text-gray">Ready to see how we can help? Reach out today to explore the possibilities (and get a free quote).</p>
        <Button href="#footer" icon="chatbubbles">Talk with us</Button>
    </footer>
</section>