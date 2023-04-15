<!-- registration form for registration page -->

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
            <h2>Take charge of your fitness, the smart way</h2>
        </div>
        <img src="/images/daily-meditating-woman.png" alt="meditation">
    </div>

    <div class="registration-form" style:background-color={backgroundColor}>

        <div class="title">
            <p>Get started with L F T</p>
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
                <i class="fa-solid fa-user-pen"></i>
                <input type="text" placeholder="username" 
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

            <div class="form-field">
                <i class="fa-solid fa-unlock-keyhole"></i>
                <input type="text" placeholder="confirm password" 
                    style:background-color={formFieldsColor}
                    style:color={textColor}
                >
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
        gap: 20px;
    }

    .welcome-page {
        background: url("/images/unsplash-vector-background.jpg");
        background-size: cover;
        width: 50vw;
        height: 80vh;
        display: grid;
        place-items: center;
        font-size: 2rem;
        font-family: 'Rubik';
        color: lightgrey;
        position: relative;
        border-radius: 15px;
    }

    .welcome-text {
        position: absolute;
        top: 0;
        text-align: center;
        padding: 1ch;
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
    }

    .submit-form {
        /* background-color: white; */
        padding: 20px;
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
</style>
