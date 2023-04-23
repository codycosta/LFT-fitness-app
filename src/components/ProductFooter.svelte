<!-- Landing page footer with all legal/business info -->

<script>

    import { state } from "../stores/dark-mode-state";

    let svelteLogo = '/images/svelte-logo.png';
    let supabaseLogo = 'images/supabase-logo.png';

    let backgroundColor;
    let textColor;

    $: {
        backgroundColor = $state ? '#292B2F' : 'whitesmoke';
        textColor = $state ? 'lightgrey' : 'black';
    }

</script>

<footer style:background-color={backgroundColor} style:color={textColor}>
    <br>
    <!-- <hr> -->
    <br>
    <span class="organization-name">
        <i class="fa-solid fa-dumbbell"></i> L F T <i class="fa-solid fa-dumbbell"></i>
        <p>powered by:</p>
        <img src={svelteLogo} alt="sveltekit"><img src={supabaseLogo} alt="supabase">
    </span>
    <br>
    <h4>L F T, LLC</h4>

    <div class="legal-info">
        <p>PRIVACY POLICY</p>
        <p>ABOUT</p>
        <p>CONTACT</p>

    </div>
    
</footer>

<style>
    footer {
        text-align: center;
        transition: 500ms;
    }

    .organization-name {
        font-size: 2rem;
        padding: 0 10px;
        font-family: monospace;
    }

    .organization-name i {
        font-size: 1.5rem;
    }

    .organization-name p {
        font-size: 0.75rem;
        font-family: 'Rubik';
    }

    .organization-name img {
        width: 80px;
        padding: 0ch 1ch;
    }

    .legal-info {
        display: flex;
        justify-content: center;
        font-family: monospace;
        font-size: 1rem;
    }

    .legal-info p {
        padding: 0 15px;
    }
</style>
