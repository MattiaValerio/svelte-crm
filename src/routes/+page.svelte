<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>
{#if data.info?.user}
    <h1 class="text-4xl uppercase font-semibold text-red-500 text-center ">Benvenuto {data.info?.user?.name}</h1>
{:else}
    <h1 class="text-4xl uppercase font-semibold text-red-500 text-center ">Benvenuto</h1>
{/if}
