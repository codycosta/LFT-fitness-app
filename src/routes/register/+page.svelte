<script>
    import RegistrationForm from "../../components/RegistrationForm.svelte";
    import { state } from "../../stores/dark-mode-state";

    let mainBackgroundColor;

    $: mainBackgroundColor = $state ? '#292B2F' : 'whitesmoke';

</script>

<main 
    style:background-color={mainBackgroundColor}
>

    <RegistrationForm />

</main>

<style>
    main {
        transition: 500ms;
    }
</style>
