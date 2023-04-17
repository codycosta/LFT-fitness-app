<!-- sign in form for login page -->

<script>

    import { state } from "../stores/dark-mode-state";

    let backgroundColor;
    let textColor;
    let formFieldsColor;
    let mainBackgroundColor;

    $: {
        backgroundColor = $state ? '#36393F' : 'whitesmoke';
        formFieldsColor = $state ? 'rgb(70, 70, 75)' : 'white';
        textColor = $state ? 'whitesmoke' : 'black';
        mainBackgroundColor = $state ? '#292B2F' : 'white';
    }

</script>

<div class="wrapper">

    <div class="welcome-page">
        <div class="welcome-text">
            <h2>Continue where you left off</h2>
        </div>
        <img src="/images/joy-young-woman-doing-sports.png" alt="meditation">
    </div>

    <div class="registration-form" 
        style:background-color={backgroundColor}>

        <div class="title">
            <p>Welcome Back!</p>
        </div>

        <div class="form-body">
            <div class="form-field">
                <i class="fa-regular fa-envelope"></i>
                <input type="text" placeholder="email address" 
                    style:background-color={formFieldsColor}
                    style:color={textColor}
                >
            </div>

            <div class="form-field">
                <i class="fa-solid fa-key"></i>
                <input type="text" placeholder="password" 
                    style:background-color={formFieldsColor}
                    style:color={textColor}
                >
            </div>
        </div>

        <div class="submit-form">
            <button>Put me in, Coach!</button>
        </div>
        
        <div class="socials">
            <p>Placeholder for future sign in option:</p>
            <div class="sign-in-options">

                <button
                    style:color=red
                    style:background-color={formFieldsColor}
                >
                    <i class="fa-brands fa-google"></i>

                </button>

                <button
                    style:color=cornflowerblue
                    style:background-color={formFieldsColor}
                >
                    <i class="fa-brands fa-facebook"></i>

                </button>
            </div>
        </div>

    </div>

</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 20px;
    }

    .welcome-page {
        background: url("/images/unsplash-vector-bg2.jpg");
        background-size: cover;
        width: 50vw;
        height: 80vh;
        display: grid;
        place-items: center;
        font-size: 2rem;
        font-family: 'Rubik';
        color: white;
        position: relative;
        border-radius: 15px;
    }

    .welcome-text {
        position: absolute;
        top: 40%;
        text-align: center;
        padding: 1ch;
        transform: rotate(-45deg);
    }

    .registration-form {
        border-radius: 15px;
        /* padding: 5ch; */
        transition: 500ms;
        width: 35vw;
        height: 80vh;
        color: darkgrey;
    }

    .title {
        font-family: 'Rubik';
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
        /* background-color: white; */
        /* padding: 20px; */
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
    }

    .submit-form button:hover {
        background-color: lightseagreen;
        transform: scale(1.05);
    }

    .socials {
        text-align: center;
    }

    .sign-in-options {
        display: flex;
        justify-content: center;
        gap: 3ch;
    }

    .sign-in-options button {
        font-size: 1.2rem;
        padding: 1ch;
        border-radius: 5px;
        border: hidden;
        outline: none;
        transition: 500ms;
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

        img {
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
