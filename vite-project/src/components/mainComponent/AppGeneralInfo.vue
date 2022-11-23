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
                        <span class="icons fs-3"><font-awesome-icon icon="fa-solid fa-user-group" /></span>
                        <h4 class="mt-4">Human Capital</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-light p-5 rounded-4">
                        <span class="icons fs-3"><font-awesome-icon icon="fa-solid fa-chart-pie" /></span>
                        <h4 class="mt-4">Core Business</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

                <div class="col my-3">
                    <div class="bg-light p-5 rounded-4">
                        <span class="icons fs-3"><font-awesome-icon icon="fa-solid fa-gauge " /></span>
                        <h4 class="mt-4">Performance</h4>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.general_info {
    margin-top: 710px;
    background-color: $bg-Ge-card;

    .container_cards {
        max-width: 1280px;
        margin: auto;
    }

    .icons{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: $bg-icons ;
        color: $bg-green;
        border-radius: 50%;
        height: 60px;
        width: 60px;
    }
}
</style>