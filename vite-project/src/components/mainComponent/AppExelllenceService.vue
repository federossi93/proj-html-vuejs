<script>
export default {
    name: 'AppExellenceService'
}
</script>

<template>

<!--excellence in services-->
<div class="service_bg  py-5">
        <div class="container">
            <div class="row">

                <span class="text_color text-uppercase pt-5 mb-4 fw-bold">our business areas</span>
                <h2 class="text-light mb-4 fw-bold">Excellence in <span class="bg_text ">Service</span></h2>

                <div class="col-9">
                    <span class="text">We are leaders in proving consultacy service with a set of cutting-edge
                        technologies and a team of <br> experienced and renowned professionals. These are some options
                        that
                        you cant hire.</span>
                </div>

                <div class="col-3 d-flex justify-content-end">
                    <button class="btn_trasparent text-uppercase">see all</button>
                </div>

            </div>
        </div>

        <!--service section card-->
        <div class="container py-5">
            <div class="row row-cols-3 py-5">

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-network-wired" /></span>
                        <h4 class="mt-4">Audit & Assurance</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-briefcase" /></span>
                        <h4 class="mt-4">Financial Advisory</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-chart-simple" /></span>
                        <h4 class="mt-4">Analytics and M&A</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-plane-up" /></span>
                        <h4 class="mt-4">Middle Marketing</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-globe" /></span>
                        <h4 class="mt-4">Legal Cosulting</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-5 rounded">
                        <span class="icons fs-2"><font-awesome-icon icon="fa-solid fa-inbox" /></span>
                        <h4 class="mt-4">Regulatory Risk</h4>
                        <p class="my-5 text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.service_bg {
    background-color: $bg-dark;

    .bg_text {
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background-color: $bg-trasparent;
        color: $bg-green;
    }

    .text_color {
        color: $bg-green;
    }

    .text{
        color: $text-grey;
    }
    .btn_trasparent {
        color: white;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 1px solid $bg-green;
        border-radius: 5px;
    }

    .icons{
        color:$bg-green;
        font-size: 1rem;
    }
}

</style>