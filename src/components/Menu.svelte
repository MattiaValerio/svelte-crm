<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import type { Session, User } from 'lucia';

	export let open: boolean = false;
	export let auth: { user: User; session: Session; } | { user: null; session: null; } | undefined;
	
	type Link = {
		name: string;
		href: string;
	};

	const closeMenu = (link: Link) => {
		open = false;
		new Promise((resolve) => setTimeout(resolve, 450)).then(() => {
			goto(link.href);
		});
	};
</script>

{#if open}
	<div class="menu bg-black flex flex-col">
		<button  on:click={()=> closeMenu({name: "Home", href: "/"})} class="hover:underline underline-offset-4">
			Home
		</button>
		<button  on:click={()=> closeMenu({name: "Prodotti", href: "/products"})} class="hover:underline underline-offset-4">
			Prodotti
		</button>
		{#if auth?.user?.roleId === 3 || auth?.user?.roleId === 2}
		<button  on:click={()=> closeMenu({name: "Offerte", href: "/offerte"})} class="hover:underline underline-offset-4">
			Offerte
		</button>
		{/if}
		<button  on:click={()=> closeMenu({name: "Promozioni", href: "/promotions"})} class="hover:underline underline-offset-4">
			Promozioni
		</button>
		
		{#if auth?.user?.roleId === 2}
		<button  on:click={()=> closeMenu({name: "Aziende", href: "/companies"})} class="hover:underline underline-offset-4">
			Aziende
		</button>
		{/if}
		{#if auth?.user?.roleId === 2}
		<button  on:click={()=> closeMenu({name: "Users", href: "/users"})} class="hover:underline underline-offset-4">
			Gestione Utenti
		</button>
		{/if}
		{#if auth != null && auth != undefined}
			<button  on:click={()=> closeMenu({name: "profilo", href: "/profile"})} class="hover:underline underline-offset-4">
				Profilo
			</button>
		{:else}
			<button  on:click={()=> closeMenu({name:"login", href:"/login"})} class="hover:underline underline-offset-4">
				Login
			</button>	
		{/if}
		
		
	</div>

	<div class="bar" transition:scale={{ duration: 450, easing: quadOut, opacity: 1 }} />
{/if}

<style>
	.menu {
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		color: #eef;
	}

	

	.bar {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
		width: 80%;
	}

	
</style>
