<script>
export default {
    name: 'AppNavbar'
}
</script>

<template>

    <div class="nav position-relative">

        <div class="jumbo_bg"></div>

        <div class="content container py-4 d-flex justify-content-between align-items-center">
            <div class="text-uppercase fs-4 fw-bold">
                <!--modificare logo-->
                <span class="text_next">nex</span><span class="text-light">gen</span>
            </div>

            <div class="text-uppercase d-flex gap-3 align-items-center">
                <span><a href="">home</a></span>
                <span><a href="">about</a></span>
                <span><a href="">services</a></span>
                <span><a href="">princing</a></span>
                <span><a href="">blog</a></span>
                <button class="btn_green text-uppercase">get in touch</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../../../src/assets/scss/partials/variables.scss' as *;

.jumbo_bg {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    background-image: url(../../assets/img/hero-image.png);
    filter: brightness(0.4);
    background-position: bottom;
    background-size: cover;
    height: 800px;
}

.content {
    position: relative;
    left: 0;
    right: 0;
    z-index: 100000;

    .text_next {
        color: $bg-green;
        padding: 0.3rem 0;
        padding-left: 2rem;
        padding-right: 0.3rem;
        border-radius: 50px 0 0 50px;
        background-color: $bg-trasparent;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .btn_green {
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        background-color: #038483;
        border-radius: 5px;
    }
}
</style>