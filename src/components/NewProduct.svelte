<script lang="ts">
	import type { Products } from "@prisma/client";
    import { createEventDispatcher } from "svelte";
    
    export let UpdatingProduct: boolean = false;
    export let product: Products | undefined = {
        id: "",
        name: "",
        description: "",
        available: false,
        price: 0,
        created_at: new Date()
    };

    const dispatch = createEventDispatcher();
    const closePopUp = ()=>{
        dispatch("closePopUp");
    };
    
</script>


<form method="POST" action={UpdatingProduct ? "?/updateProuct" : "?/addProduct"} class="border rounded-md flex flex-col gap-3 p-4">
    <div class="flex flex-col">
        <label for="name" class="uppercase font-semibold">Codice</label>
        <input type="text" name="name" class="border rounded-md h-10 px-3" value={product?.name}>
    </div>
    <div class="flex flex-col">
        <label for="description" class="uppercase font-semibold">Descrizione</label>
        <textarea name="description" id="descriptionProd" cols="30" rows="10" class="border px-3 py-2 rounded-md" value={product?.description}/>
    </div>
    <div class="flex flex-col">
        <label for="price" class="uppercase font-semibold">Prezzo</label>
        <input type="number" min="1" step="any" name="price" class="border h-10 rounded-md px-3" value={product?.price}>
    </div>
    <div class="flex gap-14">
        <label for="available" class="uppercase font-semibold">Disponibile</label>
        <input type="checkbox" name="available" class="border w-5" checked={product?.available}>
    </div>
    <!-- <div class="flex flex-col">
        <label for="category" class="uppercase font-semibold">Categoria</label>
        <input type="text" name="categoriesId" class="border h-10 rounded-md px-3" >
    </div> -->
    <div class="flex justify-around gap-3 mt-5">
        <button on:click={closePopUp} class="bg-red-500 py-3 w-full text-white uppercase font-semibold rounded-md">ANNULLA</button>
        <button type="submit" class="bg-green-500 py-3 w-full text-white uppercase font-semibold rounded-md">{UpdatingProduct ? "MODIFICA" : "CREA"}</button>
    </div>
</form>