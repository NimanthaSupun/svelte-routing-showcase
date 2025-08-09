<script>
  let newPassword = '';
  let confirmPassword = '';
  let message = '';

  function handleResetPassword() {
    if (newPassword.length < 8) {
      message = 'Password must be at least 8 characters.';
    } else if (newPassword !== confirmPassword) {
      message = 'Passwords do not match.';
    } else {
      message = 'Your password has been reset successfully!';
      newPassword = '';
      confirmPassword = '';
    }
  }
</script>

<h1 class="text-2xl font-bold mb-4">Reset Password</h1>
<form on:submit|preventDefault={handleResetPassword} class="space-y-4 max-w-md mx-auto p-4 border rounded">
  <div>
    <label for="newPassword" class="block mb-1">New Password</label>
    <input id="newPassword" type="password" bind:value={newPassword} class="border p-2 w-full" required />
  </div>
  <div>
    <label for="confirmPassword" class="block mb-1">Confirm Password</label>
    <input id="confirmPassword" type="password" bind:value={confirmPassword} class="border p-2 w-full" required />
  </div>
  <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Reset Password</button>
</form>

{#if message}
  <div class="mt-4 text-green-600">{message}</div>
{/if}
