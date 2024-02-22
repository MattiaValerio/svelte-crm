<script lang="ts">
	import UserCard from '../../components/UserCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- create a table -->
<div class="w-full">
	<table class="table-auto overflow-x-scroll max-w-full w-full">
		<thead>
		  <tr>
			<th>Nome</th>
			<th>Cognome</th>
			<th>Email</th>
			<th>Role</th>
		  </tr>
		</thead>
		<tbody>
			{#each data.utenti as user}
			<tr>
				<td>{user.name}</td>
				<td>{user.lastname}</td>
				<td>{user.email}</td>
				<td>{user.roles}</td>
			</tr>
		{/each}
		</tbody>
	  </table>
</div>
	
	
	
	
	
	