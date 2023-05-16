<script lang="ts">
import Header from "$lib/components/section/Header.svelte"
import Icon from "$lib/components/Icon.svelte";
import Button from "$lib/components/Button.svelte";
</script>

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
                    <Button darkMode href="https://uplionsserve.org/childhood-cancer" target="_blank">Visit website</Button>
                </div>
            </div>
        </article>
    </main>
</section>