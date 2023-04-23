<!-- landing page, advertise the product -->

<script>

    import BackToTopButton from '../components/BackToTopButton.svelte';
    import TitleScreen from '../components/TitleScreen.svelte';
    import ExperimentalProductIntro from '../components/ExperimentalProductIntro.svelte';
    import InteractiveCardStack from '../components/InteractiveCardStack.svelte';
    import ProductFooter from '../components/ProductFooter.svelte';
    import AboutUs from '../components/AboutUs.svelte';
    import FutureFeatures from '../components/FutureFeatures.svelte';
    import ContactForm from '../components/ContactForm.svelte';

    import NothingToSeeHere from '../components/NothingToSeeHere.svelte';

    import { state } from '../stores/dark-mode-state';

    // handle dark mode state

    let mainBackgroundColor;
    let mainTextColor;
    let sectionBreakStrongWordColor;

    // react to dark mode store changes

    $: {
        mainBackgroundColor = $state ? '#292B2F' : 'whitesmoke';
        mainTextColor = $state ? 'lightgrey' : 'black';
        sectionBreakStrongWordColor = $state ? '#34EBC3' : 'tomato';
    }

</script>


<main 
    style:background-color = {mainBackgroundColor}
    style:color = {mainTextColor}
>
    
    <BackToTopButton />
    <TitleScreen />
    
    <div class="section-break">
        <p>working out can be <strong style:color={sectionBreakStrongWordColor}>challenging</strong>...</p>
        <p class="section-support-description">but getting into shape doesn't have to be</p>
        <video src="/gifs/marginalia-downloading.webm" autoplay loop>
            <track kind="captions">
        </video>
    </div>

    <ExperimentalProductIntro />
    
    <div class="section-break">
        <p>
            View LFT at its  <strong style:color={sectionBreakStrongWordColor}>core</strong>
        </p>
        <p class="section-support-description">
            this is the foundation of LFT in its pre-alpha stage, with much more on the way!
        </p>
    </div>

    <InteractiveCardStack />

    <div class="section-break">
        <p>What's available <strong style:color={sectionBreakStrongWordColor}>now</strong>?</p>
        <p class="section-support-description">
            we want to first cultivate the best exercise experience for our users before expanding into futher territory
        </p>
        <p class="section-support-description">
            <strong style:color={sectionBreakStrongWordColor}>dev notes</strong>: let's include gif/video footage of use in both desktop and mobile formats
        </p>
    </div>

    <!-- show use of platform here when footage is ready (view strong app website for reference) -->
    <NothingToSeeHere />

    <div class="section-break">
        <p>What's <strong style:color={sectionBreakStrongWordColor}>next</strong>?</p>
        <p class="section-support-description">
            we belive in transparency and want to give our users a clear image of the roadmap
        </p>
    </div>

    <FutureFeatures />

    <div class="section-break">
        <p>Who are <strong style:color={sectionBreakStrongWordColor}>we</strong>?</p>
    </div>

    <AboutUs />

    <div class="section-break">
        <p>contact <strong style:color={sectionBreakStrongWordColor}>us</strong></p>
    </div>

    <ContactForm />

</main>


<ProductFooter />


<style>
    main {
        transition: 500ms;
    }

    .section-break {
        font-size: 4rem;
        text-align: center;
        font-family: 'Rubik';
        margin-top: 15vw;
        margin-bottom: 5vw;
    }

    .section-break a {
        /* text-decoration: none; */
        color: cornflowerblue;
    }

    .section-break strong {
        color: tomato;
        transition: 500ms;
    }

    .section-support-description {
        font-size: 1.5rem;
        color: darkgrey;
    }

    .section-break video {
        width: 15vw;
        border-radius: 10px;
    }

    @media screen and (max-width: 500px) {
        .section-break {
            font-size: 2rem;
            margin-top: 40vw;
        }

        .section-support-description {
            font-size: 0.7rem;
        }

        .section-break video {
            width: 30vw;
        }
    }
</style>
