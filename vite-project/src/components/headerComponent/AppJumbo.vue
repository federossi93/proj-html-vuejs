<script>

export default {
    name: 'AppJumbo'
}

</script>


<template>

    <div class="jumbo text-light text-center">
        <h1>Lead ~ Costumer</h1>
        <p>Successful strategis require data analysis, creativity and costumer focus, talking advantage of the lastest
            tecnologies to offer exellent service.
        </p>
        <div class="mt-5">
            <button class="btn_green mx-2 text-uppercase">get in touch</button>
            <button class="btn_trasparent mx-2 text-uppercase">read more</button>
        </div>
    </div>

</template>

<style lang="scss">

.jumbo {
    width: 35%;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    top: 400px;
    z-index: 100000;

    .btn_green {
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        background-color: #038483;
        border-radius: 5px;
    }

    .btn_trasparent {
        color: white;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 1px solid #038483;
        border-radius: 5px;
    }
}

</style>