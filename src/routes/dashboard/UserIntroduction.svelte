<script>
    import { state } from "../../stores/dark-mode-state";
	import BarGraph from "./BarGraph.svelte";

    let boxShadow;
    let cardColor;

    $: {
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(230, 230, 230), -10px -10px 0px white';
        cardColor = $state ? '#36393F' : 'whitesmoke';
    }
</script>

<div class="user-intro">
    <span>Hi, username!</span>
</div>

<div class="daily-status">
    <div class="content-region" style:background-color={cardColor}>
        <p class="heading">Today's metrics</p>
        <div class="card" style:box-shadow={boxShadow}>

            <BarGraph calories={40} exercise={20} streak={30}/>

        </div>
        <div class="card" style:box-shadow={boxShadow}>
            <p>today's plan</p>
            <ul>
                <li>any scheduled workouts?</li>
                <li>any NEAT? (walking, swimming, etc)</li>
                <li>give the user suggestions to reach their goals</li>
            </ul>
        </div>
    </div>

    <div class="content-region" style:background-color={cardColor}>
        <p class="heading">Yesterday's metrics</p>
        <div class="card" style:box-shadow={boxShadow}>

            <BarGraph calories={90} exercise={76} streak={50}/>

        </div>
        <div class="card" style:box-shadow={boxShadow}>
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
    .user-intro {
        display: flex;
        justify-content: center;
        padding-top: 100px;
        font-family: 'Rubik';
        font-size: 2rem;
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
