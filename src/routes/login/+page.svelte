<script lang="ts">
    import type { PageData } from './$types';
    
    export let pageData: PageData;
</script>


<div class=" p-5 h-full flex items-center justify-center ">
    <form class="flex flex-col gap-3 mt-7 justify-center items-center border p-5 rounded-lg shadow-xl w-96">
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
    </form>
    <!-- {#if pageData?.status === 400}
        <div>
            <h2>❌ ERROR DURING LOGIN ❌</h2>
            <div>
                <p>{pageData.response}</p>
            </div>
        </div>
    {/if}
    {#if pageData?.status === 200}
        <div>
            <h2>✅ SUCCESSFULL LOGIN ✅</h2>
            <div>
                <p>{pageData.response.jwt}</p>
            </div>
        </div>
    {/if} -->
</div>