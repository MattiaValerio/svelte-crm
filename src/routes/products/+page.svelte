<script lang="ts">
    import NewProduct from '../../components/NewProduct.svelte';
import Product from '../../components/Product.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;

    let newProduct: boolean = false;

    function createNewProduct() {
        newProduct = true;
    }

</script>

<button on:click={()=> createNewProduct()} class="bg-red-500"> CREATE NEW PRODUCT</button>

{#if newProduct}

    <NewProduct />

    {:else}

        {#each data.products as item}
            <Product product={item} />
        {/each}

{/if}

    