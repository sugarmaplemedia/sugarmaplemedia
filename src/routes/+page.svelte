<svelte:head>
    <title>Sugar Maple Media</title>
    <meta name="description" content="Building better businesses in Marquette, MI. Sugar Maple Media is at the forefront of digital design and is here to serve your small business. Set aside maintaining your website and monitoring your social media so you can do what you do best.">
</svelte:head>

<script lang="ts">
import Button from "$lib/components/Button.svelte"
import Icon from "$lib/components/Icon.svelte";
import type { Name as IconName } from "$lib/components/Icon";
import Header from "$lib/components/section/Header.svelte";
import type { ActionData } from './$types';
import { enhance } from "$app/forms";
import { fly } from "svelte/transition";

import { page } from "$app/stores";
$: if ($page.status == 400) {
    window.scrollTo({
        behavior: 'smooth',
        top: document.getElementById("footer")!.getBoundingClientRect().top + window.scrollY - 50
    })
}

export let form: ActionData
console.log(form)


let scrollHeight: number = 0

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

let toggleLeft = false
const handleToggle = () => {
    toggleLeft = !toggleLeft
}
const setToggleLeft = (b: boolean) => {
    toggleLeft = b
}

const handleKeydown = (e: KeyboardEvent, f: () => void) => {
    if (e.key != "Tab") {
        e.preventDefault()
        f()
    }
}
</script>

<svelte:window bind:scrollY={scrollHeight} />

<!-- Menu Bar -->
<header class="h-[100dvh] sm:h-auto py-6 sm:py-24 sm:sticky z-10 -top-[25rem] xl:-top-[29rem] flex flex-col items-center sm:justify-center sm:gap-20">
    <div class="w-full max-w-lg xl:max-w-2xl px-6 grow sm:grow-0 flex flex-col gap-4 xl:gap-8 justify-center">
        <svg viewBox="0 0 280.8 41.17">
            <defs><style>.cls-1{fill:#FAFAFA;}.cls-2{fill:#0a0a0a;}</style></defs><g id="Layer_2-2"><g id="Layer_1-2"><g><g><rect class="cls-2" width="41.17" height="41.17"/><path class="cls-1" d="m8.48,18.54c.41.46,1.67,1.44,1.69,1.75s.03.7.33.69,1.2.34,1.73.41,2.71.25,3.32.16-.83.67-1.33.67-.59.36-.68.6-1.05.58-1.63.68-.82.37-.59.51.07.6.18.91-.98.86-1.45.93-.2.49.09.44.96.56,1.39.86c.43.3,1.6.08,2.18.22s.25.49.42.62,2.65-1.33,2.96-1.47.08.29.3.41.87-.53,1.65-1.02.73.37.45.94-1.85,3.24-1.61,3.38.75.57.53.98-.18.55,0,.57c.93-.07,1.85-.2,2.76-.37.73-.16,1.63-1.81,1.9-.77s1.63-1.95,1.9-2.37.3-.65.47-.93.69.2.68.41c.01.27.24.48.51.47h.02c.35,0,.64.29,1.12.79s.54-.51.57-.96.41-.49.77-.89.37-1.29.36-1.59.65-.05,1.02,0-.29-1.06-.47-1.24-.68-1.77-.59-2.39,1.15-.72,1.59-.73.49-.08.67-.37-.32-.32-.55-.35-.42-.37-.65-.79-4.55-1.45-4.77-1.61v-.13c.68-.52,1.39-.99,2.14-1.41.25-.13,4.14-2.45,4.51-2.78s1.07-1.51,1.07-2.09-.25-.29-.25-.11-.56,1.13-1.1,1.74-3.38,2.47-4.07,2.76c-.55.25-1.7,1-2.29,1.34.02-.36.06-.77.1-1.03.09-.53-.85-2.05-1.19-2.54s-1.37-2.2-1.51-2.67-.4.02-.66.37-.09,2-.89,2.28-3.23-2.7-3.5-2.81-.02.39-.23.73-1.51.05-2.25-.03-2.15-.59-2.67-.69.06.71.2.92c.18.41.3.85.32,1.3.02.42.53.73,1.02,1.15.44.32.55.93.26,1.39-.25.48-1.88.57-2.52.59s-1.26.59-1.34.87.49.08.93.1.56,0,.55.27-4.17.08-4.17.08c-1.17-.02-.16.41.25.88h.04Z"/></g><rect class="cls-2" x="46.5" y=".03" width="234.3" height="41.14"/><g><path class="cls-1" d="m66.13,19.89h-4.22c-.01-.25-.11-.48-.27-.67-.16-.19-.38-.34-.62-.44-.6-.23-1.26-.2-1.85.06-.25.1-.42.34-.41.61,0,.2.09.39.25.52.17.16.49.29.98.37l2.59.47c1.3.24,2.28.64,2.92,1.2s.96,1.31.97,2.25c.01.86-.27,1.69-.8,2.36-.58.7-1.33,1.23-2.18,1.54-1.01.38-2.07.56-3.15.54-1.95,0-3.47-.4-4.57-1.19-1.06-.72-1.73-1.88-1.84-3.16h4.55c.05.38.27.73.6.93.39.23.84.34,1.29.32.36.01.71-.06,1.04-.21.25-.1.41-.34.42-.62,0-.25-.14-.47-.36-.58-.34-.18-.71-.3-1.1-.35l-2.25-.4c-1.3-.23-2.28-.66-2.92-1.3s-.97-1.45-.97-2.46c-.03-.81.22-1.61.7-2.25.53-.65,1.23-1.14,2.03-1.4,1.01-.34,2.07-.51,3.14-.48,1.85,0,3.3.38,4.36,1.15s1.63,1.82,1.68,3.16h0Z"/><path class="cls-1" d="m76.49,22.92v-7.17h4.58v12.74h-4.34v-2.42h-.13c-.25.78-.76,1.45-1.45,1.91-1.47.89-3.31.91-4.8.07-.67-.41-1.2-.99-1.55-1.69-.38-.77-.57-1.62-.56-2.47v-8.13h4.58v7.17c0,.63.16,1.13.48,1.48.32.36.76.54,1.34.54.35,0,.69-.08.99-.25.28-.16.5-.4.64-.7.16-.34.23-.71.22-1.08h0Z"/><path class="cls-1" d="m89.53,33.54c-1.28,0-2.37-.18-3.28-.54-.82-.3-1.56-.82-2.11-1.5-.5-.62-.8-1.38-.85-2.17h4.41c.03.25.15.48.33.65.19.18.43.3.69.36.31.08.62.12.94.11.53.02,1.04-.13,1.48-.43.39-.29.58-.81.58-1.56v-2.16h-.13c-.16.43-.43.8-.76,1.1-.36.31-.78.55-1.23.69-1.36.42-2.83.27-4.09-.39-.76-.42-1.37-1.08-1.83-2-.45-.91-.69-2.11-.69-3.57s.24-2.79.72-3.75c.48-.96,1.1-1.67,1.87-2.11.73-.44,1.56-.67,2.4-.67.57-.01,1.14.1,1.66.32.45.21.86.5,1.19.87.32.35.56.75.73,1.19h.1v-2.22h4.58v12.71c0,1.07-.27,1.99-.83,2.75-.6.79-1.41,1.39-2.35,1.73-1.13.42-2.33.62-3.53.6h0Zm.16-8.47c.39,0,.78-.12,1.08-.35.32-.27.56-.62.7-1.01.18-.51.26-1.05.25-1.59.01-.55-.07-1.1-.25-1.63-.13-.4-.37-.76-.7-1.04-.31-.24-.69-.37-1.08-.36-.39-.01-.77.12-1.08.36-.32.27-.55.64-.67,1.04-.17.52-.25,1.07-.23,1.63-.01.55.07,1.09.23,1.61.12.39.36.74.68,1,.31.23.69.35,1.06.34h0Z"/><path class="cls-1" d="m102.1,28.69c-.73.01-1.47-.12-2.15-.4-.6-.25-1.11-.68-1.47-1.22-.36-.55-.53-1.24-.53-2.09-.01-.62.1-1.23.36-1.78.23-.48.57-.9.99-1.21.45-.33.95-.57,1.49-.72.6-.17,1.21-.28,1.84-.32.58-.04,1.15-.11,1.72-.21.34-.04.66-.16.95-.34.19-.14.3-.36.29-.58v-.03c.01-.3-.13-.59-.38-.76-.29-.19-.63-.28-.98-.27-.38-.01-.75.08-1.06.29-.28.21-.47.53-.49.88h-4.21c.05-.77.31-1.51.74-2.15.49-.69,1.15-1.24,1.93-1.58.84-.4,1.91-.6,3.17-.6.83,0,1.66.1,2.46.32.67.19,1.29.49,1.85.89.48.35.89.8,1.17,1.32.27.51.4,1.07.4,1.65v8.73h-4.28v-1.79h-.1c-.23.45-.54.84-.93,1.15-.36.3-.78.51-1.23.64-.49.14-1.01.2-1.53.19h0Zm1.5-2.89c.34,0,.67-.08.98-.21.3-.14.56-.35.75-.62.2-.29.3-.64.29-.99v-1.06c-.12.05-.25.1-.38.14s-.28.08-.43.12-.31.08-.48.11-.34.06-.53.09c-.3.04-.6.13-.86.27-.21.1-.38.26-.49.45-.11.19-.16.39-.16.6-.01.32.12.62.37.82.28.2.62.3.96.29h0Z"/><path class="cls-1" d="m112.37,28.49v-12.74h4.45v2.42h.13c.23-.9.6-1.55,1.11-1.97.5-.41,1.13-.63,1.78-.62.2,0,.4.01.6.05.19.03.38.08.57.13v3.91c-.27-.09-.56-.14-.84-.17-.28-.03-.57-.05-.86-.05-.42,0-.84.1-1.21.3-.36.2-.64.49-.84.84-.21.39-.32.83-.31,1.28v6.63h-4.58,0Z"/><path class="cls-1" d="m122.49,28.49v-12.74h4.34v2.42h.13c.24-.76.72-1.43,1.37-1.89,1.39-.93,3.22-.93,4.6.01.62.45,1.05,1.12,1.17,1.88h.13c.21-.78.7-1.45,1.38-1.88.73-.48,1.6-.73,2.47-.71,1.22,0,2.22.39,2.98,1.18s1.14,1.83,1.14,3.14v8.6h-4.58v-7.43c0-.56-.14-.99-.43-1.32-.29-.32-.71-.5-1.14-.48-.43-.02-.84.16-1.12.48-.27.32-.41.75-.41,1.32v7.43h-4.38v-7.43c0-.56-.14-.99-.43-1.32-.29-.32-.71-.5-1.14-.48-.28,0-.56.07-.8.22-.23.15-.42.36-.53.62-.13.3-.2.63-.19.97v7.43h-4.59.02Z"/><path class="cls-1" d="m148.01,28.69c-.74.01-1.47-.12-2.15-.4-.6-.25-1.11-.68-1.46-1.22-.36-.55-.53-1.24-.53-2.09-.01-.62.1-1.23.36-1.78.23-.48.57-.9,1-1.21.45-.33.95-.57,1.49-.72.6-.17,1.21-.28,1.84-.32.58-.04,1.15-.1,1.72-.21.34-.05.66-.16.94-.34.19-.14.3-.36.29-.58v-.03c.01-.3-.13-.59-.38-.76-.29-.19-.63-.28-.98-.27-.38-.01-.75.08-1.06.29-.28.21-.47.53-.49.88h-4.21c.05-.77.31-1.51.74-2.15.49-.69,1.15-1.24,1.93-1.58.84-.4,1.9-.6,3.17-.6.83,0,1.66.1,2.46.32.67.19,1.29.49,1.85.89.49.35.89.8,1.17,1.32.27.51.4,1.07.4,1.65v8.73h-4.28v-1.79h-.1c-.23.45-.54.84-.93,1.15-.36.3-.78.51-1.23.64-.49.14-1.01.2-1.52.19h0Zm1.5-2.89c.34,0,.67-.07.98-.21.3-.14.56-.35.75-.62.2-.29.3-.64.29-.99v-1.06c-.12.05-.25.1-.38.14s-.28.08-.43.12-.32.08-.48.11-.34.06-.53.09c-.3.04-.6.13-.86.27-.21.1-.38.26-.5.45-.11.19-.16.39-.16.6-.01.32.12.62.37.82.27.2.61.3.95.29h0Z"/><path class="cls-1" d="m158.27,33.27V15.75h4.55v2.22h.1c.17-.44.42-.84.73-1.19.34-.37.74-.67,1.2-.86.52-.23,1.09-.34,1.66-.32.84,0,1.67.23,2.4.67.76.45,1.38,1.15,1.86,2.11.48.96.71,2.21.72,3.75,0,1.48-.23,2.69-.69,3.66-.45.97-1.06,1.69-1.83,2.15-.75.47-1.62.72-2.5.71-.55,0-1.09-.09-1.6-.3-.45-.19-.86-.46-1.19-.8-.32-.34-.58-.73-.76-1.16h-.07v6.87h-4.58,0Zm4.49-11.13c-.01.55.07,1.09.25,1.61.13.4.38.77.7,1.04.64.49,1.52.49,2.15,0,.32-.27.56-.64.68-1.04.17-.52.25-1.07.23-1.62.01-.55-.07-1.1-.23-1.63-.12-.4-.36-.76-.68-1.04-.3-.25-.69-.37-1.08-.36-.39,0-.78.12-1.08.36-.32.27-.57.63-.7,1.04-.17.52-.25,1.08-.25,1.63h0Z"/><path class="cls-1" d="m177.98,11.5v16.99h-4.58V11.5h4.58Z"/><path class="cls-1" d="m186.41,28.72c-1.36,0-2.53-.26-3.51-.78-.97-.51-1.76-1.29-2.26-2.25-.53-.98-.8-2.16-.8-3.54s.27-2.46.8-3.45c.51-.97,1.3-1.76,2.25-2.3.97-.55,2.11-.82,3.43-.82.89,0,1.78.14,2.61.46.75.28,1.43.72,2,1.29.57.59,1,1.29,1.28,2.07.31.88.46,1.8.45,2.74v1.06h-11.38v-2.52h7.17c0-.34-.1-.68-.28-.97-.18-.28-.43-.5-.72-.65-.32-.16-.67-.24-1.02-.23-.36,0-.71.08-1.02.23-.3.14-.56.37-.74.64-.19.29-.29.62-.3.97v2.73c0,.38.08.75.26,1.1.17.32.43.58.74.75.36.19.75.29,1.16.27.3,0,.59-.04.86-.13.25-.08.48-.21.68-.38.19-.16.33-.38.41-.61h4.19c-.12.84-.48,1.64-1.02,2.31-.57.67-1.3,1.19-2.13,1.51-.99.38-2.04.56-3.09.54v-.03Z"/><path class="cls-1" d="m197,28.75c-.62,0-1.21-.23-1.65-.67-.45-.43-.69-1.03-.67-1.65-.01-.61.23-1.2.67-1.62.9-.9,2.36-.9,3.26,0,.45.42.71,1,.71,1.62,0,.42-.12.82-.34,1.17-.21.34-.5.63-.85.84-.34.21-.73.32-1.14.31h0Z"/><path class="cls-1" d="m201.81,28.49v-12.74h4.34v2.42h.13c.24-.76.71-1.43,1.36-1.89,1.39-.93,3.22-.93,4.6.01.63.44,1.06,1.12,1.17,1.88h.13c.21-.78.7-1.45,1.38-1.88.73-.48,1.6-.73,2.48-.71,1.22,0,2.21.39,2.98,1.18.76.79,1.15,1.83,1.14,3.14v8.6h-4.58v-7.43c0-.56-.14-.99-.43-1.32-.29-.32-.71-.5-1.14-.48-.43-.02-.84.16-1.12.48-.27.32-.41.75-.41,1.32v7.43h-4.38v-7.43c0-.56-.14-.99-.43-1.32-.29-.32-.71-.5-1.14-.48-.29,0-.57.07-.82.22-.23.15-.42.36-.53.62-.13.3-.2.63-.19.97v7.43h-4.58.03Z"/><path class="cls-1" d="m229.89,28.72c-1.36,0-2.53-.26-3.51-.78-.97-.51-1.76-1.29-2.26-2.25-.53-.98-.8-2.16-.8-3.54s.27-2.46.8-3.45c.51-.97,1.3-1.76,2.25-2.3.97-.55,2.11-.82,3.42-.82.89,0,1.78.14,2.61.46.75.28,1.43.72,2,1.29.57.59,1,1.29,1.28,2.07.31.88.47,1.8.45,2.74v1.06h-11.38v-2.52h7.17c0-.34-.1-.68-.28-.97-.18-.27-.43-.5-.72-.65-.32-.16-.67-.24-1.02-.23-.36,0-.71.08-1.02.23-.3.14-.56.37-.74.64-.19.29-.29.62-.3.97v2.73c0,.38.08.75.26,1.1.16.32.43.58.74.75.36.19.75.29,1.16.27.3,0,.59-.04.86-.13.25-.08.48-.21.67-.38.19-.16.33-.38.41-.61h4.19c-.12.84-.48,1.64-1.02,2.31-.57.67-1.3,1.19-2.13,1.51-.99.38-2.04.56-3.09.54v-.03Z"/><path class="cls-1" d="m242.6,28.66c-.89,0-1.76-.24-2.5-.71-.76-.47-1.37-1.2-1.83-2.17s-.69-2.19-.69-3.66.24-2.79.72-3.75c.48-.96,1.1-1.67,1.86-2.11.73-.44,1.56-.67,2.4-.67.57-.01,1.14.1,1.66.32.45.21.86.5,1.19.87.32.35.56.75.73,1.19h.07v-6.46h4.58v16.99h-4.55v-2.09h-.1c-.18.43-.43.82-.75,1.16-.34.34-.75.62-1.19.8-.51.21-1.05.3-1.6.3h0Zm1.69-3.53c.39,0,.78-.12,1.08-.37.32-.28.56-.64.7-1.04.18-.51.26-1.06.25-1.61.01-.55-.07-1.1-.25-1.63-.13-.4-.37-.76-.7-1.04-.31-.24-.69-.37-1.08-.36-.39-.01-.77.12-1.08.36-.32.27-.56.63-.68,1.04-.17.52-.25,1.07-.23,1.63-.01.55.07,1.1.24,1.63.12.4.36.76.68,1.04.3.24.68.37,1.07.36h0Z"/><path class="cls-1" d="m253.06,28.49v-12.74h4.58v12.74h-4.58Zm2.29-14.06c-.59.01-1.17-.21-1.59-.61-.82-.73-.89-1.98-.16-2.79.05-.05.1-.11.16-.16.91-.82,2.28-.82,3.19,0,.82.73.89,1.99.15,2.81-.05.05-.1.1-.15.15-.43.4-1.01.62-1.6.61Z"/><path class="cls-1" d="m263.51,28.69c-.74.01-1.47-.12-2.15-.4-.6-.25-1.11-.68-1.46-1.22-.36-.55-.53-1.24-.53-2.09-.01-.62.1-1.23.36-1.78.23-.48.57-.9,1-1.21.45-.33.95-.57,1.49-.72.6-.17,1.21-.28,1.84-.32.58-.04,1.15-.1,1.72-.21.34-.05.65-.16.93-.34.19-.14.3-.36.29-.58v-.03c.01-.3-.13-.59-.38-.76-.29-.19-.63-.28-.98-.27-.38-.01-.75.08-1.06.29-.28.21-.46.53-.49.88h-4.22c.05-.77.31-1.51.74-2.15.49-.69,1.15-1.24,1.93-1.58.84-.4,1.9-.6,3.17-.6.83,0,1.66.1,2.46.32.67.19,1.29.49,1.85.89.48.35.88.8,1.17,1.32.27.51.4,1.07.4,1.65v8.73h-4.28v-1.79h-.1c-.23.45-.54.84-.93,1.15-.36.3-.78.51-1.23.64-.49.14-1.01.2-1.52.19h0Zm1.5-2.89c.34,0,.67-.07.98-.21.3-.14.56-.35.75-.62.2-.29.3-.64.29-.99v-1.06c-.12.05-.25.1-.38.14s-.28.08-.43.12-.32.08-.48.11-.34.06-.53.09c-.3.04-.6.13-.86.27-.21.1-.38.26-.49.45-.11.18-.16.39-.16.6-.01.32.12.62.37.82.27.2.61.3.95.29h0Z"/></g></g></g></g>
        </svg>
        <p class="xl:max-w-md">
            We are here to serve your small business with digital development that sticks. Keep reading to see how we're building better businesses in Marquette, MI.
        </p>
        <Button href="#contact" icon="chatbubbles">Reach out</Button>
    </div>
    <!-- Continue (Mobile Only) -->
    <!-- TODO: Add touch event to scroll to first #anchor -->
    <a href="#services" class="
            fixed bottom-8
            flex sm:hidden flex-col items-center
            transition-all duration-75
            {scrollHeight < 75 ? 'opacity-100' : 'opacity-0 translate-y-2 pointer-events-none'}">
        <span class="text-sm text-gray uppercase">Continue</span>
        <span class="inline-block -translate-y-2 -rotate-45 text-gray">&angrt;</span>
    </a>
    <!-- Nav Menu -->
    <nav class="w-2/3 lg:w-3/4 hidden sm:flex flex-col items-center bg-white">
        <menu class="
                flex
                text-gray font-bold uppercase">
            <li class="hover:translate-y-0.5 hover:scale-[0.98] transition-all"><a class="block px-4 lg:px-6 pt-8 pb-4 select-none" href="#top">Home</a></li>
            <li class="hover:translate-y-0.5 hover:scale-[0.98] transition-all"><a class="block px-4 lg:px-6 pt-8 pb-4 select-none" href="#services">Services</a></li>
            <li class="hover:translate-y-0.5 hover:scale-[0.98] transition-all"><a class="block px-4 lg:px-6 pt-8 pb-4 select-none" href="#pricing">Pricing</a></li>
            <li class="hover:translate-y-0.5 hover:scale-[0.98] transition-all"><a class="block px-4 lg:px-6 pt-8 pb-4 select-none" href="/portfolio">Portfolio</a></li>
        </menu>
        <hr class="w-full max-w-md border-gray-light drop-shadow-md"/>
    </nav>
</header>

<!-- Main content -->
<main class="flex flex-col gap-16 pb-16 overflow-x-hidden">
    <section id="services" class="px-4 xs:px-6 flex flex-col items-center gap-8 scroll-m-8">
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
                    <Button>{service.buttonText}</Button>
                </div>
            </article>
            {/each}
        </main>
        <footer class="flex flex-col items-center gap-4">
            <p class="max-w-[21rem] text-center text-sm text-gray">Ready to see how we can help? Reach out today to explore the possibilities (and get a free quote).</p>
            <Button href="#contact" icon="chatbubbles">Talk with us</Button>
        </footer>
    </section>

    <section id="pricing" class="flex flex-col items-center gap-6 px-2">
        <Header>Pricing</Header>
        <p class="max-w-lg px-4 text-center">Our pricing structures are built around flexibility to accompany any business's budget and maximize each dollar spent.</p>
        <main class="px-2 xs:px-6 flex flex-col items-center gap-8">
            <!-- Toggle -->
            <button
                on:click={handleToggle}
                on:keydown={(e) => handleKeydown(e, handleToggle)}
                class="
                    px-10 py-4 relative flex md:hidden border-2 border-gray rounded-full
                    
                    before:w-32 before:h-12
                    before:transition-all
                    before:absolute {toggleLeft ? 'before:left-1' : 'before:left-[calc(50%+0.25rem)]'} before:top-1 before:-z-10
                    before:bg-gray-dark before:rounded-full">
                <p class="w-24 text-left {toggleLeft && "text-white font-semibold"} transition-all">Project</p>
                <p class="w-24 text-right {!toggleLeft && "text-white font-semibold"} transition-all translate-x-1">Services</p>
            </button>

            <!-- Pricing container -->
            <div class="w-[200vw] md:w-full max-w-4xl gap-8 px-4 md:px-0 flex {toggleLeft ? 'translate-x-1/4' : '-translate-x-1/4'} md:translate-x-0 transition-all">
                <article class="w-full ml-4 md:ml-0 pl-12 xs:pl-16 pr-4 py-4 relative border-2 border-gray rounded-[0_32px_0_32px]">
                    <div class="w-fit p-4 absolute -left-6 xs:-left-4 -top-6 xs:-top-4 bg-black rounded-full">
                        <Icon name="cube" class="w-8 h-8 fill-white"/>
                    </div>
                    <div class="h-full flex flex-col gap-3">
                        <h3>Project-based</h3>
                        <p>You've got a great idea. We can bring out its greatest potential.</p>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Start with a free quote.</h4>
                            <p>We'll have a quick concept meeting to discuss possibilities and what we need to do to make it happen.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Put down a deposit.</h4>
                            <p>We'll book meetings to plan project scope (features, content, commitments, deadlines). Don't worry, your deposit goes toward initial contract payments.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Establish the agreement.</h4>
                            <p>We'll draft a contract and begin project development. Payment can be made <span class="font-bold">upfront</span> or over several <span class="font-bold">milestones</span>, with the first already being completed.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="font-bold text-gray-dark">Launch your project!</h4>
                            <p>After the project is complete or has reached a suitable stage, we'll launch it for public use.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Get free support.</h4>
                            <p>Afterward, we guarantee a month of free services, along with an additional month upon signing a General Services Agreement.</p>
                        </section>
                        <Button icon="cube">Get a quote</Button>
                    </div>
                </article>
                <article class="h-fit w-full ml-4 md:ml-0 pl-12 xs:pl-16 pr-4 py-4 relative border-2 border-gray rounded-[0_32px_0_32px]">
                    <div class="w-fit p-4 absolute -left-6 xs:-left-4 -top-6 xs:-top-4 bg-black rounded-full">
                        <Icon name="hammer" class="w-8 h-8 fill-white"/>
                    </div>
                    <div class="h-full flex flex-col gap-3">
                        <h3>Services-based</h3>
                        <p>You got something that needs continuous service. We've got it covered.</p>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Start with a free quote.</h4>
                            <p>We'll have a quick concept meeting to discuss what services are needed and why.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="text-gray-dark">Explore your needs.</h4>
                            <p>We'll spend a month working with you to estimate what you need, no upfront costs necessary.</p>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h4 class="font-bold text-gray-dark">Establish the contract!</h4>
                            <p>After a month of discovery and the first bill is paid, we'll make a contract for a monthly retainer. You have the option to pay <span class="font-bold">monthly</span>, <span class="font-bold">quarterly</span>, or <span class="font-bold">yearly</span> increments. Any work past the rate is charged at the start of the next month.</p>
                        </section>
                        <Button icon="hammer">Get a quote</Button>
                    </div>
                </article>
            </div>
        </main>
    </section>

    <section class="flex flex-col items-center gap-4">
        <header>
            <Header>Testimonials</Header>
        </header>
        <main class="w-full max-w-2xl px-4">
            <article class="ml-4 px-4 py-4 relative border-2 border-gray-light bg-black rounded-[0_32px_0_32px] text-white">
                <div class="w-fit p-4 absolute -left-6 xs:-left-4 -top-6 xs:-top-4 bg-black rounded-full">
                    <Icon name="chatmessage" class="w-8 h-8 fill-white"/>
                </div>
                <div class="h-full flex flex-col sm:flex-row items-center gap-4">
                    <div class="w-32 h-32 sm:mx-8 flex justify-center items-center bg-gray-light rounded-full">
                        <Icon name="person" class="w-12 h-12" />
                    </div>
                    <div class="flex flex-col items-center sm:items-start gap-4">
                        <div class="flex flex-col items-center sm:items-start gap-1">
                            <h3>Chris Smith</h3>
                            <p class="text-center sm:text-left flex flex-col">
                                <span>U.P. Lions Serve: Childhood Cancer</span>
                                <span class="uppercase font-bold">Director</span>
                            </p>
                        </div>
                        <q class="mb-2">This looks great!</q>
                        <Button href="https://uplionsserve.org/childhood-cancer" target="_blank">Visit website</Button>
                    </div>
                </div>
            </article>
        </main>
    </section>

    <section class="flex flex-col items-center gap-8">
        <header>
            <Header>Looking for more?</Header>
        </header>
        <Button href="https://harrisonbouche.com/portfolio" target="_blank">Peruse our portfolio</Button>
    </section>

    <section class="flex flex-col items-center gap-4">
        <header>
            <Header>About Us</Header>
        </header>
        <main class="max-w-4xl w-full px-4 xs:px-8 flex flex-col md:flex-row items-center md:gap-8 lg:gap-16">
            <img 
                src="/images/about.png" 
                alt="A collage consisting of Harrison Bouche, the Sugar Maple Media logo, and a U.P. river."
                class="max-w-xs px-8 xs:px-4" />
            <div class="flex flex-col gap-4 pt-8">
                <p>Thanks for taking the time to check out my website. If we haven't already been introduced, my name is <span class="font-bold">Harrison Bouche</span>. I am a web developer and designer from the Upper Peninsula of Michigan.</p>
                <p>If you catch me outside of work, you'll likely find me singing, mountain biking, sipping coffee, or listening to podcasts somewhere in the rolling hills of Marquette.</p>
                <p>I am a senior pursuing two majors at Northern Michigan University: Communication Studies, and Mobile and Web Application Development.</p>
                <p>All of the skills I have learned combine in my business, Sugar Maple Media, where I provide digital development and design services with a focus on quality consultation.</p>
            </div>
        </main>
    </section>
</main>

<footer id="footer" class="pb-12">
    <header class="pb-8">
        <Header>Contact Us</Header>
    </header>
    <main class="px-8 flex justify-center">
        {#if !form?.success}
        <article class="w-full max-w-md">
            <form id="contact_form" class="w-full flex flex-col gap-6" method="post" use:enhance>
                {#if $page.status == 400}
                <div class="bg-gray rounded-2xl overflow-hidden">
                    <p class="px-4 py-3 text-xs text-white font-semibold">Not all required fields were filled out.</p>
                    <hr class="border-2 border-gray-dark"/>
                </div>
                {/if}

                <!-- Name -->
                <div class="flex flex-col gap-1.5"> 
                    <label for="contact_name" class="text-xs uppercase tracking-wider font-semibold">Name<span class="text-red">*</span></label>
                    <input
                        id="contact_name" name="name"
                        type="text" required
                        class="px-4 py-2 rounded-full bg-white border-2 border-gray-light focus:border-gray focus:outline outline-gray focus:translate-y-0.5 transition-all" />
                    {#if form?.name == true}
                    <div class="inline-block mt-1 bg-gray-light rounded-xl overflow-hidden">
                        <p class="px-4 py-3 text-xs text-gray-dark font-semibold">Your name is required.</p>
                        <hr class="w-full border-2 border-gray"/>
                    </div>
                    {/if}
                </div>

                <!-- Email -->
                <div class="flex flex-col gap-1.5">
                    <label for="contact_email" class="text-xs uppercase tracking-wider font-semibold">Email<span class="text-red">*</span></label>
                    <input 
                        id="contact_email" name="email"
                        type="email" required
                        class="px-4 py-2 rounded-full bg-white border-2 border-gray-light focus:border-gray focus:outline outline-gray focus:translate-y-0.5 transition-all" />
                    {#if form?.email == true}
                    <div class="inline-block mt-1 bg-gray-light rounded-xl overflow-hidden">
                        <p class="px-4 py-3 text-xs text-gray-dark font-semibold">Your email is required.</p>
                        <hr class="w-full border-2 border-gray"/>
                    </div>
                    {/if}
                </div>

                <!-- Pricing structure -->
                <div class="flex flex-col gap-1.5">
                    <legend class="text-xs uppercase tracking-wider font-semibold">What are you interested in?*</legend>
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <fieldset tabindex="0"
                        on:keydown={(e) => handleKeydown(e, handleToggle)}
                        class="
                            h-[2.75rem] py-4 relative flex justify-around border-2 border-gray-light focus-within:border-gray focus-within:outline focus-within:outline-gray rounded-full focus-within:translate-y-0.5 transition-all cursor-pointer
                            
                            before:w-1/2 before:h-[2.05rem]
                            before:transition-all
                            before:absolute {toggleLeft ? 'before:left-1' : 'before:left-[calc(49%)]'} before:top-1 before:-z-10
                            before:bg-gray before:rounded-full">
                            
                        <div class="w-full text-left {toggleLeft && "text-white font-semibold"} transition-all">
                            <input tabindex="-1"
                                on:click={() => setToggleLeft(true)}
                                id="contact_pricing_project" name="pricing" 
                                type="radio" value="project" checked
                                class="block w-full opacity-0 pointer-events-none select-none relative z-10 cursor-pointer" />
                            <label for="contact_pricing_project" class="block -translate-y-[1.35rem] relative z-0 text-center cursor-pointer">Project</label>
                        </div>

                        <div class="w-full text-left {!toggleLeft && "text-white font-semibold"} transition-all">
                            <input tabindex="-1"
                                on:click={() => setToggleLeft(false)}
                                id="contact_pricing_general_services" name="pricing" 
                                type="radio" value="general_services"
                                class="block w-full opacity-0 pointer-events-none select-none relative z-10 cursor-pointer" />
                            <label for="contact_pricing_general_services" class="block -translate-y-[1.35rem] relative z-0 text-center cursor-pointer">Services</label>
                        </div>
                    </fieldset>
                </div>

                <!-- Services -->
                <div class="flex flex-col gap-1.5">
                    <legend class="text-xs uppercase tracking-wider font-semibold">What services do you need?*</legend>
                    <fieldset class="px-8 border-2 border-gray-light focus-within:border-gray focus-within:outline focus-within:outline-gray focus-within:translate-y-0.5 transition-all rounded-[1.65rem]">
                        <div class="pt-2 flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_web_development" name="services" value="web_development" class="py-4 cursor-pointer" />
                            <label for="contact_services_web_development" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Web Development</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_web_design" name="services" value="web_design" class="py-4 cursor-pointer" />
                            <label for="contact_services_web_design" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Web Design</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_graphic_design" name="services" value="graphic_design" class="py-4 cursor-pointer" />
                            <label for="contact_services_graphic_design" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Graphic Design</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="pb-2 flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_content_creation" name="services" value="content_creation" class="py-4 cursor-pointer" />
                            <label for="contact_services_content_creation" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Content Creation</label>
                        </div>
                    </fieldset>
                    {#if form?.services == true}
                    <div class="inline-block mt-1 bg-gray-light rounded-xl overflow-hidden">
                        <p class="px-4 py-3 text-xs text-gray-dark font-semibold">At least 1 service is required.</p>
                        <hr class="w-full border-2 border-gray"/>
                    </div>
                    {/if}
                </div>

                <!-- Message -->
                <div class="flex flex-col gap-1.5">
                    <label for="contact_message" class="text-xs uppercase tracking-wider font-semibold">Message</label>
                    <textarea 
                        id="message" name="message"
                        rows="8" cols="8"
                        placeholder="Put any additional information here."
                        class="p-4 border-2 border-gray-light rounded-[1.65rem] focus:outline focus:outline-gray focus:border-gray focus:translate-y-0.5 transition-all"></textarea>
                </div>

                <!-- Submit -->
                <div class="flex justify-center">
                    <Button icon="chatbubbles">Send Message</Button>
                </div>
            </form>
        </article>
        {:else}
        <article in:fly="{{ y: 50, duration: 500 }}"  class="max-w-md w-full px-4 flex flex-col gap-2 items-center border-2 border-gray-light py-4 xs:py-8 rounded-[0_32px_0_32px]">
            <h2 class="text-xl font-bold text-center">Thank you for your message!</h2>
            <p class="text-center">We will get back to you soon.</p>
        </article>
        {/if}
    </main>
</footer>