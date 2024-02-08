<script lang="ts">
	import Hamburger from './../../node_modules/svelte-hamburgers/dist/Hamburger.svelte';
	import '../app.css';
	import Menu from '../components/Menu.svelte';
	import { goto } from '$app/navigation';

	let open: boolean;
</script>

<div class="bg-black w-screen flex items-center gap-5">
	<div class="h-full px-3 font-bold flex items-center">
		<button class="text-white text-2xl text-center" on:click={()=> goto("/")}>MV<button/>
	</div>
	<div class=" w-full flex justify-end">
		<Hamburger bind:open --color="white" />
	</div>
</div>
<div class="flex absolute left-0 right-0 flex-col justify-center items-center bg-black pb-2 z-10">
	<Menu bind:open />
</div>

<div class="p-3">
	<slot />
</div>


<!-- Layout con body full page -->
<!-- <div class="min-h-screen flex flex-col">
    <div class=' flex items-center justify-between shadow-sm text-white'> 
		<div class="h-16">
			<div class="bg-black w-screen flex items-center gap-5">
				<div class="h-full px-3 font-bold flex items-center">
					<button class="text-white text-2xl text-center" on:click={()=> goto("/")}>MV</button>
				</div>
				<div class=" w-full flex justify-end">
					<Hamburger bind:open --color="white" />
				</div>
			</div>
			<div class="flex absolute left-0 right-0 flex-col justify-center items-center bg-black pb-2 z-10">
				<Menu bind:open />
			</div>
		
		</div>
	</div>
    <div class='relative flex flex-grow'>
        <main class='flex-1 p-2'> 
			<slot />	
		</main>
    </div>
</div> -->