<script lang="ts">
	import NewProduct from './../../components/NewProduct.svelte';
	import { page } from '$app/stores';
	import DeletingPopUp from '../../components/DeletingPopUp.svelte';
	import ProductCard from '../../components/ProductCard.svelte';
	import type { Products } from '@prisma/client';
	import DeatailedProduct from '../../components/DeatailedProduct.svelte';

	let newProduct: boolean = false;
	let viewDetails: boolean = false;
	let viewDetailsProduct: Products | undefined;
	let deleteItem: boolean = false;
	let deletingProduct: Products | undefined;
	let editProduct: boolean = false;
	let editingProduct: Products | undefined;

	function createNewProduct() {
		newProduct = true;
	}

	const deletItem = (event: CustomEvent<any>)=>{
		deleteItem = !deleteItem;
		deletingProduct = event.detail.product;
	}

	const DeleteProductCall = async (product: Products | undefined)=>{
		
		await fetch(`/api/products`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id: deletingProduct?.id}),
		})
		.then(()=> $page.data?.products.splice($page.data?.products.indexOf(deletingProduct),1))
		.then(()=> deleteItem = !deleteItem)
		.catch((error) => {
			console.error('Error:', error);
		});

	}

	const updateProduct = (event: CustomEvent<any>)=>{
		editProduct = !editProduct;
		editingProduct = event.detail.product;
	}

	const viewDetail = (event: CustomEvent<any>)=>{
		viewDetails = !viewDetails;
		viewDetailsProduct = event.detail.product;
	}

</script>

<div class="">
	{#if $page.data.user?.roleId === 2 && newProduct === false && deleteItem != true && editProduct != true && viewDetails != true}
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
	<DeletingPopUp product={deletingProduct} on:closePopUp={()=> deleteItem = !deletItem} on:deleteProduct={(event)=> DeleteProductCall(deletingProduct)}/>



{:else if editProduct}
	<NewProduct UpdatingProduct={true} product={editingProduct} on:closePopUp={()=> editProduct = false}/>

{:else if viewDetails}
	
		<DeatailedProduct user={$page.data?.user} product={viewDetailsProduct} on:closePopUp={()=> viewDetails = !viewDetails} on:exitClick={()=> viewDetails = !viewDetails}/>

{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
		{#each $page.data?.products as item}
		<div class="col-span-1">
			<ProductCard product={item} user={$page.data?.user} 
						 on:edit={(event)=> updateProduct(event)} 
						 on:delete={(event)=> deletItem(event)}
						 on:detail={(event)=> viewDetail(event)}/>
		</div>
		{/each}
	</div>
{/if}

</div>
