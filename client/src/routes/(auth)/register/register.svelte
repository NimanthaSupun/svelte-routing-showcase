<script>
  let name = '';
  let email = '';
  let password = '';
  let message = '';

  function handleRegister() {
    message = `Registered: ${name} (${email})`;
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault={handleRegister} class="space-y-4 max-w-md mx-auto p-4 border rounded">
  <div>
    <label for="name" class="block mb-1">Name</label>
    <input id="name" type="text" bind:value={name} class="border p-2 w-full" required />
  </div>
  <div>
    <label for="email" class="block mb-1">Email</label>
    <input id="email" type="email" bind:value={email} class="border p-2 w-full" required />
  </div>
  <div>
    <label for="password" class="block mb-1">Password</label>
    <input id="password" type="password" bind:value={password} class="border p-2 w-full" required />
  </div>
  <button type="submit" class="bg-amber-500 text-white px-4 py-2 rounded">Register</button>
</form>

{#if message}
  <div class="mt-4 text-green-600">{message}</div>
{/if}