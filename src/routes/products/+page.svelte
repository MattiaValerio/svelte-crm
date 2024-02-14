<script lang="ts">
	import { page } from '$app/stores';
	import NewProduct from '../../components/NewProduct.svelte';
	import Product from '../../components/Product.svelte';

	let newProduct: boolean = false;

	function createNewProduct() {
		newProduct = true;
	}
</script>

{#if $page.data.user?.roleId === 2 && newProduct === false}
	<button
		on:click={() => createNewProduct()}
		class="flex bg-red-500 text-white font-bold w-full items-center justify-center py-3 rounded-md my-3"
	>
		CREATE NEW PRODUCT</button
	>
{/if}

{#if newProduct}
	<NewProduct on:closePopUp={()=> newProduct = false}/>
{:else}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
	{#each $page.data?.products as item}
	<div class="col-span-1">
		<Product product={item} user={$page.data?.user} />
	</div>
	{/each}
</div>
	
{/if}
