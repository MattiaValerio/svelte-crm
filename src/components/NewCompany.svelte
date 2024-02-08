<script>
	//create an event dispatcher
	import { createEventDispatcher } from 'svelte';
	const closeMenu = createEventDispatcher();
</script>

<div class="flex flex-col p-5">
	<form
		method="post"
		action="?/addCompany"
		class="flex flex-col border rounded-md border-black p-3 gap-4"
	>
		<div class="flex flex-col">
			<label for="name">Company name:</label>
			<input type="text" name="name" id="name" class="border rounded-md h-10 px-3" />
		</div>
		<div class="flex flex-col">
			<label for="description">Company description:</label>
			<textarea name="description" id="description" class="border rounded-md h-72 px-3 py-2" />
		</div>
		<input
			type="submit"
			value="Submit"
			class="bg-blue-400 rounded-md h-14 text-white font-bold hover:bg-blue-500"
		/>
		<input
			type="button"
			on:click={() => closeMenu('close')}
			value="Cancel"
			class="bg-red-400 rounded-md h-14 text-white font-bold hover:bg-blue-500"
		/>
	</form>

	
</div>
