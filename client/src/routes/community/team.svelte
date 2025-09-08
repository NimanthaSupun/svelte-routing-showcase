<script>
  let members = [
    { name: 'Nimantha Supun', role: 'Project Creator', github: 'https://github.com/NimanthaSupun' },
    { name: 'Jane Doe', role: 'Contributor', github: 'https://github.com/janedoe' },
    { name: 'John Smith', role: 'Contributor', github: 'https://github.com/johnsmith' }
  ];
</script>

<h1 class="text-2xl font-bold mb-4">Community Team</h1>
<div class="max-w-md mx-auto bg-white rounded shadow p-6 text-gray-800">
  <ul class="space-y-4">
    {#each members as member}
      <li class="flex items-center gap-4">
        <div class="flex-1">
          <div class="font-semibold">{member.name}</div>
          <div class="text-sm text-gray-500">{member.role}</div>
        </div>
        <a href={member.github} target="_blank" class="text-blue-600 hover:underline">GitHub</a>
      </li>
    {/each}
  </ul>
</div>
