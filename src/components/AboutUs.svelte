<!-- brief about section -->

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
        <h5>A little about us <i class="fa-solid fa-list"></i></h5>
        <hr>
        <br>
        <p>
            Out of the ashes of capitalism rises LFT, a browser (and soon to be mobile)
            application dedicated to improving and managing one's fitness
        </p>
        <br>
        <p>
            What started as a university side project has evolved into a greater prospect
            than first expected; LFT aspires to join the mainstream fitness industry by
            simplifying as much overhead as possible and providing quality, free content to its users
        </p>
        <br>
        <p>
            If you would like to know more about the creation of this app, and its
            developers, click <a href="/about">here</a>
        </p>
    </div>
    <div class="content-card"
        style:background-color={cardColor}
        style:box-shadow={boxShadow}
    >
        <h5>Our Mission <i class="fa-solid fa-bolt"></i></h5>
        <hr>
        <br>
        <p>
            L F T provides a free platform that integrates all of your favorite 
            features of tracking and monitoring your fitness journey
        </p>
        <br>
        <p>
            Custom workout routines, calorie tracking, and exercise history are the free staples
            of every fitness and nutrition app out there
        </p>
        <br>
        <p>
            Being free and open source, LFT provides more services to its users that might normally be 
            considered premium features on other platforms
        </p>
        <br>
        <p>
            <strong>The difference here is L F T will never ask for any money from you</strong>
        </p>
        <br>
        <p>
            <a href="/register">Get started</a> today and enjoy peace of mind in addition to a fat wallet!
        </p>
    </div>
</div>

<style>
    .content-card-wrapper {
        display: flex;
        justify-content: center;
        gap: 6ch;
        padding: 50px 0;
    }

    .content-card {
        box-shadow: 0px 30px 30px lightgray;
        border-radius: 10px;
        width: clamp(300px, 30vw, 600px);
        padding: 3ch;
        text-align: center;
        font-family: 'Rubik';
        color: darkgray;
        background-color: whitesmoke;
        transition: 500ms;
    }

    .content-card h5 {
        font-size: 1.7rem;
        color: tomato;
    }

    .content-card a {
        color: cornflowerblue;
    }

    @media screen and (max-width: 500px) {
        .content-card-wrapper {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
