<script>
  let resources = [
    {
      title: 'Official SvelteKit Documentation',
      url: 'https://kit.svelte.dev/docs',
      description: 'Comprehensive guide to SvelteKit features and API.'
    },
    {
      title: 'Svelte Society',
      url: 'https://sveltesociety.dev/',
      description: 'Community-driven hub for Svelte resources, tutorials, and events.'
    },
    {
      title: 'Svelte Tutorial',
      url: 'https://svelte.dev/tutorial',
      description: 'Interactive tutorial to learn Svelte from the basics.'
    },
    {
      title: 'Awesome SvelteKit',
      url: 'https://github.com/svelte-society/awesome-sveltekit',
      description: 'A curated list of awesome SvelteKit resources, libraries, and tools.'
    }
  ];
</script>

<h1 class="text-2xl font-bold mb-4">Learning Resources</h1>
<div class="max-w-lg mx-auto bg-white rounded shadow p-6 text-gray-800">
  <ul class="space-y-4">
    {#each resources as res}
      <li class="border-b pb-3">
        <a href={res.url} target="_blank" class="font-semibold text-lg text-amber-600 hover:underline">{res.title}</a>
        <div class="text-sm text-gray-600">{res.description}</div>
      </li>
    {/each}
  </ul>
</div>