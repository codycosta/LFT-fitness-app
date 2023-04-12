<!-- navigation bar at landing page -->

<script>

    import ToggleSwitch from "./ToggleSwitch.svelte";
    import { state } from '../stores/dark-mode-state.js';

    let navBackgroundColor;

    $: navBackgroundColor = $state ? '#202225' : 'whitesmoke';

</script>

<nav class="navigator-bar" style="background-color: {navBackgroundColor};">
    <a href="/register" class="right"><i class="fa-solid fa-user-plus"></i></a>
    <a href="/login" class="right"><i class="fa-solid fa-right-to-bracket"></i></a>
    <a href="/">L F T <span>(pre-alpha)</span></a>

    <ToggleSwitch/>
    
</nav>

<style>
    .navigator-bar {
        position: fixed;
        width: 100%;
        font-family: monospace;
        font-size: 1.5rem;
        /* background-color: rgba(240, 248, 255, 0.85); */
        padding: 10px;
        top: 0;
        left: 0;
        z-index: 10;
        transition: 500ms;
    }

    .navigator-bar a {
        padding: 0px 30px;
        text-decoration: none;
        color: darkgray;
        transition: 300ms;
    }

    .navigator-bar a:hover {
        transform: scale(1.1);
        color: cornflowerblue;
    }

    .right {
        float: right;
    }
</style>
