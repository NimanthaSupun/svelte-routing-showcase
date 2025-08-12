<script>
  let email = '';
  let message = '';

  function handleForgotPassword() {
    if (!email) {
      message = 'Please enter your email address.';
      return;
    }
    // Simulate sending reset link
    setTimeout(() => {
      message = `A password reset link has been sent to ${email}. Please check your inbox.`;
    }, 500);
  }
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
<div class="max-w-md mx-auto bg-white rounded shadow p-6 text-gray-800">
  <form on:submit|preventDefault={handleForgotPassword} class="space-y-4">
    <div>
      <label for="email" class="block mb-1 font-medium">Email Address</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        class="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        placeholder="Enter your email"
        required
      />
    </div>
    <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded w-full transition">
      Send Reset Link
    </button>
  </form>
    {#if message}
      <div class="mt-4 text-green-600 text-center">{message}</div>
    {/if}
  </div>