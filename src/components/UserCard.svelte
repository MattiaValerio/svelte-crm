<script lang="ts">
	import type { User } from 'lucia';

	export let user: User;
	const getRole = (roleId: number) => {
		switch (roleId) {
			case 1:
				return 'User';
			case 2:
				return 'Admin';
			case 3:
				return 'Installatore';
			default:
				return 'Ruolo non definito';
		}
	};
</script>

<div class="bg-gray-300 rounded-md p-3 flex flex-col items-center justify-center">
	<p>{user.name} {user.lastname}</p>
	<p>UserName: {user.username}</p>
	<p>Email: {user.email}</p>
	<p>Ruolo: {getRole(user.roleId)}</p>
	<div class="w-full flex items-center justify-around mt-3">
		<button class="px-3 py-2 rounded-md text-white font-semibold bg-red-500">Delete user</button>
		<button class="px-3 py-2 rounded-md text-white font-semibold bg-green-500">Edit user</button>
	</div>
</div>
<br />
