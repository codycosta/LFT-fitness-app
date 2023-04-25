<script>
    import { state } from "../../stores/dark-mode-state";
	import BarGraph from "./BarGraph.svelte";

    let boxShadow;
    let cardColor;

    $: {
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(220, 220, 220), -10px -10px 0px white';
        cardColor = $state ? '#36393F' : 'whitesmoke';
    }

</script>

<div class="section-header">
    <span>Summary</span>
    <img src="/favicon.png" alt="profile logo">
</div>

<div class="daily-status">
    <div class="content-region" style:background-color={cardColor} style:box-shadow={boxShadow}>
        <p class="heading" >Today's metrics</p>
        <div class="card">

            <BarGraph calories={40} exercise={20} streak={50}/>

        </div>
        <div class="card">
            <p>today's plan</p>
            <ul>
                <li>any scheduled workouts?</li>
                <li>any NEAT? (walking, swimming, etc)</li>
                <li>give the user suggestions to reach their goals</li>
            </ul>
        </div>
    </div>

    <div class="content-region" style:background-color={cardColor} style:box-shadow={boxShadow}>
        <p class="heading">Yesterday's metrics</p>
        <div class="card">

            <BarGraph calories={90} exercise={76} streak={50}/>

        </div>
        <div class="card">
            <p>quick recap</p>
            <ul>
                <li>routine done + length</li>
                <li>total volume lifted last workout</li>
                <li>activity relative to goal</li>
                <li>current workout streak</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .section-header {
        display: flex;
        justify-content: space-between;
        padding: 70px 30px 0px 30px;
        font-family: 'Rubik';
        font-size: 2rem;
        color: darkgrey;
        font-weight: bold;
    }

    .section-header img {
        width: 30px;
        height: 30px;
        background-color: tomato;
        padding: 10px;
        border-radius: 50%;
    }

    .daily-status {
        display: flex;
        justify-content: center;
        gap: 50px;
        padding: 50px 0;
    }

    .content-region {
        background-color: whitesmoke;
        color: darkgrey;
        padding: 30px;
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
        margin: 50px 0;
    }

    @media screen and (max-width: 500px) {
        .daily-status {
            flex-direction: column;
            padding: 40px;
        }
    }
</style>
