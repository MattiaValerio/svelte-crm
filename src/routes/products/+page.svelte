<script lang="ts">
    import NewProduct from '../../components/NewProduct.svelte';
    import Product from '../../components/Product.svelte';
    import { page } from '$app/stores';

    let newProduct: boolean = false;

    function createNewProduct() {
        newProduct = true;
    }

</script>

{#if $page.data.user?.roleId === 2}
    <button on:click={()=> createNewProduct()} class="bg-red-500"> CREATE NEW PRODUCT</button>
{/if}


{#if newProduct}

    <NewProduct />

{:else}

    {#each $page.data?.products as item}
        <Product product={item} user={$page.data?.user}/>
    {/each}

{/if}

    