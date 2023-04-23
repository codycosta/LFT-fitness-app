<!-- breakdown of what to be expected following the alpha of the app (will probably see these in the beta) -->

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
    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <div>
            <h5>Calorie Tracking <i class="fa-solid fa-chart-simple" style="color: cornflowerblue;"></i></h5>
        </div>
        
        <div class="description">
            <p>
                We want to provide you with a daily diary to track
                the foods and beverages you consume
            </p>
            <p>
                Integrated right into your user dashboard and interface, get a glimpse of
                both your activity and macros
            </p>
        </div>
    </div>
</div>

<div class="content-card-wrapper">
    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <div>
            <h5>Mobile Native Platform <i class="fa-brands fa-apple" style="color: steelblue"></i></h5>
        </div>

        <div class="description">
            <p>
                The browser is only the beginning. Release on apple and android is in the works, date TBD
            </p>
        </div>
    </div>
</div>

<div class="content-card-wrapper">
    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <div>
            <h5>Gmail Authentication <i class="fa-regular fa-envelope" style="color: red;"></i></h5>
        </div>

        <div class="description">
            <p>
                Wouldn't it be nice to use a verified email right from the get-go?
                We think so too. Enjoy signing in with google in a future update
            </p>
        </div>
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
        height: 200px;
        /* aspect-ratio: 1; */
        padding: 3ch;
        text-align: center;
        font-family: 'Rubik';
        color: darkgray;
        background-color: whitesmoke;
        font-size: 1.2rem;
        transition: 400ms;
        overflow: hidden;
    }

    .description {
        color: transparent;
    }

    .content-card:hover {
        width: 40vw;
        display: flex;
        gap: 3ch;
    }

    .content-card:hover .description {
        display: block;
        border-left: solid lightgray 1px;
        padding-left: 2ch;
        color: darkgrey;
        transition: color 500ms 400ms ease-in;
    }

    @media screen and (max-width: 500px) {
        .content-card-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 5ch;
        }

        .content-card:hover {
            width: 250px;
            height: 500px;
            display: block;
            text-align: center;
        }

        .content-card:hover .description {
            border-left: hidden;
            border-top: solid lightgray 1px;
            padding-left: 0px;
        }

    }
</style>
