<script>
    import { state } from "../../stores/dark-mode-state";

    let backgroundColor;
    let boxShadow;
    let cardColor;

    $: {
        backgroundColor = $state ? '#292B2F' : 'whitesmoke';
        boxShadow = $state ? 'none' : '10px 10px 20px rgb(230, 230, 230), -10px -10px 20px white';
        cardColor = $state ? '#36393F' : 'whitesmoke';
    }
</script>

<div class="user-intro">
    <span>Hi, username!</span>
</div>

<div class="daily-status">
    <div class="content-region" style:background-color={cardColor}>
        <p>Yesterday's metrics</p>
        <hr>
        <div class="neumorphic-card" style:box-shadow={boxShadow}>
            <p>bar graph here</p>
        </div>
        <div class="neumorphic-card" style:box-shadow={boxShadow}>
            <p>more content here</p>
        </div>
    </div>

    <div class="content-region" style:background-color={cardColor}>
        <p>Today's activity & goals</p>
        <hr>
        <div class="neumorphic-card" style:box-shadow={boxShadow}>
            <p>bar graph here</p>
        </div>
        <div class="neumorphic-card" style:box-shadow={boxShadow}>
            <p>more content here</p>
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

    .neumorphic-card {
        padding: 15px;
        border-radius: 5px;
        margin: 30px 0;
    }
</style>
