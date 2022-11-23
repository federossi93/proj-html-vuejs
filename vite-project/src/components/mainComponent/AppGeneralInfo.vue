<script>
export default {
    name: 'AppGeneralInfo'
}


</script>

<template>

    <!--general info-->
    <div class="general_info">
        <div class="container py-5">
            <div class="row row-cols-3 py-5">

                <div class="col my-3">
                    <div class="bg-light p-5 rounded-4">
                        <span class="icons"><font-awesome-icon icon="fa-solid fa-user-group" /></span>
                        <h4 class="mt-4">Human Capital</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-light p-5 rounded-4">
                        <span class="icons"><font-awesome-icon icon="fa-solid fa-chart-pie" /></span>
                        <h4 class="mt-4">Core Business</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-light p-5 rounded-4">
                        <span class="icons"><font-awesome-icon icon="fa-solid fa-gauge " /></span>
                        <h4 class="mt-4">Performance</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style lang="scss">

.general_info {
    margin-top: 710px;
    background-color: #e3e7df;

    .container_cards {
        max-width: 1280px;
        margin: auto;
    }

    .icons{
        display: flex;
        align-items: center;
        text-align: center;
        padding: 1rem;
        background-color:#DAECED ;
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }
}
</style>