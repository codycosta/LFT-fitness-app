<!-- button to auto scroll back to the top of the page -->

<script>
    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } )
    }
</script>

<button on:click={scrollToTop} class="scroll-to-top-button">
    <i class="fa-solid fa-arrow-up"></i>
</button>

<style>
    .scroll-to-top-button {
        position: fixed;
        background-color: lightgrey;
        bottom: 0;
        z-index: 3;
        margin: 20px;
        outline: none;
        border: hidden;
        color: white;
        font-size: 2rem;
        padding: 8px 15px;
        border-radius: 50%;
        transition: 300ms;
    }

    .scroll-to-top-button:hover {
        transform: scale(1.1);
        cursor: pointer;
        background-color: cornflowerblue;
    }
</style>
