<script context="module">
    import { locale, loadTranslations } from '$lib/translations'

    export const load = async ({ url }) => {
        const { pathname } = url
        await loadTranslations(locale.get() || 'it', pathname)
        return {}
    }
</script>

<script>
    import '../app.css';
    import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<slot />