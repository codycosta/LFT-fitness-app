<!-- navigation bar at landing page -->

<script>

    import ToggleSwitch from "./ToggleSwitch.svelte";
    import { state } from '../stores/dark-mode-state.js';

    let navBackgroundColor;

    $: navBackgroundColor = $state ? '#202225' : 'white';

</script>

<nav class="navigator-bar" style="background-color: {navBackgroundColor};">
    <a href="/register" class="right" id="register-link"><i class="fa-solid fa-user-plus"></i></a>
    <a href="/login" class="right"><i class="fa-solid fa-right-to-bracket"></i></a>
    <a href="/">L F T <span>(pre-alpha)</span></a>

    <a href="/dashboard"><i class="fa-solid fa-house-user"></i></a>
    <ToggleSwitch />
    
</nav>

<style>
    .navigator-bar {
        position: fixed;
        width: 100%;
        font-family: monospace;
        font-size: 1.5rem;
        padding: 10px;
        top: 0;
        left: 0;
        z-index: 10;
        transition: 500ms;
    }

    .navigator-bar a {
        padding: 0px 20px;
        text-decoration: none;
        color: darkgray;
        transition: 300ms;
    }

    .navigator-bar a:hover {
        color: cornflowerblue;
    }

    .right {
        float: right;
    }

    @media screen and (max-width: 500px) {
        .navigator-bar {
            font-size: 1rem;
            padding: 1.5ch;
        }

        .navigator-bar a {
            padding: 0px 1ch;
        }

        #register-link {
            padding-right: 3ch;
        }
    }
</style>
