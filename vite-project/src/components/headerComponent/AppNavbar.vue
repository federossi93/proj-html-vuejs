<script>
import { state } from "../../state";

export default {
    name: 'AppNavbar',
    data() {
        return {
            state
        }
    }
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

            <div class="d-flex align-items-center">
                <div class="text-uppercase gap-3 " v-for="navElement in state.navBar">
                    <span class="nav_hover rounded-2 "><a href="">{{ navElement.name }}</a></span>
                </div>
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

    .nav_hover {
        padding: 0.5rem 1rem;
    }

    .nav_hover:hover {
        background-color: $bg-green;
    }
}
</style>