<script>
	import LoginForm from "./LoginForm.svelte";
    import { state } from "../../stores/dark-mode-state";

    let mainBackgroundColor;

    $: mainBackgroundColor = $state ? '#292B2F' : 'whitesmoke';

</script>

<main 
    style:background-color={mainBackgroundColor}
>

    <LoginForm />

</main>

<style>
    main {
        transition: 500ms;
    }
</style>
