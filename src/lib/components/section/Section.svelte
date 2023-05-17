<script lang="ts">
import Header from "./Header.svelte"
export let id: string
</script>

<section {id} class="flex scroll-m-8 flex-col items-center gap-8 px-4 xs:px-6 sm:scroll-m-24">
	<Header><slot name="header" /></Header>
	<main
		class="flex max-w-4xl flex-col items-center gap-8 pl-4 xs:pl-0 md:grid md:grid-cols-2 md:items-stretch">
		<slot />
	</main>
	<footer class="flex flex-col items-center gap-4">
		<slot name="footer" />
	</footer>
</section>
