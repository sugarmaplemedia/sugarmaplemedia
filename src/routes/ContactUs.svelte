<script lang="ts">
import Header from "../lib/components/section/Header.svelte"
import Button from "../lib/components/Button.svelte"

import { enhance } from "$app/forms"
import { fly } from "svelte/transition"
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

<footer id="footer" class="scroll-m-12 pb-12 sm:scroll-m-24">
	<header class="pb-8">
		<Header>Contact Us</Header>
	</header>
	<main class="flex justify-center px-8">
		{#if !form?.success}
			<article class="w-full max-w-md">
				<form
					id="contact_form"
					class="flex w-full flex-col gap-6"
					method="post"
					use:enhance>
					{#if status == 400}
						<div class="overflow-hidden rounded-2xl bg-gray">
							<p class="px-4 py-3 text-xs font-semibold text-white">
								Not all required fields were filled out.
							</p>
							<hr class="border-2 border-gray-dark" />
						</div>
					{/if}

					<!-- Name -->
					<div class="flex flex-col gap-1.5">
						<label
							for="contact_name"
							class="text-xs font-semibold uppercase tracking-wider"
							>Name<span class="text-red">*</span></label>
						<input
							id="contact_name"
							name="name"
							type="text"
							required
							class="rounded-full border-2 border-gray-light bg-white px-4 py-2 outline-gray transition-all focus:border-gray focus:outline" />
						{#if form?.name == true}
							<div class="mt-1 inline-block overflow-hidden rounded-xl bg-gray-light">
								<p class="px-4 py-3 text-xs font-semibold text-gray-dark">
									Your name is required.
								</p>
								<hr class="w-full border-2 border-gray" />
							</div>
						{/if}
					</div>

					<!-- Email -->
					<div class="flex flex-col gap-1.5">
						<label
							for="contact_email"
							class="text-xs font-semibold uppercase tracking-wider"
							>Email<span class="text-red">*</span></label>
						<input
							id="contact_email"
							name="email"
							type="email"
							required
							class="rounded-full border-2 border-gray-light bg-white px-4 py-2 outline-gray transition-all focus:border-gray focus:outline" />
						{#if form?.email == true}
							<div class="mt-1 inline-block overflow-hidden rounded-xl bg-gray-light">
								<p class="px-4 py-3 text-xs font-semibold text-gray-dark">
									Your email is required.
								</p>
								<hr class="w-full border-2 border-gray" />
							</div>
						{/if}
					</div>

					<!-- Pricing structure -->
					<div class="flex flex-col gap-1.5">
						<legend class="text-xs font-semibold uppercase tracking-wider"
							>What are you interested in?*</legend>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<fieldset
							tabindex="0"
							on:keydown={(e) => handleKeydown(e, handleToggle)}
							class="
                            relative flex h-[2.75rem] cursor-pointer justify-around rounded-full border-2 border-gray-light py-4 transition-all before:absolute before:h-[2.05rem] before:w-1/2
                            
                            before:transition-all focus-within:border-gray
                            focus-within:outline
                            focus-within:outline-gray {toggleLeft
								? 'before:left-1'
								: 'before:left-[calc(49%)]'} before:top-1 before:-z-10
                            before:rounded-full before:bg-gray">
							<div
								class="w-full text-left {toggleLeft &&
									'font-semibold text-white'} transition-all">
								<input
									tabindex="-1"
									on:click={() => setToggleLeft(true)}
									id="contact_pricing_project"
									name="pricing"
									type="radio"
									value="project"
									checked
									class="pointer-events-none relative z-10 block w-full cursor-pointer select-none opacity-0" />
								<label
									for="contact_pricing_project"
									class="relative z-0 block -translate-y-[1.35rem] cursor-pointer select-none text-center"
									>Project</label>
							</div>

							<div
								class="w-full text-left {!toggleLeft &&
									'font-semibold text-white'} transition-all">
								<input
									tabindex="-1"
									on:click={() => setToggleLeft(false)}
									id="contact_pricing_general_services"
									name="pricing"
									type="radio"
									value="general_services"
									class="pointer-events-none relative z-10 block w-full cursor-pointer select-none opacity-0" />
								<label
									for="contact_pricing_general_services"
									class="relative z-0 block -translate-y-[1.35rem] cursor-pointer select-none text-center"
									>Services</label>
							</div>
						</fieldset>
					</div>

					<!-- Services -->
					<div class="flex flex-col gap-1.5">
						<legend class="text-xs font-semibold uppercase tracking-wider"
							>What services do you need?*</legend>
						<fieldset
							class="rounded-[1.65rem] border-2 border-gray-light px-8 transition-all focus-within:border-gray focus-within:outline focus-within:outline-gray">
							<div
								class="flex cursor-pointer items-center gap-2 rounded-full pt-2 checked:bg-gray-light">
								<input
									type="checkbox"
									id="contact_services_web_development"
									name="services_1"
									value="web_development"
									class="cursor-pointer py-4" />
								<label
									for="contact_services_web_development"
									class="grow cursor-pointer select-none py-4 font-medium text-gray-dark"
									>Web Development</label>
							</div>
							<hr class="border-gray-light" />
							<div
								class="flex cursor-pointer items-center gap-2 rounded-full checked:bg-gray-light">
								<input
									type="checkbox"
									id="contact_services_web_design"
									name="services_2"
									value="web_design"
									class="cursor-pointer py-4" />
								<label
									for="contact_services_web_design"
									class="grow cursor-pointer select-none py-4 font-medium text-gray-dark"
									>Web Design</label>
							</div>
							<hr class="border-gray-light" />
							<div
								class="flex cursor-pointer items-center gap-2 rounded-full checked:bg-gray-light">
								<input
									type="checkbox"
									id="contact_services_graphic_design"
									name="services_3"
									value="graphic_design"
									class="cursor-pointer py-4" />
								<label
									for="contact_services_graphic_design"
									class="grow cursor-pointer select-none py-4 font-medium text-gray-dark"
									>Graphic Design</label>
							</div>
							<hr class="border-gray-light" />
							<div
								class="flex cursor-pointer items-center gap-2 rounded-full pb-2 checked:bg-gray-light">
								<input
									type="checkbox"
									id="contact_services_content_creation"
									name="services_4"
									value="content_creation"
									class="cursor-pointer py-4" />
								<label
									for="contact_services_content_creation"
									class="grow cursor-pointer select-none py-4 font-medium text-gray-dark"
									>Content Creation</label>
							</div>
						</fieldset>
						{#if form?.services == true}
							<div class="mt-1 inline-block overflow-hidden rounded-xl bg-gray-light">
								<p class="px-4 py-3 text-xs font-semibold text-gray-dark">
									At least 1 service is required.
								</p>
								<hr class="w-full border-2 border-gray" />
							</div>
						{/if}
					</div>

					<!-- Message -->
					<div class="flex flex-col gap-1.5">
						<label
							for="contact_message"
							class="text-xs font-semibold uppercase tracking-wider">Message</label>
						<textarea
							id="message"
							name="message"
							rows="8"
							cols="8"
							placeholder="Put any additional information here."
							class="rounded-[1.65rem] border-2 border-gray-light p-4 transition-all focus:border-gray focus:outline focus:outline-gray" />
					</div>

					<!-- Submit -->
					<div class="flex justify-center">
						<Button icon="chatbubbles">Send Message</Button>
					</div>
				</form>
			</article>
		{:else}
			<article
				in:fly={{ y: 50, duration: 500 }}
				class="flex w-full max-w-md flex-col items-center gap-2 rounded-[0_32px_0_32px] border-2 border-gray-light px-4 py-4 xs:py-8">
				<h2 class="text-center text-xl font-bold">Thank you for your message!</h2>
				<p class="text-center">We will get back to you soon.</p>
			</article>
		{/if}
	</main>
</footer>
