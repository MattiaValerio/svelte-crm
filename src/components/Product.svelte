<script lang="ts">
	import NewProduct from './NewProduct.svelte';
	import type { User } from "lucia";

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
</script>

{#if editPopUp}
    <NewProduct product={product} on:closePopUp={()=> editPopUp = false}/>

{:else}
    <div class="border rounded-md p-3 flex ">
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
            
        </div>
        <div class="flex flex-col gap-2">
            <button on:click={()=> editPopUp = !editPopUp} class="bg-blue-400 rounded-md px-4 py-2">E</button>
            <button class="px-3 py-2 bg-red-400 rounded-md ">D</button>
        </div>
    </div>
{/if}

