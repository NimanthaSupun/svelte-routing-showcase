<script>
  let events = [
    {
      title: 'SvelteKit Routing Workshop',
      date: '2025-09-20',
      location: 'Online',
      description: 'A hands-on workshop covering advanced SvelteKit routing techniques.'
    },
    {
      title: 'Community Q&A',
      date: '2025-10-05',
      location: 'Discord',
      description: 'Live Q&A session with the project maintainers and contributors.'
    },
    {
      title: 'Open Source Sprint',
      date: '2025-11-01',
      location: 'GitHub',
      description: 'Collaborative coding event to improve project features and docs.'
    }
  ];
</script>

<h1 class="text-2xl font-bold mb-4">Upcoming Community Events</h1>
<div class="max-w-lg mx-auto bg-white rounded shadow p-6 text-gray-800">
  <ul class="space-y-4">
    {#each events as event}
      <li class="border-b pb-3">
        <div class="font-semibold text-lg">{event.title}</div>
        <div class="text-sm text-gray-600 mb-1">{event.date} &mdash; {event.location}</div>
        <div class="text-gray-700">{event.description}</div>
      </li>
    {/each}
  </ul>
</div>
