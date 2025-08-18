<script>
  let feedback = '';
  let submitted = false;

  function handleSubmit() {
    submitted = true;
  }
</script>

<h1 class="text-2xl font-bold mb-4">Feedback</h1>
<div class="max-w-md mx-auto bg-white rounded shadow p-6 text-gray-800">
  {#if !submitted}
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div>
        <label for="feedback" class="block mb-1">Your Feedback</label>
        <textarea id="feedback" bind:value={feedback} class="border p-2 w-full rounded" rows="4" placeholder="Share your thoughts..." required></textarea>
      </div>
      <button type="submit" class="bg-amber-500 text-white px-4 py-2 rounded w-full">Submit</button>
    </form>
  {:else}
    <div class="text-green-600 text-center">Thank you for your feedback!</div>
  {/if}
</div>
