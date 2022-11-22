<script>
export default {
    name: 'AppExellenceService'
}
</script>

<template>

<!--excellence in services-->
<div class="service_bg  py-5">
        <div class="container container_cards">
            <div class="row">

                <span class="text-success text-uppercase pt-5 mb-4">our business areas</span>
                <h2 class="text-light mb-4">Excellence in <span class="bg-success">Service</span></h2>

                <div class="col-9">
                    <span class="text-light">We are leaders in proving consultacy service with a set of cutting-edge
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
        <div class="container container_cards py-5">
            <div class="row row-cols-3 py-5">

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Audit & Assurance</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Financial Advisory</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Analytics and M&A</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Middle Marketing</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Legal Cosulting</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-dark text-light p-4 rounded">
                        <span>(icons)</span>
                        <h4 class="mt-3">Regulatory Risk</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button class="btn_trasparent text-uppercase">read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

.service_bg {
    background-color: #1e2223;

    .container_cards {
        max-width: 1280px;
        margin: auto;
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