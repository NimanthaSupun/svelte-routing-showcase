<script>
    
  let query = '';
  let results = [];
  let loading = false;
  let error = '';

  async function handleSearch() {
    loading = true;
    error = '';
    results = [];
    try {
      // Simulate search API
      await new Promise(r => setTimeout(r, 600));
      results = [
        { title: 'Svelte Routing Basics', link: '/docs/routing-basics' },
        { title: 'Dynamic Routes Example', link: '/products/123' },
        { title: 'Auth Route Group', link: '/auth/login' }
      ].filter(r => r.title.toLowerCase().includes(query.toLowerCase()));
      if (results.length === 0) error = 'No results found.';
    } catch (e) {
      error = 'Search failed.';
    } finally {
      loading = false;
    }
  }

</script>

<h1 class="text-2xl font-bold mb-4">Search Showcase</h1>
<div class="max-w-md mx-auto bg-white rounded shadow p-6 text-gray-800">
  <form on:submit|preventDefault={handleSearch} class="space-y-4">
    <input type="text" bind:value={query} class="border p-2 w-full rounded" placeholder="Search routes or docs..." />
    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded w-full">Search</button>
  </form>
  {#if loading}
    <div class="mt-4 text-gray-500">Searching...</div>
  {:else if error}
    <div class="mt-4 text-red-600">{error}</div>
  {:else if results.length}
    <ul class="mt-4 space-y-2">
      {#each results as r}
        <li><a href={r.link} class="text-blue-600 hover:underline">{r.title}</a></li>
      {/each}
    </ul>
  {/if}

</div>
