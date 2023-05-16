<script lang="ts">
import Header from "$lib/components/section/Header.svelte"
import Icon from "$lib/components/Icon.svelte";
import Button from "$lib/components/Button.svelte";

let toggleLeft = false
const handleToggle = () => {
    toggleLeft = !toggleLeft
}

const handleKeydown = (e: KeyboardEvent, f: () => void) => {
    if (e.key != "Tab") {
        e.preventDefault()
        f()
    }
}
</script>

<section id="pricing" class="flex flex-col items-center gap-6 px-2 scroll-m-8 sm:scroll-m-24">
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
                    <Button href="#footer" icon="cube">Get a quote</Button>
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
                    <Button href="#footer" icon="hammer">Get a quote</Button>
                </div>
            </article>
        </div>
    </main>
</section>