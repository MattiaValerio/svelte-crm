<script lang="ts">
    import Product from '../../components/Product.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>


{#each data.products as item}
     <Product product={item} />
{/each}
    