<script lang="ts">
	import { fail } from '@sveltejs/kit';
    import type { PageData } from './$types';
	import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    
    export let data: PageData;
</script>

<div class="flex items-center justify-center h-full">
    <form method="POST" action="?/registerUser" class="flex flex-col gap-3 mt-7 justify-center items-center border p-5 rounded-lg shadow-xl w-96" use:enhance>
        <div class="flex flex-col w-full">
            <label for="name" class="font-semibold">Name</label>
            <input name="name" type="text" class="px-2 py-1 border rounded-md shadow-md" required/>
        </div>
        <div class="flex flex-col w-full">
            <label for="lastname" class="font-semibold">Lastname</label>
            <input name="lastname" type="text" class="px-2 py-1 border rounded-md shadow-md" required/>
        </div>
        <div class="flex flex-col w-full">
            <label for="username" class="font-semibold">Username</label>
            <input name="username" type="text" class="px-2 py-1 border rounded-md shadow-md" required/>
        </div>
        <div class="flex flex-col  w-full">
            <label for="email" class="font-semibold">Email</label>
            <input name="email" type="email" class="px-2 py-1 border rounded-md shadow-md" required/>
        </div>
        <div class="flex flex-col w-full">
            <label for="password1" class="font-semibold">Password</label>
            <input name="password1" type="password" class="px-2 py-1 border rounded-md shadow-md" required/>
        </div>
        <!-- <div class="flex flex-col w-full">
            <label for="password2" class="font-semibold">Password</label>
            <input name="password2" type="password" class="px-2 py-1 border rounded-md shadow-md"/>
        </div> -->
        <div class="flex flex-col items-center gap-1 w-full">
            <button type="submit" class="border px-3 border-blue-300 bg-blue-400 text-white font-bold capit py-1 w-32 rounded-md shadow-md" on:click={()=> console.log($page)}>Register</button>
            <p class="text-xs mt-1">Already registered? <a href="/login" class="text-blue-600">Log in now </a></p>    
        </div>
        {#if $page.form?.message}
            <p class="text-red-500 font-bold text-center">{$page.form?.message}</p>
        {/if}
    </form>
</div>
