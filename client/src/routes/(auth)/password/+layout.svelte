<script>
	// No script needed for simple layout navigation
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
	<h2 class="text-xl font-bold mb-4">Password Management</h2>
	<nav class="flex flex-col gap-2 mb-6">
		<a href="/auth/password/info" class="text-blue-600 hover:underline">Password Requirements</a>
		<a href="/auth/password/forgot" class="text-blue-600 hover:underline">Forgot Password</a>
		<a href="/auth/password/reset" class="text-blue-600 hover:underline">Reset Password</a>
	</nav>
	<slot />
</div>
<p>Password layout</p>
<slot />