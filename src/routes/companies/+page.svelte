<script lang="ts">
	import CompanyCard from '../../components/CompanyCard.svelte';
	import NewCompany from '../../components/NewCompany.svelte';
	import type { PageData } from './$types';

	let newCompany: boolean = false;
	export let data: PageData;
</script>

{#if !newCompany}
	<div class="flex flex-col gap-3">
		<div>
			<button
				class="flex bg-green-500 text-white font-bold w-full items-center justify-center py-3 rounded-md"
				on:click={() => (newCompany = true)}>ADD COMPANY</button
			>
		</div>

		<div class="gap-5 flex flex-col">
			{#each data.companies as company}
				<CompanyCard {company} />
			{/each}
		</div>
	</div>
{:else}
	<NewCompany on:close={() => (newCompany = false)} />
{/if}
