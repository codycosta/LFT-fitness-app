<!-- layout for landing, register, and login pages only -->

<script>

    import NavigationBar from '../components/Navigationbar.svelte';
    import { fade, fly } from 'svelte/transition';

    export let data;

</script>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Rubik">
    <script src="https://kit.fontawesome.com/7a9cbd8555.js" crossorigin="anonymous"></script>
    <title>LFT build w/ sveltekit</title>
</head>

<NavigationBar/>

{#key data.pathname}

    <div 
        in:fly={{ y: 1000, duration: 1000, delay: 500 }}
        out:fade={{ duration: 500, delay: 50 }}
    >
        <slot/>
    </div>

{/key}
