<script lang="ts">
    import type { Products } from '@prisma/client';
	import { createEventDispatcher } from 'svelte';
    export let product: Products | undefined;
    const dispatcher = createEventDispatcher();

    const closePopUp = ()=>{
        dispatcher('closePopUp');
    }

    const deleteProduct = ()=>{
        dispatcher('deleteProduct',{product: product});
    }
</script>


<div class="flex items-center justify-center absolute left-0 right-0">
    <div class="w-80 h-40 m-5 p-4 flex flex-col justify-center items-center gap-4 border rounded-md">
        <p>Stai eliminando <b>{product?.name}</b></p>
        <p>Vuoi procedere?</p>
        <div class="flex w-full gap-5 justify-around">
            <button class="w-full bg-green-500 text-white font-semibold uppercase py-2 rounded-sm" on:click={()=> closePopUp()}>NO</button>
            
            <button class="w-full rounded-sm text-white font-semibold uppercase py-2  bg-red-500" on:click={()=> deleteProduct()}>SI</button>
        
        </div>
    </div>
</div>