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

