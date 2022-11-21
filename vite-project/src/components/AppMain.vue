<script>

export default {
    name: 'AppMain'
}

</script>


<template>

    <!--general info-->
    <div class="general_info">
        <div class="container container_cards py-5">
            <div class="row gap-4 py-5">

                <div class="col bg-light p-4">
                    <span>(icons)</span>
                    <h4 class="mt-3">Human Capital</h4>
                    <p>Humanzing business: Harnsess the power of tecnology to impoveved the way peaple work.</p>
                </div>

                <div class="col bg-light p-4">
                    <span>(icons)</span>
                    <h4 class="mt-3">Human Capital</h4>
                    <p>Humanzing business: Harnsess the power of tecnology to impoveved the way peaple work.</p>
                </div>

                <div class="col bg-light p-4">
                    <span>(icons)</span>
                    <h4 class="mt-3">Human Capital</h4>
                    <p>Humanzing business: Harnsess the power of tecnology to impoveved the way peaple work.</p>
                </div>
            </div>
        </div>
    </div>

    <!--the company-->

    <div class="container-fluid company">
        <div class="row">
            <div class="col-6 align-self-center ">
                <div class="row">
                    <div class="col-12 py-5">
                        <span class="text-success text-uppercase">about the network</span>
                        <h2 class="my-3"><span class="text-success">The</span> Company</h2>
                        <!--cambiare color paragrafi-->
                        <p>For 12, years we have been providing audit and warranty,finantial advice,risk advice,taxes
                            and related service to select clients.</p>
                    </div>

                    <div class="col-6">
                        <h2>Traditional</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-6">
                        <h2>Security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-6">
                        <h2>Certificate</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-6">
                        <h2>Expertise</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div class="col-6 p-0 img_contain">
                <img src="../assets/img/about-3.jpg" alt="">
            </div>
        </div>
    </div>

    <!--excellence in services-->
    <div class="service_bg py-5">
        <div class="container container_cards">
            <span class="text-success text-uppercase">our business areas</span>
            <h2 class="text-light">Excellence in <span class="bg-success">Service</span></h2>
        </div>
    </div>

</template>



<style lang="scss">
.general_info {
    margin-top: 710px;
    background-color: #e3e7df;

    .container_cards {
        width: 70%;
        margin: auto;
    }
}

.company {
    img {
        max-width: 100%;
        
    }
}

.service_bg{
    background-color: #1e2223;
    .container_cards {
        width: 70%;
        margin: auto;
    }
}
</style>