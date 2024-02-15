<script lang="ts">
	import DeletingPopUp from './DeletingPopUp.svelte';
    import NewProduct from './NewProduct.svelte';
	import type { User } from "lucia";
    import { createEventDispatcher } from 'svelte';

    type Product = {
        id: number;
        name: string;
        description: string;
        price: number;
        available: boolean;
        createdAt: string;
    }

    export let user: User | null | undefined;
    export let product: Product | undefined;

    let editPopUp: boolean = false;
    
	const dispatch = createEventDispatcher();
    
</script>

{#if editPopUp}

    <NewProduct UpdatingProduct={true} product={product} on:closePopUp={()=> editPopUp = false}/>

{:else}
    <div class="border rounded-md flex p-3">
        <div class="flex flex-col w-full ">
            <h1 class="text-xl font-semibold">{product?.name.toUpperCase()}</h1>
            <p>{product?.description}</p>
            {#if product?.available}
                <p class="text-green-500">Disponibile</p>
            {:else}
                <p class="text-red-500">Non disponibile</p>
            {/if}
            {#if user?.roleId != 1}
                <p class="font-semibold">€ {product?.price}</p>
            {/if}
            <div class="flex gap-2">
                <button class="px-3 py-2 w-full bg-red-400 rounded-md " on:click={()=> dispatch("delete", {
                    product: product
                })}>D</button>
                <button on:click={()=> editPopUp = !editPopUp} class="bg-blue-400 w-full rounded-md px-4 py-2">E</button>
            </div>
            
        </div>
    </div>
{/if}

