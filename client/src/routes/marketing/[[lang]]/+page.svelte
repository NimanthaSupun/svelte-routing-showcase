<script>

    import {page} from '$app/stores'

    const greetings = {
        en:'Hell!o',
        es:'Hola!',
        fr:'Bonjour!'
    }

    const {lang = 'en'} = $page.params
    const greeting = greetings[lang]
</script>

<h1>{greeting}</h1>
