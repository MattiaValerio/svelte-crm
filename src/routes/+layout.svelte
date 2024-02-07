<script lang="ts">
	import Hamburger from './../../node_modules/svelte-hamburgers/dist/Hamburger.svelte';
	import '../app.css';
	import Menu from '../components/Menu.svelte';

	let open: boolean;
</script>

	<div class="bg-black w-screen flex items-center gap-5">
		<div class="h-full px-3 font-bold flex items-center">
			<h1 class="text-white text-2xl text-center">MV</h1>
		</div>
		<div class=" w-full flex justify-end" >
			<Hamburger bind:open --color="white"/>
		</div>
	</div>
	<div class="flex flex-col justify-center items-center bg-black pb-2">
		<Menu bind:open />
	</div>




<slot />



