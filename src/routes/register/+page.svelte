<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="flex items-center justify-center h-full">
    <form class="flex flex-col gap-3 mt-7 justify-center items-center border p-5 rounded-lg shadow-xl w-96">
        <div class="flex flex-col w-full">
            <label for="username" class="font-semibold">Username</label>
            <input name="username" type="text" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col  w-full">
            <label for="email" class="font-semibold">Email</label>
            <input name="email" type="email" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col w-full">
            <label for="password1" class="font-semibold">Password</label>
            <input name="password1" type="password" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col w-full">
            <label for="password2" class="font-semibold">Password</label>
            <input name="password2" type="password" class="px-2 py-1 border rounded-md shadow-md"/>
        </div>
        <div class="flex flex-col items-center gap-1 w-full">
            <button type="submit" class="border px-3 border-blue-300 bg-blue-400 text-white font-bold capit py-1 w-32 rounded-md shadow-md">Register</button>
            <p class="text-xs mt-1">Already registered? <a href="/login" class="text-blue-600">Log in now </a></p>    
        </div>
    </form>
</div>
