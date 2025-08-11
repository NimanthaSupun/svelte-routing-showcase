<script>
	// No script needed for simple layout navigation
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
	<h2 class="text-xl font-bold mb-4">Authentication</h2>
	<nav class="flex flex-col gap-2 mb-6">
		<a href="/auth/login" class="text-blue-600 hover:underline">Login</a>
		<a href="/auth/register" class="text-blue-600 hover:underline">Register</a>
		<a href="/auth/password/info" class="text-blue-600 hover:underline">Password Info</a>
		<a href="/auth/password/forgot" class="text-blue-600 hover:underline">Forgot Password</a>
		<a href="/auth/password/reset" class="text-blue-600 hover:underline">Reset Password</a>
	</nav>
	<slot />
</div>
<h1>Welcome to here</h1>
<slot />