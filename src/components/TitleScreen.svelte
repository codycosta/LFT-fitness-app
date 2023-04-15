<!-- interactive logo screen where background + content changes with pointer move -->

<script>

    // title screen animation 

    let panel_width

    function handlePointerMove(e) { 
        panel_width = e.clientX / window.innerWidth * 100
    }

</script>

<div class="container" on:pointermove={handlePointerMove}>
    <div id="left" class="panel" style="width: {panel_width}%">
        <div class="text">
            <h1><span>L F T</span></h1>
            <!-- <p>your premium</p> -->
            <p>your one stop <span id="exercise">exercise</span> tracker</p>
            <!-- <p>completely free</p> -->
            <div class="buttons">
                <a href="/register"><i class="fa-solid fa-user-plus"></i></a>
                <a href="/login"><i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
        </div>
    </div>
    <div id="right" class="panel">
        <div class="text">
            <h1><span>L F T</span></h1>
            <!-- <p>your premium</p> -->
            <p>your one stop <span id="nutrition">nutrition</span> tracker</p>
            <!-- <p>completely free</p> -->
            <div class="buttons">
                <a href="/register"><i class="fa-solid fa-user-plus"></i></a>
                <a href="/login"><i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
        </div>
    </div>
</div>


<style>
    .container {
        position: relative;
        height: 100vh;
    }

    .panel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
        color: white;
    }

    #left {
        z-index: 1;
        /* background: url("/images/deadlift-lft.jpg"); */
        background: url("/images/workout-dark-unsplash.jpg");
        /* filter: grayscale(80%); */
        background-size: 100vw, auto;
    }

    #right {
        background: url("/images/coffee-2.jpg");
        background-size: 100vw, auto;
    }

    .text {
        text-align: center;
        width: 70vw;
        margin: 0 15vw;
        font-size: 2rem;
        font-family: 'Rubik';
        /* filter: grayscale(0%); */
    }

    /* .welcome {
        font-size: 1.5rem;
    } */

    .text h1 > span {
        font-family: monospace;
        font-size: 15rem;
        border-bottom: solid 1px white;
    }

    #exercise {
        color: goldenrod;
        /* font-size: 4rem; */
    }

    #nutrition {
        color: lightskyblue;
        /* font-size: 4rem; */
    }

    /* @media screen and (max-width: 850px) {
        #left {
            background: url("/images/unsplash-boxing.jpg");
            background-size: 100vw, auto;
            background-repeat: no-repeat;
        }
        #right {
            background: url("/images/darktheme-LFT.jpg");
            background-size: 100vw, auto;
            background-repeat: no-repeat;
        }
    } */

    .buttons {
        outline: none;
        border: hidden;
        border-radius: 5px;
        padding: 2ch;
        margin: 0 2ch;
        font-size: 1rem;
        z-index: 5;
    }

    .buttons a {
        padding: 2ch;
        background-color: cornflowerblue;
        border-radius: 10px;
        color: white;
        margin: 0 1ch;
    }


    @media screen and (max-width: 500px) {
        #left {
            background: black;
        }
        #right {
            background: tomato;
        }

        .text h1 > span {
            font-family: monospace;
            font-size: 6rem;
        }
    }
</style>
