<!-- contact form at end of landing page -->

<script>

    import { state } from "../stores/dark-mode-state";

    let formBackdropColor;
    let boxShadow;
    let formFieldsColor;
    let textColor;

    $: {
        formBackdropColor = $state ? '#36393F' : 'whitesmoke';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(220, 220, 220), -10px -10px 0px rgb(250, 250, 250)';
        formFieldsColor = $state ? 'rgb(70, 70, 75)' : 'white';
        textColor = $state ? 'whitesmoke' : 'black';
    }

</script>

<div class="wrapper">
    <div class="form-icon">
        <img src="/images/unsplash-contact-art.png" alt="placeholder">
    </div>
    <div class="contact-form" style="background-color: {formBackdropColor}; box-shadow: {boxShadow};">
        <div class="title">
            <span>tell us how we can do better!</span>
        </div>
        <div class="contact-information">
            <input type="text" placeholder="name" style="background-color: {formFieldsColor}; color: {textColor};">
            <input type="text" placeholder="email" style="background-color: {formFieldsColor}; color: {textColor};">
        </div>
        <div class="message" style="background-color: {formFieldsColor};">
            <textarea cols="30" rows="10" placeholder="message" style="background-color: {formFieldsColor}; color: {textColor};"></textarea>
        </div>
        <div class="submit-form" style="background-color: {formFieldsColor};">
            <button type="button">submit</button>
            <button type="button" style="background-color: tomato;">cancel</button>
        </div>
    </div>
</div>

<style>
    img {
        width: 15vw;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        gap: 5ch;
        padding: 50px 0;
    }
    
    .contact-form {
        background-color: whitesmoke;
        padding: 3ch;
        border-radius: 10px;
        width: 40%;
        transition: 500ms;
    }

    .title {
        font-family: 'Rubik';
        font-size: 2rem;
        color: darkgray;
        padding: 1ch;
        border-radius: 5px;
    }

    .contact-information {
        display: flex;
        justify-content: center;
        gap: 5ch;
        margin-top: 2ch;
        border-radius: 5px;
    }

    .contact-information input {
        padding: 2.5ch;
        width: 50%;
        outline: none;
        border: hidden;
        background-color: white;
        border-radius: 5px;
        transition: 500ms;
    }
    
    .message {
        padding: 2ch;
        background-color: white;
        margin-top: 2ch;
        border-radius: 5px;
        transition: 500ms;
    }

    .message textarea {
        width: 100%;
        outline: none;
        border: hidden;
        height: auto;
        font-family: 'Rubik';
        transition: 500ms;
    }

    .submit-form {
        padding: 2ch;
        margin-top: 2ch;
        background-color: white;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        transition: 500ms;
    }

    .submit-form button {
        padding: 2ch;
        width: 30%;
        background-color: cornflowerblue;
        color: white;
        outline: none;
        border: hidden;
        border-radius: 5px;
        transition: 250ms;
    }

    .submit-form button:hover {
        transform: scale(1.05);
        background-color: lightseagreen;
    }

    @media screen and (max-width: 500px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
        }

        img {
            width: 30vw;
        }

        .contact-form {
            width: 80%;
            box-shadow: none;
        }

        .contact-information {
            flex-direction: column;
            align-items: center;
            gap: 2ch;
            padding: 2.2ch;
        }

        .contact-information input {
            width: 100%;
        }
    }
</style>
