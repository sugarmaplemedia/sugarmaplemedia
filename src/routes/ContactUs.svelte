<script lang="ts">
import Header from "../lib/components/section/Header.svelte"
import Button from "../lib/components/Button.svelte";

import { enhance } from "$app/forms";
import { fly } from "svelte/transition";
import type { ActionData } from "./$types"

export let form: ActionData
export let status: number

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

<footer id="footer" class="pb-12 scroll-m-12 sm:scroll-m-24">
    <header class="pb-8">
        <Header>Contact Us</Header>
    </header>
    <main class="px-8 flex justify-center">
        {#if !form?.success}
        <article class="w-full max-w-md">
            <form id="contact_form" class="w-full flex flex-col gap-6" method="post" use:enhance>
                {#if status == 400}
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
                        class="px-4 py-2 rounded-full bg-white border-2 border-gray-light focus:border-gray focus:outline outline-gray transition-all" />
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
                        class="px-4 py-2 rounded-full bg-white border-2 border-gray-light focus:border-gray focus:outline outline-gray transition-all" />
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
                            h-[2.75rem] py-4 relative flex justify-around border-2 border-gray-light focus-within:border-gray focus-within:outline focus-within:outline-gray rounded-full transition-all cursor-pointer
                            
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
                            <label for="contact_pricing_project" class="block -translate-y-[1.35rem] relative z-0 text-center cursor-pointer select-none">Project</label>
                        </div>

                        <div class="w-full text-left {!toggleLeft && "text-white font-semibold"} transition-all">
                            <input tabindex="-1"
                                on:click={() => setToggleLeft(false)}
                                id="contact_pricing_general_services" name="pricing" 
                                type="radio" value="general_services"
                                class="block w-full opacity-0 pointer-events-none select-none relative z-10 cursor-pointer" />
                            <label for="contact_pricing_general_services" class="block -translate-y-[1.35rem] relative z-0 text-center cursor-pointer select-none">Services</label>
                        </div>
                    </fieldset>
                </div>

                <!-- Services -->
                <div class="flex flex-col gap-1.5">
                    <legend class="text-xs uppercase tracking-wider font-semibold">What services do you need?*</legend>
                    <fieldset class="px-8 border-2 border-gray-light focus-within:border-gray focus-within:outline focus-within:outline-gray transition-all rounded-[1.65rem]">
                        <div class="pt-2 flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_web_development" name="services_1" value="web_development" class="py-4 cursor-pointer" />
                            <label for="contact_services_web_development" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Web Development</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_web_design" name="services_2" value="web_design" class="py-4 cursor-pointer" />
                            <label for="contact_services_web_design" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Web Design</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_graphic_design" name="services_3" value="graphic_design" class="py-4 cursor-pointer" />
                            <label for="contact_services_graphic_design" class="py-4 text-gray-dark font-medium cursor-pointer grow select-none">Graphic Design</label>
                        </div>
                        <hr class="border-gray-light" />
                        <div class="pb-2 flex gap-2 items-center checked:bg-gray-light rounded-full cursor-pointer">
                            <input type="checkbox" id="contact_services_content_creation" name="services_4" value="content_creation" class="py-4 cursor-pointer" />
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
                        class="p-4 border-2 border-gray-light rounded-[1.65rem] focus:outline focus:outline-gray focus:border-gray transition-all"></textarea>
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