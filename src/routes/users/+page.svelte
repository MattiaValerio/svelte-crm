<script lang="ts">
    import UserCard from '../../components/UserCard.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;

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

    console.log(data);

</script>

<!-- {#each data.utenti as user}
    <UserCard user={user}/>
{/each} -->