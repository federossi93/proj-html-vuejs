<script>
export default{
    name: 'AppMonthlyPlans'
}
</script>

<template>

<!--monthly plans-->
<div class="plans_bg">
        <div class="plans container text-center">
            <div>
                <span class="text-success text-uppercase">montthly plans</span>
                <h2><span class="text-success">pricing</span> Table</h2>
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
                    <div class="bg-light p-5 rounded">
                        <!--offers-->
                        <div class="text-center">
                            <span>(icons)</span>
                            <h4 class="mt-3">Standard</h4>
                            <div class="text-success mb-3">
                                <span class="fs-5">$</span> <span class="fs-2 fw-bold">490</span>/ mo
                            </div>
                        </div>
                        <!--benefits-->
                        <div class="d-flex justify-content-between py-2">
                            <span>Standard Accounting</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Platform Access</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Business Orientation</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Dedicated Consultant</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Personal Assistance</span>
                            <span>(icons)</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-light p-5 rounded position-relative">
                        <div class="py-3">
                            <!--offers-->
                            <div class="popular">
                                <span>Most <br> Popular</span>
                            </div>
                            <div class="text-center">
                                <span>(icons)</span>
                                <h4 class="mt-3">Professional</h4>
                                <div class="text-success mb-3">
                                    <span class="fs-5">$</span> <span class="fs-2 fw-bold">890</span>/ mo
                                </div>
                            </div>
                            <!--benefits-->
                            <div class="d-flex justify-content-between py-2">
                                <span>Standard Accounting</span>
                                <span>(icons)</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Platform Access</span>
                                <span>(icons)</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Business Orientation</span>
                                <span>(icons)</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Dedicated Consultant</span>
                                <span>(icons)</span>
                            </div>

                            <div class="d-flex justify-content-between py-2">
                                <span>Personal Assistance</span>
                                <span>(icons)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col ">
                    <div class="bg-light p-5 rounded">
                        <!--offers-->
                        <div class="text-center">
                            <span>(icons)</span>
                            <h4 class="mt-3">Ultimate</h4>
                            <div class="text-success mb-3">
                                <span class="fs-5">$</span> <span class="fs-2 fw-bold">1.390</span>/ mo
                            </div>
                        </div>
                        <!--benefits-->
                        <div class="d-flex justify-content-between py-2">
                            <span>Standard Accounting</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Platform Access</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Business Orientation</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Dedicated Consultant</span>
                            <span>(icons)</span>
                        </div>

                        <div class="d-flex justify-content-between py-2">
                            <span>Personal Assistance</span>
                            <span>(icons)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<style lang="scss">

.plans_bg {
    background-color: #e3e7df;
    padding: 7rem 0;

    .plans {
        max-width: 1280px;
        margin: auto;
    }
}

.popular {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 10px;
    background-color: green;
    padding: 0.3rem 0.5rem;
    padding-right: 1.5rem;
    border-radius: 0 20px 20px 0;
    color: white;
}

</style>