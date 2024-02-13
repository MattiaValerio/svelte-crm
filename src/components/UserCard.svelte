<script lang="ts">
	import type { Session, User } from "lucia";

    export let user: User;
    console.log(user)
    const getRole = (roleId: number) => {
        switch (roleId) {
            case 1:
                return "User";
            case 2:
                return "Admin";
            case 3:
                return "Installatore";
            default:
                return "Ruolo non definito";
        }
    }
</script>

<div>
    <p>{user.name} {user.lastname}</p>
    <p>UserName: {user.username}</p>
    <p>Email: {user.email}</p>
    <p>Ruolo: {getRole(user.roleId)} </p>
</div>
<br/>