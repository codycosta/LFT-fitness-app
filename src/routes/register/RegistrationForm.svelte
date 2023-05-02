<!-- registration form for registration page -->

<script>

    import { state } from "../../stores/dark-mode-state";
    import { fly } from "svelte/transition";

    let backgroundColor;
    let textColor;
    let boxShadow;
    let emphasisColor;
    let imgSrc;

    $: {
        backgroundColor = $state ? '#36393F' : 'whitesmoke';
        textColor = $state ? 'whitesmoke' : 'black';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(220, 220, 220), -10px -10px 0px rgb(250, 250, 250)';
        emphasisColor = $state ? '#34EBC3' : 'tomato';
        imgSrc = $state ? "url('/images/unsplash-vector-background.jpg')" : "url('/images/unsplash-vector-bg2.jpg')";
    }

    const videoSources = [
        "/gifs/marginalia-downloading.webm",
        "/gifs/keyboard-cat-gif.webm",
        "/gifs/meditation-gif.webm"
    ];

    const paragraphs = [
        "hit new personal records",
        "enjoy silly cats",
        "document your journey"
    ]

    let currentSrc = 0;
    let dir;

    const increment = () => {
        if (currentSrc === 2) return
        currentSrc += 1;
        dir = 1;
    }

    const decrement = () => {
        if (currentSrc === 0) return
        currentSrc -= 1;
        dir = -1;
    }

</script>

<div class="wrapper">

    <div class="welcome-page"
        style:box-shadow={boxShadow}
        style:background-color={backgroundColor}
    >

        <div class="welcome-text" style:color={emphasisColor}>
            <h2>Take charge of your fitness</h2>
        </div>

        {#key currentSrc}
        
        <div class="container" in:fly={{ x: dir * 200, duration: 600, delay: 150 }}>
            <video src={videoSources[currentSrc]} autoplay loop>
                <track kind="captions">
            </video>
            <p class="description">{paragraphs[currentSrc]}</p>
        </div>
            
        {/key}
               
        <div class="progress-indicator">
            <button class="toggle-content" on:click={decrement}> <i class="fa-solid fa-arrow-left"></i> </button>

            <button class="progress-blip" style:background-color={currentSrc === 0 ? emphasisColor : 'lightgrey'}/>
            <button class="progress-blip" style:background-color={currentSrc === 1 ? emphasisColor : 'lightgrey'}/>
            <button class="progress-blip" style:background-color={currentSrc === 2 ? emphasisColor : 'lightgrey'}/>
            
            <button class="toggle-content" on:click={increment}> <i class="fa-solid fa-arrow-right"></i> </button>
        </div>
        
    </div>

    <div class="registration-form" 
        style:background-image={imgSrc}
        style:background-size=cover 
        style:box-shadow={boxShadow}>

        <div class="title">
            <p>Get started with L F T!</p>
        </div>

        <div class="form-body">
            <div class="form-field">
                <i class="fa-regular fa-envelope"></i>
                <input type="text" placeholder="email address">
            </div>

            <div class="form-field">
                <i class="fa-solid fa-user-pen"></i>
                <input type="text" placeholder="username">
            </div>

            <div class="form-field">
                <i class="fa-solid fa-key"></i>
                <input type="text" placeholder="password">
            </div>

            <div class="form-field">
                <i class="fa-solid fa-unlock-keyhole"></i>
                <input type="text" placeholder="confirm password">
            </div>
        </div>

        <div class="submit-form">
            <button>Beam me up, Scotty!</button>
        </div>

    </div>


</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 50px;
    }

    .welcome-page {
        width: 50vw;
        height: 80vh;
        font-size: 2rem;
        font-family: 'Rubik';
        color: darkgrey;
        position: relative;
        border-radius: 15px;
        transition: 500ms;
    }

    .welcome-text {
        text-align: center;
        padding: 1ch;
        transition: 500ms;
    }


    .container {
        display: grid;
        place-items: center;
    }

    .description {
        text-align: center;
        font-family: 'Nothing You Could Do';
    }

    .container video {
        width: 20vw;
        border-radius: 10px;
        border: hidden;
        outline: none;
    }

    .toggle-content {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        outline: none;
        border: hidden;
        color: white;
        transition: 200ms;
        background-color: lightgrey;
        margin: 0 40px;
    }

    .toggle-content:hover {
        background-color: tomato;
    }

    .progress-indicator {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        width: 100%;
        padding-bottom: 20px;
    }

    .progress-blip {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: hidden;
        outline: none;
        margin: 0px 30px;
        transition: 500ms;
    }

    .registration-form {
        border-radius: 15px;
        transition: 500ms;
        width: 35vw;
        height: 80vh;
        color: white;
    }

    .title {
        font-family: 'Nothing You Could Do';
        text-align: center;
        font-size: 2rem;
        padding-top: 2ch;
    }

    .form-body {
        display: flex;
        flex-direction: column;
        gap: 3ch;
        margin-top: 50px;
    }

    .form-field {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5ch;
    }
    
    .form-field input {
        padding: 2ch;
        border-radius: 5px;
        border: hidden;
        outline: none;
        width: 50%;
        transition: 500ms;
    }

    .submit-form {
        display: grid;
        place-items: center;
        height: 30vh;
    }

    .submit-form button {
        padding: 2ch;
        outline: none;
        border: hidden;
        border-radius: 5px;
        background-color: cornflowerblue;
        color: white;
        font-size: 1.4rem;
        transition: 250ms;
        font-family: 'Nothing You Could Do';
    }

    .submit-form button:hover {
        background-color: lightseagreen;
        transform: scale(1.05);
    }

    @media screen and (max-width: 500px) {
        .welcome-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 10vh;
            width: 80vw;
            padding: 2ch 0;
        }

        .container, .description, .progress-indicator {
            display: none;
        }

        .welcome-text {
            font-size: 1.5rem;
            position: absolute;
            top: 0;
        }

        .registration-form {
            width: 80vw;
            height: 60vh;
        }

        .title {
            font-size: 1.5rem;
        }

        .wrapper {
            flex-direction: column;
        }

        .submit-form {
            height: 20vh;
        }

        .submit-form button {
            font-size: 1rem;
        }

        .form-field {
            gap: 2ch;
        }

        .form-field input {
            width: 70%;
        }
    }
</style>
