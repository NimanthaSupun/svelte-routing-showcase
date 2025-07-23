<script>
  let email = '';
  let message = '';

  function handleForgotPassword() {
    if (email) {
      message = `Password reset link sent to ${email}`;
    } else {
      message = 'Please enter your email address.';
    }
  }
</script>
<h1 class="text-2xl font-bold mb-4">Forgot Password</h1>
<form on:submit|preventDefault={handleForgotPassword} class="space-y-4 max-w-md mx-auto p-4 border rounded">
  <div>
    <label for="email" class="block mb-1">Email</label>
    <input id="email" type="email" bind:value={email} class="border p-2 w-full" required />
  </div>
  <button type="submit" class="bg-amber-500 text-white px-4 py-2 rounded">Send Reset Link</button>
</form>
{#if message}
  <div class="mt-4 text-green-600">{message}</div>
{/if}