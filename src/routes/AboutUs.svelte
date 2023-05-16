<script lang="ts">
import Header from "$lib/components/section/Header.svelte"
</script>

<section class="flex flex-col items-center gap-4">
	<header>
		<Header>About Us</Header>
	</header>
	<main
		class="flex w-full max-w-4xl flex-col items-center px-4 xs:px-8 md:flex-row md:gap-8 lg:gap-16">
		<img
			src="/images/about.png"
			alt="A collage consisting of Harrison Bouche, the Sugar Maple Media logo, and a U.P. river."
			class="max-w-xs px-8 xs:px-4" />
		<div class="flex flex-col gap-4 pt-8">
			<p>
				Thanks for taking the time to check out my website. If we haven't already been
				introduced, my name is <span class="font-bold">Harrison Bouche</span>. I am a web
				developer and designer from the Upper Peninsula of Michigan.
			</p>
			<p>
				If you catch me outside of work, you'll likely find me singing, mountain biking,
				sipping coffee, or listening to podcasts somewhere in the rolling hills of
				Marquette.
			</p>
			<p>
				I am a senior pursuing two majors at Northern Michigan University: Communication
				Studies, and Mobile and Web Application Development.
			</p>
			<p>
				All of the skills I have learned combine in my business, Sugar Maple Media, where I
				provide digital development and design services with a focus on quality
				consultation.
			</p>
		</div>
	</main>
</section>
