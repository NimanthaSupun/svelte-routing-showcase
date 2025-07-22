<script>
  let email = '';
  let password = '';
  let message = '';

  function handleLogin() {
    if (email && password) {
      message = `Logged in as ${email}`;
    } else {
      message = 'Please enter your email and password.';
    }
  }
</script>

<h1 class="text-2xl font-bold mb-4">Login</h1>
<form on:submit|preventDefault={handleLogin} class="space-y-4 max-w-md mx-auto p-4 border rounded">
  <div>
    <label for="email" class="block mb-1">Email</label>
    <input id="email" type="email" bind:value={email} class="border p-2 w-full" required />
  </div>
  <div>
    <label for="password" class="block mb-1">Password</label>
    <input id="password" type="password" bind:value={password} class="border p-2 w-full" required />
  </div>
  <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Login</button>
</form>

{#if message}
  <div class="mt-4 text-green-600">{message}</div>
{/if}
