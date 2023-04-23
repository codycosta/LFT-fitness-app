<!-- slider toggle switch -->

<script>

    // send checkbox value to the dark mode store

    import { state } from '../stores/dark-mode-state.js';

</script>

<label class="switch">

    <input type="checkbox" bind:checked={$state}>
    <span class="slider round"></span>

</label>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 35px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: lightgray;
        transition: 400ms;
    }

    .slider::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 400ms;
    }

    input:checked + .slider {
        background-color: #34EBC3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px cornflowerblue;
    }

    input:checked + .slider::before {
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 25px;
    }

    .slider.round::before {
        border-radius: 50%;
    }

    @media screen and (max-width: 500px) {
        .switch {
            width: 43px;
            height: 25px;
        }

        .slider::before {
            height: 18px;
            width: 18px;
        }

        input:checked + .slider::before {
            transform: translateX(18px);
        }
    }
</style>
