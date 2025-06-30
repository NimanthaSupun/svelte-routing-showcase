<script>
    import {goto,beforeNavigate,afterNavigate} from '$app/navigation'

    const handleClick = () => {
        goto('/products')

    }
    beforeNavigate((navigation) => {
        console.log({before:navigation})
    })
    afterNavigate((navigation) => {
        console.log({after:navigaton})
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h1 class="text-xl font-bold">Hello</h1>

<a href="/products">product</a><br>


<button on:click={handleClick}>Place Holder</button>

