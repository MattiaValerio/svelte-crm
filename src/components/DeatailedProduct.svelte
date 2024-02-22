<script lang="ts">
	  import type { Products } from "@prisma/client";
    import { createEventDispatcher } from "svelte";
    import type { User } from "lucia";

    export let user: User | null | undefined;
    export let product: Products | undefined;
    
    const dispatch = createEventDispatcher();
</script>

<div class="">
    <div class="flex mt-2 justify-end items-center">
        <button class="bg-gray-400 rounded-md py-1 px-3 text-white font-bold uppercase" on:click={()=> dispatch("exitClick")}>X</button>
    </div>
    
    <div>
        <div class="mt-2 border-t border-gray-100">
            <div class="px-4 flex justify-center py-6">
                <img class="w-64" src="https://gzsecutel.it/796-large_default/telecamera-ip-speed-dome-2mpx-25x-zoom-infrarosso-150mt-h265-starlight-sony-starvis-ip67-poe-analisi-video-ivs.jpg" alt="">
              </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Nome</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.name}</dd>
            </div>
            {#if user?.roleId == 2 || user?.roleId == 3}
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Prezzo</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${product?.price}</dd>
              </div>
            {/if}
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Descrizione</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.description}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Manuali</dt>
              <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="flex w-0 flex-1 items-center">
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <div class="ml-4 flex min-w-0 flex-1 gap-2">
                        <span class="truncate font-medium">manuale_installazione.pdf</span>
                        <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  
                </ul>
              </dd>
            </div>
        </div>
      </div>
      
</div>
