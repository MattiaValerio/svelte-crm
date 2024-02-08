<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open: boolean = false;
	let links = [
		{ name: 'Home', href: '/' },
		{ name: 'Companies', href: '/companies' }
	];

	const closeMenu = () => {
		open = false;
	};
</script>

{#if open}
	<div class="menu bg-black flex flex-col">
		{#each links as link, i}
			<a href={link.href} transition:fly={{ y: -25, delay: 50 * i }} on:click={closeMenu}>
				{link.name}
			</a>
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
