<script lang="ts">
import Navigation from '$lib/components/Navigation.svelte';
    
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
import '../app.postcss'
 
inject({ mode: dev ? 'development' : 'production' })
</script>

<Navigation />

<main class="flex flex-col gap-48 pb-48 overflow-x-hidden">
    <slot />
</main>