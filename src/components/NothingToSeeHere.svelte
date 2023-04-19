<!-- placeholder until demo content is ready to put into the ad page -->

<div class="wrapper">
    <div class="message">
        <p>nothing to see here yet :(</p>
    </div>
    <video src="/gifs/keyboard-cat-gif.webm" autoplay loop>
        <track kind="captions">
    </video>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
    }

    .message {
        position: absolute;
        font-size: 2rem;
        font-family: 'Rubik';
    }

    video {
        border-radius: 10px;
        width: 40vw;
    }

    @media screen and (max-width: 500px) {
        .message {
            font-size: 1rem;
        }
    }
</style>
