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
            <div class="col-6 align-self-center ">
                <div class="row px-5 space">
                    <div class="col-12 py-5">
                        <span class="text-success text-uppercase">about the network</span>
                        <h2 class="my-3"><span class="text-success">The</span> Company</h2>
                        <!--cambiare color paragrafi-->
                        <p>
                            For 12, years we have been providing audit and warranty,finantial advice,risk advice,taxes
                            and related service to select clients.
                        </p>
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

    .space{
        width: 70%;

    }
}
</style>