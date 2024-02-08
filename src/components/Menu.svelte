<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	export let open: boolean = false;

	type Link = {
		name: string;
		href: string;
	};

	let links = [
		{ name: 'Home', href: '/' },
		{name: "Prodotti", href: "/products"},
		{name: "Promozioni", href: "/promotions"},
		{name: "Offerte", href: "/offerte"},
		{name: "Aziende", href: "/companies"},
		{ name: 'login', href: '/login' }
	];

	const closeMenu = (link: Link) => {
		open = false;
		new Promise((resolve) => setTimeout(resolve, 450)).then(() => {
			goto(link.href);
		});
	};
</script>

{#if open}
	<div class="menu bg-black flex flex-col">
		{#each links as link, i}
			<button transition:fly={{ y: -25, delay: 50 * i }} on:click={()=> closeMenu(link)} class="hover:underline underline-offset-4">
				{link.name}
			</button>
		{/each}
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

	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}

	p:hover {
		text-decoration: underline;
	}

	.bar {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
		width: 80%;
	}
</style>
