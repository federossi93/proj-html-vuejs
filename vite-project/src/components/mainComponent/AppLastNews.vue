<script>

export default {
    name: 'AppLastNews'
}

</script>

<template>

    <!--last news-->
    <div class="container last_news py-5">
        <div class="py-5">
            <span class="text-uppercase text-success">our editorial content</span>
            <h2>Latest <span class="text-success">News</span></h2>
            <div class="d-flex justify-content-between align-items-center">
                <span>Every week we publish content abou what is best in the business world.</span>
                <button class="btn_green mx-2 text-uppercase">see all</button>
            </div>
        </div>

        <div class="row row-cols-3 mb-5">
            <div class="col ">
                <div class="card position-relative">
                    <img class="rounded filter" src="../../assets/img/news-1.jpg" alt="">
                    <span class="position_text text-light fw-bold">Increasing creativity is possible for everyone</span>
                </div>
            </div>

            <div class="col ">
                <div class="card position-relative">
                    <img class="rounded filter" src="../../assets/img/news-2.jpg" alt="">
                    <span class="position_text text-light fw-bold text-center">Because market research is part of the
                        business plan</span>
                </div>
            </div>

            <div class="col ">
                <div class="card position-relative">
                    <img class="rounded filter" src="../../assets/img/news-3.jpg" alt="">
                    <span class="position_text text-light fw-bold">Increasing creativity is possible for everyone</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

.last_news {

    .btn_green {
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        background-color: #038483;
        border-radius: 5px;
    }

    .position_text {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%);
    }

    .filter {
        filter: brightness(0.4);
    }

}

</style>