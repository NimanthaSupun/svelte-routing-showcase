<script>
	import { onMount } from 'svelte';
	let items = [];
	let loading = true;
	let error = '';

	onMount(async () => {
		try {
			const res = await fetch('http://localhost:4000/items');
			if (!res.ok) throw new Error('Failed to load data');
			items = await res.json();
		} catch (e) {
			error = e.message;
		} finally {
			loading = false;
		}
	});
</script>

<h1 class="text-2xl font-bold mb-4">Loaded Items</h1>
{#if loading}
	<div class="text-gray-500">Loading data...</div>
{:else if error}
	<div class="text-red-600">{error}</div>
{:else}
	<ul class="space-y-2">
		{#each items as item}
			<li class="p-3 bg-gray-100 rounded shadow">{item.name}</li>
		{/each}
	</ul>
{/if}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href="/products">products</a>

<script>
    
</script>