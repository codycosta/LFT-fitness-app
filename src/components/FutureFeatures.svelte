<!-- breakdown of what to be expected following the alpha of the app (will probably see these in the beta) -->

<script>
    import { state } from '../stores/dark-mode-state.js';
    import { pageContent } from './FutureFeatures.js'

    let cardColor;
    let boxShadow;

    $: {
        cardColor = $state ? '#36393F' : 'whitesmoke';
        boxShadow = $state ? '10px 10px 0px #202225' : '10px 10px 0px rgb(220, 220, 220), -10px -10px 0px rgb(250, 250, 250)';
    }

    let ypos
    let cards = []
    let cardWidth = 'clamp(250px, 10vw, 600px)'
    let displayType
    let active = false
    let cardHeight = '200px'
    
    const animate = () => {
        if (ypos > 4.5 * window.innerHeight && window.innerWidth > 500) {
            cardWidth = '50vw'
            displayType = 'flex'
            active = true
        } 
        
        else if (ypos > 3.75 * window.innerHeight && window.innerWidth < 500) {
            displayType = 'block'
            active = true
            cardHeight = '400px'
        }
    }

</script>

<svelte:window bind:scrollY={ypos} on:scroll={animate}/>

{#each pageContent as {title, description, image}, i}
    <div class="content-card-wrapper">

        <div class="content-card" bind:this={cards[i]}
            style:background-color={cardColor}
            style:box-shadow={boxShadow}
            style:width={cardWidth}
            style:height={cardHeight}
            style:display={displayType}
            style:transition-delay={i * 400}ms
        >
            <div class="title">
                {@html title}
            </div>

            <div class="description"
                class:description-active={active}
                style:transition-delay={i * 500}ms
            >
                {@html description}    
            </div>

            <div class="image">
                <img src={image} alt="picture {i}">
            </div>

        </div>

    </div>
{/each}

<style>
    .content-card-wrapper {
        padding: 50px 0;
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 1.8rem;
        font-family: 'Rubik';
        padding-right: 1ch;
    }

    .content-card {
        box-shadow: 0px 30px 30px lightgray;
        border-radius: 10px;
        width: clamp(250px, 10vw, 600px);
        padding: 3ch;
        text-align: center;
        font-family: 'Rubik';
        color: darkgray;
        background-color: whitesmoke;
        font-size: 1rem;
        transition: 400ms;
        overflow: hidden;
    }

    .description {
        color: transparent;
    }

    .description-active {
        border-left: solid lightgray 1px;
        padding-left: 2ch;
        color: darkgrey;
        transition: color 500ms ease-in;
        width: 50%;
    }

    .image {
        width: 25%;
    }

    .image img {
        width: 150%;
    }

    @media screen and (max-width: 500px) {
        .content-card-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 5ch;
        }

        .content-card {
            width: 250px;
            display: block;
            text-align: center;
        }

        .description-active {
            border-left: hidden;
            border-top: solid lightgray 1px;
            padding-left: 0px;
            color: darkgrey;
            text-align: center;
            width: 100%;
        }

        .image {
            width: 90%;
        }

    }
</style>
