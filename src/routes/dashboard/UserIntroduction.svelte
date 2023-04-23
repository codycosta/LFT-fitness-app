<script>
    import { state } from "../../stores/dark-mode-state";
	import BarGraph from "./BarGraph.svelte";

    let backgroundColor;
    let boxShadow;
    let cardColor;

    $: {
        backgroundColor = $state ? '#292B2F' : 'whitesmoke';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(230, 230, 230), -10px -10px 0px white';
        cardColor = $state ? '#36393F' : 'whitesmoke';
    }
</script>

<div class="user-intro">
    <span>Hi, username!</span>
</div>

<div class="daily-status">
    <div class="content-region" style:background-color={cardColor}>
        <p class="heading">Yesterday's metrics</p>
        <div class="card" style:box-shadow={boxShadow}>
            <BarGraph />
        </div>
        <div class="card" style:box-shadow={boxShadow}>
            <p>quick recap</p>
        </div>
    </div>

    <div class="content-region" style:background-color={cardColor}>
        <p class="heading">Today's metrics</p>
        <div class="card" style:box-shadow={boxShadow}>
            <BarGraph />
        </div>
        <div class="card" style:box-shadow={boxShadow}>
            <p>today's plan</p>
        </div>
    </div>
</div>

<style>
    .user-intro {
        display: flex;
        justify-content: center;
        padding: 100px 0;
        font-family: 'Rubik';
        font-size: 2rem;
    }

    .daily-status {
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .content-region {
        background-color: whitesmoke;
        color: darkgrey;
        padding: 35px;
        font-family: 'Rubik';
        border-radius: 10px;
    }

    .content-region p {
        text-align: center;
    }

    .heading {
        font-size: 1.5rem;
        padding-bottom: 20px;
    }

    .card {
        padding: 15px;
        border-radius: 5px;
        margin: 30px 0;
    }
</style>
