<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    export let pageData: PageData;
</script>


<div class=" p-5 h-full flex items-center justify-center ">
    <form class="flex flex-col gap-3 mt-7 justify-center items-center border p-5 rounded-lg shadow-xl w-96" method="POST" action="?/login" use:enhance>
        <div class="flex flex-col ">
            <label for="username" class="font-semibold">Username</label>
            <input name="username" type="text" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col">
            <label for="password" class="font-semibold">Password</label>
            <input name="password" type="password" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col items-center gap-1">
            <button type="submit" class="border px-3 border-blue-300 bg-blue-400 text-white font-bold capit py-1 w-32 rounded-md shadow-md">Login</button>
            <p class="text-xs mt-1">Not registered? <a href="/register" class="text-blue-600 ">Sig-up now </a></p>    
        </div>
        <p>{$page.form?.message}</p>
    </form>
    
</div>