<!-- content card for quick product selling point (testing a new design) -->

<script>

    import { state } from '../stores/dark-mode-state.js';

    let cardColor;
    let boxShadow;

    $: {
        cardColor = $state ? '#36393F' : 'whitesmoke';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px lightgrey, -10px -10px 0px rgb(250, 250, 250)';
    }

    // animate on component visibility

    let translationPostion = '-100vw';
    let ypos;

    const animate = () => {
        if (ypos > window.innerHeight) translationPostion = '0'
    }
 
</script>

<svelte:window bind:scrollY={ypos} on:scroll={animate}/>

<div class="content-card-wrapper">
    <div class="enjoy-fitness-phrase">
        <p>Enjoy simplified fitness <i class="fa-solid fa-heart-pulse"></i></p>
        <hr>
    </div>
    
    <div class="content-card-translated"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
        style:transform={`translateX(${translationPostion})`}
    >
        <p>
            Let L F T do the heavy lifting (pun intended) for you, so you can 
            focus more on what matters: 
        </p>
        <strong>building your dream body</strong>
        <h5 style="color: black"><i class="fa-solid fa-dumbbell"></i></h5>
    </div>

    <div class="content-card-translated"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
        style:transform={`translateX(${translationPostion})`}
        style:transition-delay=300ms
    >
        <p>
            Keep browsing to find out more about what LFT has to offer 
        </p>
        <h5 style="color: cornflowerblue">
            <i class="fa-solid fa-magnifying-glass"></i>
        </h5>
    </div>

    <div class="content-card-translated"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
        style:transform={`translateX(${translationPostion})`}
        style:transition-delay=600ms
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
        font-size: 1.8rem;
        font-family: 'Rubik';
    }

    .content-card-translated {
        box-shadow: 0px 30px 30px lightgray;
        border-radius: 10px;
        width: clamp(200px, 10vw, 600px);
        aspect-ratio: 1;
        padding: 3ch;
        text-align: center;
        font-family: 'Rubik';
        color: darkgray;
        background-color: whitesmoke;
        font-size: 1rem;
        transition: 500ms;
    }

    .enjoy-fitness-phrase {
        color: darkgrey;
        font-family: 'Nothing You Could Do';
        font-size: 1.5rem;
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
