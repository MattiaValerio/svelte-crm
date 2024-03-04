<script lang="ts">
	import UserCard from './../../components/UserCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>


<!-- create a table -->
<div class="w-full h-full overflow">
	{#each data.utenti as user}
		<UserCard {user} />
	{/each}
</div>




