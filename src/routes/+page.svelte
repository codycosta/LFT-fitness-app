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
        mainBackgroundColor = $state ? '#292B2F' : 'white';
        mainTextColor = $state ? 'lightgrey' : 'black';
        sectionBreakStrongWordColor = $state ? '#34EBC3' : 'tomato'
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
        <img src="/gifs/marginalia-downloading.gif" alt="weightlifting cartoon">
    </div>

    <ExperimentalProductIntro />
    
    <div class="section-break">
        <p>
            <a href="/register">sign up</a> 
            and get access to these features ( and <strong style:color={sectionBreakStrongWordColor}>more</strong> )
        </p>
        <p class="section-support-description">
            this is the core of LFT in its pre-alpha stage, with much more on the way!
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
        <p>What does the <strong style:color={sectionBreakStrongWordColor}>future</strong> hold?</p>
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
        <!-- <p class="section-support-description">
            enjoying LFT or have questions/ideas? Let us know!
        </p> -->
    </div>

    <ContactForm />

    <div class="section-break">
        <p>__</p>
    </div>

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
        /* background-color: aliceblue; */
    }

    .section-break a {
        /* text-decoration: none; */
        color: cornflowerblue;
    }

    .section-break strong {
        color: tomato;
    }

    .section-support-description {
        font-size: 1.5rem;
    }

    .section-break img {
        width: 15vw;
    }
</style>
