<script>

export default{
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
                        <span class="text-success text-uppercase">about the network</span>
                        <h2 class="my-3"><span class="text-success">The</span> Company</h2>
                        <!--cambiare color paragrafi-->
                        <p>
                            For 12, years we have been providing audit and warranty,finantial advice,risk advice,taxes
                            and related service to select clients.
                        </p>
                    </div>

                    <div class="col-5">
                        <h2><font-awesome-icon icon="fa-solid fa-medal" /> Traditional</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <h2><font-awesome-icon icon="fa-solid fa-lock" /> Security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <h2><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Certificate</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="col-5">
                        <h2><font-awesome-icon icon="fa-solid fa-graduation-cap" /> Expertise</h2>
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
.company {
    img {
        max-width: 100%;
    }

    .margin_right{
        padding-right: 1rem;
    }
}
</style>