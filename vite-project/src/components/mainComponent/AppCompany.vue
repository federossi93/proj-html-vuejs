<script>

export default {
    name: 'AppCompany'
}

</script>

<template>
    <!--###############
    FIXSPACE COL
###############-->

    <!--the company-->
    <div class="container-fluid company ">
        <div class="row justify-content-end">
            <div class="col-5 align-self-center ">
                <div class="row justify-content-end margin_right">
                    <div class="col-10 py-5">
                        <span class="text-uppercase fw-bold text_color">about the network</span>
                        <h2 class="my-3 fw-bold"><span class="bg_text">The</span> Company</h2>
                        <!--cambiare color paragrafi-->
                        <p>
                            For 12, years we have been providing audit and warranty,finantial advice,risk advice,taxes
                            and related service to select clients.
                        </p>
                    </div>

                    <div class="col-5">
                        <div class="d-flex align-items-center">
                            <span class="fs-4 icon">
                                <font-awesome-icon icon="fa-solid fa-medal" />
                            </span>
                            <h2> Traditional</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <div class="d-flex align-items-center">
                            <span class="fs-4 icon">
                                <font-awesome-icon icon="fa-solid fa-lock" />
                            </span>
                            <h2>Security</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <div class="d-flex align-items-center">
                            <span class="fs-4 icon">
                                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                            </span>
                            <h2>Certificate</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <div class="d-flex align-items-center">
                            <span class="fs-4 icon">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                            </span>
                            <h2>Expertise</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div class="col-6 p-0 img_contain">
                <img src="../../assets/img/about-3.jpg" alt="">
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.company {
    .bg_text {
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background-color: $bg-trasparent;
        color: $bg-green;
    }

    .text_color {
        color: $bg-green;
    }

    .icon {
        margin-right: 1rem;
        color: $bg-green ;
    }

    img {
        max-width: 100%;
    }

    .margin_right {
        padding-right: 1rem;
    }
}
</style>