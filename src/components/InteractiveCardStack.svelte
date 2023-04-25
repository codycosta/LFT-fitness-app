<!-- hoverable expanding card stack for interactivity -->

<div class="card-stack" >
    <div id="hidden" class="card"></div>
    <div id="top-card" class="card stacked">
        <p class="heading">Performance Metrics <i class="fa-solid fa-diagram-project"></i></p>
        <hr>
        <p>View your progress and track your goals</p>
    </div>
    <div id="card-2" class="card stacked">
        <p class="heading">Personal Records <i class="fa-solid fa-book"></i></p>
        
        <hr>
        <p>Complete workouts. View PR's</p>
    </div>
    <div id="card-3" class="card stacked">
        <p class="heading">Routine Templating <i class="fa-solid fa-pen-to-square"></i></p>
        <hr>
        <p>build an arsenal of workout routines</p>
    </div>
    <div id="card-4" class="card stacked">
        <p class="heading">Recovery Management <i class="fa-regular fa-clock"></i></p>
        <hr>
        <p>set a timer rest between sets</p>
    </div>
</div>

<style>
    .card-stack {
        position: relative;
        display: flex;
        justify-content: center;
        width: 25%;
        margin: 0 37.5%;
    }

    .card {
        flex: 0 0 auto;
        border-radius: 8px;
        background-color: whitesmoke;
        width: clamp(140px, 12vw, 350px);
        aspect-ratio: 4/5;
        height: auto;
        color: darkslategrey;
        font-size: 1.4rem;
        font-family: 'Rubik';
        padding: 2ch;
        transition: 400ms;
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
        height: clamp(175px, 15vw, 437.5px);
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


    @media screen and (max-width: 500px) {
        .card {
            font-size: 1rem;
        }

        #hidden {
            transition: 400ms;
        }

        .card-stack:hover #top-card {
            transform: translate(-23vw, 0vh) rotate(0deg);
        }

        .card-stack:hover #card-2 {
            transform: translate(23vw, 0vh) rotate(0deg);
        }

        .card-stack:hover #card-3 {
            transform: translate(-23vw, 28vh) rotate(0deg);
        }

        .card-stack:hover #card-4 {
            transform: translate(23vw, 28vh) rotate(0deg);
        }

        .card-stack:hover #hidden {
            width: 200px;
            height: 50vh;
        }
    }
</style>
