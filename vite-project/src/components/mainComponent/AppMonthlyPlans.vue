<script>
export default {
    name: 'AppMonthlyPlans'
}
</script>

<template>

    <!--monthly plans-->
    <div class="plans_bg">
        <div class="plans container text-center">
            <div>
                <span class="text_color text-uppercase fw-bold">montthly plans</span>
                <h2 class="fw-bold"><span class="text_color bg_text">Pricing</span> Table</h2>
                <p class="py-4">We can help you deliver and execute your future, wherever you compete, using the latest
                    <br>
                    technologies, from strategy development to implementation.
                </p>
            </div>
        </div>
        <!--offers packages -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col ">
                    <div class="bg-light hover rounded">
                        <div class=" p-5 ">
                            <!--offers-->
                            <div class="text-center">
                                <span class="icons fs-1">
                                    <font-awesome-icon icon="fa-solid fa-rocket" />
                                </span>
                                <h4 class="mt-3">Standard</h4>
                                <div class="text_color mb-3">
                                    <span class="fs-5">$</span> <span class="fs-2 fw-bold">490</span>/ mo
                                </div>
                            </div>
                            <!--benefits-->
                            <div class="d-flex justify-content-between py-2">
                                <span>Standard Accounting</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Platform Access</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Business Orientation</span>
                                <span class="text_color fs-3">&#215;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Dedicated Consultant</span>
                                <span class="text_color fs-3">&#215;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Personal Assistance</span>
                                <span class="text_color fs-3">&#215;</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col">
                    <div class="bg-light rounded hover position-relative">
                        <div class=" p-5 ">
                            <!--offers-->
                            <div class="popular">
                                <span>Most <br> Popular</span>
                            </div>
                            <div class="text-center">
                                <span class="icons fs-1">
                                    <font-awesome-icon icon="fa-solid fa-briefcase" />
                                </span>
                                <h4 class="mt-3">Professional</h4>
                                <div class="text_color mb-3">
                                    <span class="fs-5">$</span> <span class="fs-2 fw-bold">890</span>/ mo
                                </div>
                            </div>
                            <!--benefits-->
                            <div class="d-flex justify-content-between py-2">
                                <span>Standard Accounting</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Platform Access</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Business Orientation</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Dedicated Consultant</span>
                                <span class="text_color fs-3">&#215;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Personal Assistance</span>
                                <span class="text_color fs-3">&#215;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col ">
                    <div class="bg-light hover rounded">
                        <div class=" p-5">
                            <!--offers-->
                            <div class="text-center">
                                <span class="icons fs-1">
                                    <font-awesome-icon icon="fa-solid fa-gem" />
                                </span>
                                <h4 class="mt-3">Ultimate</h4>
                                <div class="text_color mb-3">
                                    <span class="fs-5">$</span> <span class="fs-2 fw-bold">1.390</span>/ mo
                                </div>
                            </div>
                            <!--benefits-->
                            <div class="d-flex justify-content-between py-2">
                                <span>Standard Accounting</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Platform Access</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Business Orientation</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Dedicated Consultant</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Personal Assistance</span>
                                <span class="text_color fs-3">&#128504;</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.plans_bg {
    background-color: $bg-Ge-card;
    padding: 7rem 0;

    .plans {
        max-width: 1280px;
        margin: auto;
    }

    .bg_text {
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background-color: $bg-trasparent;
        color: $bg-green;
    }

    .text_color {
        color: $bg-green;
    }

    .icons {
        color: $bg-green;
        font-size: 1rem;
    }

    .popular {
        position: absolute;
        top: 10px;
        left: 0;
        font-size: 10px;
        background-color: $bg-green;
        padding: 0.3rem 0.5rem;
        padding-right: 1.5rem;
        border-radius: 0 20px 20px 0;
        color: white;
    }




    .hover:hover{
        box-shadow: 0 0 5px 0 $bg-green;
        padding: 1rem 0;
        margin: -1rem 0;
    }

    
}
</style>