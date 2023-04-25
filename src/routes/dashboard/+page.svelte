<script>
    import UserIntroduction from "./UserIntroduction.svelte";

    import { state } from "../../stores/dark-mode-state"

    let mainBackgroundColor;

    $: {
        mainBackgroundColor = $state ? '#292B2F' : 'whitesmoke';
    }
</script>

<main
    style:background-color={mainBackgroundColor}
>
    <UserIntroduction />

</main>

<style>
    main {
        min-height: 100vh;
        transition: 500ms;
    }
</style>
