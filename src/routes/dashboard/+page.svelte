<script>
    import UserIntroduction from "./UserIntroduction.svelte";

    import { state } from "../../stores/dark-mode-state"

    let mainBackgroundColor;
    let mainTextColor;

    $: {
        mainBackgroundColor = $state ? '#292B2F' : 'white';
        mainTextColor = $state ? 'lightgrey' : 'black';
    }
</script>

<main
    style:background-color={mainBackgroundColor}
    style:color={mainTextColor}
>
    <UserIntroduction />

</main>

<style>
    main {
        min-height: 100vh;
        transition: 500ms;
    }
</style>
