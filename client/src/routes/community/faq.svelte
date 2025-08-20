<script>
  let faqs = [
    {
      question: 'What is SvelteKit?',
      answer: 'SvelteKit is a framework for building web applications using Svelte with file-based routing, server-side rendering, and more.'
    },
    {
      question: 'How does routing work in SvelteKit?',
      answer: 'Routing in SvelteKit is based on your project’s folder structure. Each file or folder in the routes directory becomes a route.'
    },
    {
      question: 'Can I use API routes in SvelteKit?',
      answer: 'Yes, you can create server endpoints using +server.js files inside your routes.'
    }
  ];
  let openIndex = null;

  function toggle(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<h1 class="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
<div class="max-w-md mx-auto bg-white rounded shadow p-6 text-gray-800">
  {#each faqs as faq, i}
    <div class="mb-2">
      <button type="button" class="w-full text-left font-semibold py-2 px-3 bg-gray-100 rounded hover:bg-amber-100 transition" on:click={() => toggle(i)}>
        {faq.question}
      </button>
      {#if openIndex === i}
        <div class="p-3 text-gray-700 border-l-4 border-amber-500 bg-amber-50">{faq.answer}</div>
      {/if}
    </div>
  {/each}
</div>
