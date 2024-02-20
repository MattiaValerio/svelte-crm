<script lang="ts">
	import type { Products } from '@prisma/client';
	import type { User } from "lucia";
    import { createEventDispatcher } from 'svelte';

    

    export let user: User | null | undefined;
    export let product: Products | undefined;

    
	const dispatch = createEventDispatcher();
    
</script>

    <div class="border w-full rounded-md flex p-3 max">
        <div class="flex flex-col w-full gap-2">
            <h1 class="text-xl font-semibold truncate text-ellipsis whitespace-nowrap   ">{product?.name.toUpperCase()}</h1>
            <p class="truncate text-ellipsis whitespace-nowrap ">{product?.description}</p>
            {#if product?.available}
                <p class="text-green-500">Disponibile</p>
            {:else}
                <p class="text-red-500">Non disponibile</p>
            {/if}
            {#if user?.roleId != 1}
                <p class="font-semibold">€ {product?.price}</p>
            {/if}

            {#if user?.roleId === 2}
                <div class="flex gap-2">
                    <button class="px-3 py-2 w-full bg-red-400 rounded-md " on:click={()=> dispatch("delete", {
                        product: product
                    })}>D</button>
                    <button on:click={()=> dispatch("edit", {
                        product: product
                    })} class="bg-blue-400 w-full rounded-md px-4 py-2">E</button>
                </div>
            {/if}

            <button class="bg-green-400 w-full rounded-md px-4 py-2 text-white font-bold uppercase" on:click={()=> dispatch("detail", {
                product: product
            })}>Dettaglio</button>
            
            
        </div>
    </div>

