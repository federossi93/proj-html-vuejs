<script>

export default {
    name: 'AppJumbo'
}

</script>


<template>

    <div class="jumbo text-light text-center">
        <h1 class="fw-bold">Lead ~ <span class="bg_text">Costumer</span> </h1>
        <p class="text_color">Successful strategis require data analysis, creativity and costumer focus, talking
            advantage of the lastest
            tecnologies to offer exellent service.
        </p>
        <div class="mt-5">
            <button class="btn_trasparent mx-2 text-uppercase">get in touch</button>
            <button class="btn_trasparent mx-2 text-uppercase">read more</button>
        </div>
    </div>

</template>

<style lang="scss" >
@use '../../../src/assets/scss/partials/variables.scss' as *;

.jumbo {
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 400px;
    z-index: 100000;

    .bg_text {
        display: inline-block;
        padding: 0.5rem;
        background-color: $bg-trasparent;
    }

    .text_color {
        color: $text-grey;
    }

    .btn_trasparent:hover {
        background-color: $bg-green;
    }

    .btn_trasparent {
        color: white;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 1px solid $bg-green;
        border-radius: 5px;
    }
}
</style>