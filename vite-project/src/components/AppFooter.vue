<script>
import { state } from "../state";

export default {
    name: 'AppFooter',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="footer_bg py-5">
        <div class="container py-5">
            <div class="row justify-content-between">
                <div class="col-2 ">
                    <div class="text-light">
                        <h2><span class="text_next">nex</span><span class="text-light">gen</span></h2>
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
                            <button class="btn_trasparent text-uppercase">get in touch</button>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="bg-dark text-light rounded card px-5">
                        <h4 class="my-3">About</h4>
                        <ul>
                            <li class="py-2" v-for="item in state.cardFooter[0].about">
                                <a href="">
                                    <span class="fw-bold px-2"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>{{ item.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-2">
                    <div class="bg-dark text-light px-4 rounded card">
                        <h4 class="my-3">Services</h4>
                        <ul>
                            <li class="py-2" v-for="item in state.cardFooter[1].service">
                                <a href="">
                                    <span class="fw-bold px-2"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>{{ item.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-2">
                    <div class="bg-dark text-light px-4 rounded card">
                        <h4 class="my-3">Support</h4>
                        <ul>
                            <li class="py-2" v-for="item in state.cardFooter[2].support">
                                <a href="">
                                    <span class="fw-bold px-2"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>{{ item.name }}
                                </a>
                            </li>
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
                <div class="icons_footer fs-2 text-secondary">
                    <font-awesome-icon icon="fa-regular fa-circle-up" />
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

.footer_bg {
    background-color: #1e2223;

    .text_next {
        color: $bg-green;
        padding: 0.3rem 0;
        padding-left: 2rem;
        padding-right: 0.3rem;
        border-radius: 50px 0 0 50px;
        background-color: $bg-trasparent;
    }

    .btn_trasparent {
        color: white;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 1px solid #038483;
        border-radius: 5px;
    }

    .card {
        width: 300px;
        display: flex;
        align-items: center;
    }

    ul {
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;
        color:$text-grey ;
    }
}

.icons_footer {
    position: absolute;
    bottom: 6px;
    right: 20px;
}
</style>