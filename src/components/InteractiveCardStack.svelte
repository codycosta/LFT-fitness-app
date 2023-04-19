<!-- hoverable expanding card stack for interactivity -->

<script>
    import { state } from '../stores/dark-mode-state.js';

    let boxShadow;

    $: boxShadow = $state ? 'none' : '0px 30px 30px lightgray';

</script>

<div class="card-stack" >
    <div id="hidden" class="card"></div>
    <div id="top-card" class="card stacked" style:box-shadow={boxShadow}>
        <p class="heading">Performance Metrics <i class="fa-solid fa-diagram-project"></i></p>
        <hr>
        <p>View your fitness progress as a function of time and track your goals</p>
    </div>
    <div id="card-2" class="card stacked" style:box-shadow={boxShadow}>
        <p class="heading">Personal Records <i class="fa-solid fa-book"></i></p>
        
        <hr>
        <p>Records are automatically stored when you complete a routine</p>
    </div>
    <div id="card-3" class="card stacked" style:box-shadow={boxShadow}>
        <p class="heading">Routine Templating <i class="fa-solid fa-pen-to-square"></i></p>
        <hr>
        <p>build an arsenal of workout routines with all of your favorite exercises</p>
    </div>
    <div id="card-4" class="card stacked" style:box-shadow={boxShadow}>
        <p class="heading">Recovery Management <i class="fa-regular fa-clock"></i></p>
        <hr>
        <p>set a timer to allocate a rest period between sets</p>
    </div>
</div>

<style>
    .card-stack {
        position: relative;
        display: flex;
        justify-content: center;
        /* height: 25vw; */
        /* background-color: aliceblue; */
        width: 25%;
        margin: 0 37.5%;
    }

    .card {
        flex: 0 0 auto;
        border-radius: 8px;
        background-color: whitesmoke;
        width: clamp(150px, 15vw, 400px);
        aspect-ratio: 4/5;
        height: auto;
        box-shadow: 0px 20px 30px lightgray;
        /* text-align: center; */
        color: darkslategrey;
        font-size: 1.4rem;
        font-family: 'Rubik';
        padding: 2ch;
        transition: 500ms;
    }

    .heading {
        text-align: center;
    }

    .card p {
        background-color: rgba(255, 255, 255, 0.7);
        padding: 1ch;
        border-radius: 6px;
    }

    .stacked {
        position: absolute;
    }

    #hidden {
        background-color: transparent;
        box-shadow: none;
        transition: none;
    }

    #top-card {
        transform: translate(-5vw, 0.5vw) rotate(-2deg);
        background: url("/images/unsplash-bar-graph.jpg");
        background-size: cover;
    }

    #card-2 {
        transform: translate(-1vw, 0vw) rotate(-1deg);
        background: url("/images/unsplash-dips.webp");
        background-size: cover;
    }

    #card-3 {
        transform: translate(2vw, 0vw) rotate(1deg);
        background: url("/images/template-unsplash.jpg");
        background-size: cover;
    }

    #card-4 {
        transform: translate(5vw, 0.5vw) rotate(2deg);
        background: url("/images/unsplash-stretch.webp");
        background-size: cover;
    }

    .card-stack:hover #hidden {
        width: 90vw;
        height: clamp(190px, 18.75vw, 500px);
    }

    .card-stack:hover #top-card {
        transform: translate(-30vw, 0vw) rotate(0deg);
    }

    .card-stack:hover #card-2 {
        transform: translate(-10vw, 0vw) rotate(0deg);
    }

    .card-stack:hover #card-3 {
        transform: translate(10vw, 0vw) rotate(0deg);
    }

    .card-stack:hover #card-4 {
        transform: translate(30vw, 0vw) rotate(0deg);
    }

    .card-stack:hover #top-card:hover {
        transform: translate(-30vw, 0vw) scale(1.05);
        z-index: 2;
    }

    .card-stack:hover #card-2:hover {
        transform: translate(-10vw, 0vw) scale(1.05);
        z-index: 2;
    }

    .card-stack:hover #card-3:hover {
        transform: translate(10vw, 0vw) scale(1.05);
        z-index: 2;
    }

    .card-stack:hover #card-4:hover {
        transform: translate(30vw, 0vw) scale(1.05);
        z-index: 2;
    }

    @media screen and (max-width: 500px) {
        .card {
            font-size: 1rem;
        }

        #hidden {
            transition: 500ms;
        }

        .card-stack:hover #top-card {
            transform: translate(0vw, 0vh) rotate(0deg);
        }

        .card-stack:hover #card-2 {
            transform: translate(0vw, 35vh) rotate(0deg);
        }

        .card-stack:hover #card-3 {
            transform: translate(0vw, 70vh) rotate(0deg);
        }

        .card-stack:hover #card-4 {
            transform: translate(0vw, 105vh) rotate(0deg);
        }


        .card-stack:hover #top-card:hover {
            transform: translate(0vw, 0vh) scale(1.05);
            z-index: 2;
        }

        .card-stack:hover #card-2:hover {
            transform: translate(0vw, 35vh) scale(1.05);
            z-index: 2;
        }

        .card-stack:hover #card-3:hover {
            transform: translate(0vw, 70vh) scale(1.05);
            z-index: 2;
        }

        .card-stack:hover #card-4:hover {
            transform: translate(0vw, 105vh) scale(1.05);
            z-index: 2;
        }

        .card-stack:hover #hidden {
            width: 200px;
            /* height: clamp(190px, 18.75vw, 500px); */
            height: 120vh;
        }
    }
</style>
