<script lang="ts">
import Services from "./Services.svelte"
import Pricing from "./Pricing.svelte";
import Testimonials from "./Testimonials.svelte";
import LookingForMore from "./LookingForMore.svelte";
import AboutUs from "./AboutUs.svelte";
import ContactUs from "./ContactUs.svelte";

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

<svelte:head>
    <title>Sugar Maple Media</title>
    <meta name="description" content="Building better businesses in Marquette, MI. Sugar Maple Media is at the forefront of digital design and is here to serve your small business. Set aside maintaining your website and monitoring your social media so you can do what you do best.">
</svelte:head>

<Services />
<Pricing />
<Testimonials />
<LookingForMore />
<AboutUs />
<ContactUs {form} status={$page.status} />
