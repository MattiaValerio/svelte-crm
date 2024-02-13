<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1 class="text-4xl font-semibold uppercase">Profilo</h1>
<p>Nome: {data.info?.user?.name}</p>
<p>Cognome: {data.info?.user?.lastname}</p>
<p>Email: {data.info?.user?.email}</p>
<p>Role: {data.info?.user?.roleId}</p>

<form method="POST" action="?/logout">
    <button class="bg-red-500 px-3 rounded-sm text-white font-semibold" >LOG OUT</button>
</form>
