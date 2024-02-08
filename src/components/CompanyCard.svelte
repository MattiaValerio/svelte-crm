<!-- create a card with tailwindcss that display a company information -->
<script lang="ts">
	type Company = {
		id: number;
		name: string;
		description: string;
	};
	export let company: Company;
</script>

<div class="border p-3 gap-3">
	<div>
		<h1 class="text-3xl font-bold">{company.name}</h1>
	</div>
	<div>
		<p>{company.description}</p>
	</div>
</div>
