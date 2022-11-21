<script>
export default{
    name: 'AppHeader'
}
</script>

<template>

    <div class="info py-3 text-light">
        <div class="container d-flex justify-content-between gap-3">
            <div>
                <!--inserire icone i = icona-->
                <span>(icon) Open Hours: Mon - Sat - 9:00 - 18-00</span>
            </div>

            <div class="d-flex gap-3">
                <span>(icon) +1(305) 1234 5678</span>
                <span>(icon) hello@example.com</span>
                <span>(icon)</span>
                <span>(icon)</span>
                <span>(icon)</span>
            </div>
        </div>
    </div>

    <div class="nav_bg">
        <div class="container py-4 d-flex justify-content-between">
            <div class="text-uppercase">
                <!--modificare logo-->
                <span class="text-success">nex</span><span>gen</span>
            </div>

            <div class="text-uppercase d-flex gap-3">
                <span><a href="">home</a></span>
                <span><a href="">about</a></span>
                <span><a href="">services</a></span>
                <span><a href="">princing</a></span>
                <span><a href="">blog</a></span>
                <button>get in touch</button>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
.info{
    background-color: #24333d;

}

.nav_bg{
    //aggiustare filtro
    background-image: url(../assets/img/hero-image.png);
    filter: brightness(0.4);
    background-size: cover;
    height: 700px;
}
a{
    text-decoration: none;
}
</style>