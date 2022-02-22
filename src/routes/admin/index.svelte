<script context="module">
	export { load } from '$lib/auth';
</script>

<script>
	import { session } from '$app/stores';
</script>

Admin Dashbaord! Id: {$session.id}

<a href="/api/auth/logout">Logout</a>
<a href="/admin/dashboard">Dashboard</a>
