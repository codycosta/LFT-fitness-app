<script>
    import { state } from "../../stores/dark-mode-state";

    let backgroundColor;

    $: {
        backgroundColor = $state ? '#292B2F' : 'whitesmoke';
    }
</script>

<div class="user-intro" style:background-color={backgroundColor}>
    <span>Hi, username!</span>
</div>

<style>
    .user-intro {
        display: flex;
        justify-content: center;
        padding: 100px 0;
        font-family: 'Rubik';
        font-size: 2rem;
        /* background-color: whitesmoke; */
    }

    .user-intro span {
        padding: 20px;
        border-radius: 10px;
        box-shadow: 10px 10px 20px lightgrey, 
            -10px -10px 20px white;
    }
</style>
