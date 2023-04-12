<!-- layout for landing, register, and login pages only -->

<script>

    import NavigationBar from '../components/Navigationbar.svelte';

</script>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Rubik">
    <script src="https://kit.fontawesome.com/7a9cbd8555.js" crossorigin="anonymous"></script>
    <title>LFT build w/ sveltekit</title>
</head>

<NavigationBar/>

<slot/>
