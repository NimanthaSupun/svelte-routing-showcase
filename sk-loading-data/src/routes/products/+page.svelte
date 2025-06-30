<script>
    export let data;
    const products = data.products
</script>

<h1>{data.title}</h1>


{#each products as product}
    <div class="mt-10 font-bold">
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
        <h1>{product.price}</h1>
    </div>
{/each}
