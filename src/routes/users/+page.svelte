<script lang="ts">
	import UserCard from '../../components/UserCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.utenti as user}
	<UserCard {user} />
{/each}
