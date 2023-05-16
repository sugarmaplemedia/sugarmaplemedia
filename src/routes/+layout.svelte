<script lang="ts">
import Navigation from '$lib/components/Navigation.svelte';
import Footer from '$lib/components/Footer.svelte';
    
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
import '../app.postcss'
 
inject({ mode: dev ? 'development' : 'production' })

import type { ActionData } from './$types'
import { page } from "$app/stores"

export let form: ActionData
$: if ($page.status == 400) {
    window.scrollTo({
        behavior: 'smooth',
        top: document.getElementById("footer")!.getBoundingClientRect().top + window.scrollY - 50
    })
}
</script>

<Navigation />

<main class="flex flex-col gap-48 pb-48 overflow-x-hidden">
    <slot />
</main>

<Footer {form} status={$page.status} />