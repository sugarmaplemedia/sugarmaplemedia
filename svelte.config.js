import { vitePreprocess } from '@sveltejs/kit/vite'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

export default {
	preprocess: [
		vitePreprocess(),
		preprocess({ postcss: true })
	],
	kit: {
		adapter: adapter()
	}
}