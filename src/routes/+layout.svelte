<script lang="ts">
	import Hamburger from './../../node_modules/svelte-hamburgers/dist/Hamburger.svelte';
	import '../app.css';
	import Menu from '../components/Menu.svelte';
	import { goto } from '$app/navigation';
	import type{ PageData } from './$types';
	

	let open: boolean;
	export let data: PageData;
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
	<Menu bind:open auth={data.info?.session}/>
</div>

<div class="p-3">
	<slot />
</div>
