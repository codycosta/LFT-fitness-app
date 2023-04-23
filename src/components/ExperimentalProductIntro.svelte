<!-- content card for quick product selling point (testing a new design) -->

<script>
    import { state } from '../stores/dark-mode-state.js';

    let cardColor;
    let boxShadow;

    $: {
        cardColor = $state ? '#36393F' : 'whitesmoke';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(220, 220, 220), -10px -10px 0px rgb(250, 250, 250)';
    }
</script>

<div class="content-card-wrapper">
    <div class="enjoy-fitness-phrase">
        <p>Enjoy simplified fitness <i class="fa-solid fa-heart-pulse"></i></p>
        <hr>
    </div>
    
    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <p>
            Let L F T do the heavy lifting (pun intended) for you, so you can 
            focus more on what matters: 
        </p>
        <strong>building your dream body</strong>
        <h5 style="color: black"><i class="fa-solid fa-dumbbell"></i></h5>
    </div>

    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <p>
            Keep browsing to find out more about what LFT has to offer 
        </p>
        <h5 style="color: cornflowerblue">
            <i class="fa-solid fa-magnifying-glass"></i>
        </h5>
    </div>

    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <p>
            or create a free account to discover its full potential
        </p>
        <h5 style="color: cornflowerblue">
            <i class="fa-solid fa-user-plus"></i>
        </h5>
        <h5 style="color: lightgreen;"><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i></h5>
    </div>
</div>

<style>
    .content-card-wrapper {
        padding: 50px 0;
        display: flex;
        justify-content: center;
        gap: 6ch;
    }

    .content-card-wrapper h5 {
        font-size: 2rem;
        font-family: 'Rubik';
    }

    .content-card {
        box-shadow: 0px 30px 30px lightgray;
        border-radius: 10px;
        width: clamp(250px, 10vw, 600px);
        aspect-ratio: 1;
        padding: 3ch;
        text-align: center;
        font-family: 'Rubik';
        color: darkgray;
        background-color: whitesmoke;
        font-size: 1.2rem;
        transition: 500ms;
    }

    .enjoy-fitness-phrase {
        color: darkgrey;
        font-family: 'Nothing You Could Do';
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        .content-card-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 5ch;
        }

        .enjoy-fitness-phrase {
            text-align: center;
            font-size: 1.5rem;
        }
    }
</style>
