<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <div class="footer_bg py-5">
        <div class="container py-5">
            <div class="row justify-content-between">
                <div class="col-2 ">
                    <div class="text-light">
                        <h2 class="text-uppercase"><span class="text-success ">nex</span>gen</h2>
                        <p>A Functional HTML Template for Corporate & Business.</p>
                        <div class="py-2">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <span class="mx-2">+1 (305) 1234-5678</span>
                        </div>

                        <div class="py-2">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                            <span class="mx-2">+1 (305) 1234-5678</span>
                        </div>

                        <div class="py-2">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                            <span class="mx-2">+1 (305) 1234-5678</span>
                        </div>

                        <div class="mt-3">
                            <button class="btn_trasparent text-uppercase">read more</button>
                        </div>
                    </div>
                </div>

                <div class="col-2   text-center">
                    <div class="bg-dark text-light py-4 h-100 rounded">
                        <h4 class="my-3">About</h4>
                        <ul class="">
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                        </ul>
                    </div>
                </div>

                <div class="col-2   text-center">
                    <div class="bg-dark text-light py-4 h-100 rounded">
                        <h4 class="my-3">Services</h4>
                        <ul class="">
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                        </ul>
                    </div>
                </div>

                <div class="col-2   text-center">
                    <div class="bg-dark text-light py-4 h-100 rounded">
                        <h4 class="my-3">Support</h4>
                        <ul class="">
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                            <li><a href=""></a>The Company</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--footer boot-->
    <div class="footer_boot bg-dark py-3 position-relative">
        <div class="container text-light d-flex justify-content-between">
            <div>
                Enjoy the low price. We are tracking any intention of privacy.
            </div>

            <div>
                &copy; 2020 NEXGEN is Proudly Powered by <span class="text-success">Codings.</span>
                <div class="prova fs-2 text-secondary">
                    <font-awesome-icon icon="fa-regular fa-circle-up" />
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
.footer_bg {
    background-color: #1e2223;

    .btn_trasparent {
        color: white;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 1px solid #038483;
        border-radius: 5px;
    }

    ul {
        list-style: none;
        padding: 0;
    }
}

.prova {
    position: absolute;
    bottom: 6px;
    right: 20px;
}
</style>