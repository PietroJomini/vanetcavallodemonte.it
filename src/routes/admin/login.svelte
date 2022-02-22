<script>
	import { page } from '$app/stores';

	const params = new URLSearchParams($page.url.search);
	const error = params.get('e') === 'true';

	const redirect = '/admin';
	const failure = '/admin/login?e=true';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<div class="flex shadow-lg">
		<div class="w-8 rounded-l bg-cyan-500" class:bg-red-400={error} />

		<form
			action={`/api/auth/login?redirect=${redirect}&failure=${failure}`}
			method="post"
			class="flex items-center rounded-l bg-white p-4"
		>
			<div class="flex flex-col">
				<input
					type="password"
					name="password"
					placeholder="password"
					class="rounded border border-gray-300 bg-white p-3 focus:outline-none"
				/>
				{#if error}
					<span class="pt-2 text-xs text-red-500"><i>Incorrect password</i></span>
				{/if}
			</div>
			<button
				type="submit"
				class="ml-4 h-12 w-min rounded border-2 bg-white py-1 px-3 text-gray-500 transition hover:border-cyan-500 focus:outline-none"
				>Login</button
			>
		</form>
	</div>
</div>
