<script lang="ts">
	import { page } from '$app/stores';
	import NewProduct from '../../components/NewProduct.svelte';
	import Product from '../../components/Product.svelte';

	let newProduct: boolean = false;

	function createNewProduct() {
		newProduct = true;
	}
</script>

{#if $page.data.user?.roleId === 2}
	<button
		on:click={() => createNewProduct()}
		class="flex bg-red-500 text-white font-bold w-full items-center justify-center py-3 rounded-md my-3"
	>
		CREATE NEW PRODUCT</button
	>
{/if}

{#if newProduct}
	<NewProduct />
{:else}
	{#each $page.data?.products as item}
		<Product product={item} user={$page.data?.user} />
	{/each}
{/if}
