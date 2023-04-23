<!-- registration form for registration page -->

<script>

    import { state } from "../../stores/dark-mode-state";

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

</script>

<div class="wrapper">

    <div class="welcome-page"
        style:box-shadow={boxShadow}
        style:background-color={backgroundColor}>
        <div class="welcome-text" style:color={emphasisColor}>
            <h2>Take charge of your fitness</h2>
        </div>
        <video src="/gifs/marginalia-downloading.webm" autoplay loop>
            <track kind="captions">
        </video>
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
        background-size: cover;
        width: 50vw;
        height: 80vh;
        display: grid;
        place-items: center;
        font-size: 2rem;
        font-family: 'Nothing You Could Do';
        color: darkgrey;
        position: relative;
        border-radius: 15px;
        transition: 500ms;
    }

    .welcome-text {
        position: absolute;
        top: 0;
        text-align: center;
        padding: 1ch;
        transition: 500ms;
    }

    .welcome-page video {
        width: 50%;
        border-radius: 10px;
        border: hidden;
        outline: none;
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

        video {
            display: none;
        }

        .welcome-text {
            top: 0;
            font-size: 1.5rem;
            transform: rotate(0deg);
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
