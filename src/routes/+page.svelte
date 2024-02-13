<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    
</script>

<h1>HOME PAGE</h1>

<h1> {data.resp.user.name}</h1>
<h1> {data.resp.user.lastname}</h1>
{#if data.resp.user.rolesId === 1}
    <h1>ADMIN</h1>
{:else}
    <h1>USER</h1>
{/if}
