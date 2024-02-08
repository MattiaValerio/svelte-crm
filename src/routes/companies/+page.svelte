<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	{#each data.companies as company}
		<p>{company.id} - {company.name}</p>
	{/each}
</main>
