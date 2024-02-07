<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	$: response = form;
</script>

<div
	style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 3rem;"
>
	<div class="form-div">
		<form method="POST" action="?/register" class="form" use:enhance>
			<div class="form-group">
				<label for="username">Username</label>
				<input name="username" type="text" class="form-control" />
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input name="password" type="password" class="form-control" />
			</div>
			<!-- Add a div wih a selector that has all the user roles -->
			<div class="form-group">
				<label for="role">Role</label>
				<select name="role" class="form-control">
					<option value="">Select a role</option>
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
			</div>
			<button type="submit" class="btn btn-primary">Register</button>
		</form>
	</div>
	{#if response?.status === 200}
		<div
			style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
		>
			<h2 style="text-align: center;">✅ SUCCESSFULL GENERATION ✅</h2>
			<div
				style="inline-size: 300px;
    overflow-wrap: break-word;"
			>
				<p style="text-align: center;">{response.response.jwt}</p>
			</div>
		</div>
	{/if}

	{#if response?.status === 400}
		<div>
			<h2 style="text-align: center;">❌ ERROR DURING GENERATION ❌</h2>
			<div style="inline-size: 300px">
				<p>{response.response}</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.form-div {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
		padding: 1rem;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.form {
		width: 100%;
	}
	.form-group {
		margin-bottom: 1rem;
	}
	.form-control {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.btn {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		cursor: pointer;
	}
</style>
