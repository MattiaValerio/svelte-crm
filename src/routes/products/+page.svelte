<script lang="ts">
	import NewProduct from './../../components/NewProduct.svelte';
	import { page } from '$app/stores';
	import DeletingPopUp from '../../components/DeletingPopUp.svelte';
	import ProductCard from '../../components/ProductCard.svelte';
	import type { Products } from '@prisma/client';

	let newProduct: boolean = false;
	let deleteItem: boolean = false;
	let deletingProduct: Products | undefined;
	function createNewProduct() {
		newProduct = true;
	}

	const deletItem = (event: CustomEvent<any>)=>{
		deleteItem = !deleteItem;
		deletingProduct = event.detail.product;
	}

</script>

{#if $page.data.user?.roleId === 2 && newProduct === false && deleteItem != true}
	<button
		on:click={() => createNewProduct()}
		class="flex bg-red-500 text-white font-bold w-full items-center justify-center py-3 rounded-md my-3"
	>
		CREATE NEW PRODUCT</button
	>
{/if}



{#if newProduct}
	<NewProduct on:closePopUp={()=> newProduct = false}/>
{:else if deleteItem}

	<DeletingPopUp product={deletingProduct} on:closePopUp={()=> deleteItem = !deletItem} on:deleteProduct={(event)=> console.log(event.detail.product.id)}/>
	
{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
		{#each $page.data?.products as item}
		<div class="col-span-1">
			<ProductCard product={item} user={$page.data?.user} on:delete={(event)=> deletItem(event)}/>
		</div>
		{/each}
	</div>
	
{/if}
