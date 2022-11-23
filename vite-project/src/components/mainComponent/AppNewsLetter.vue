<script>
export default {
    name: 'AppNewsLetter'
}
</script>

<template>

    <div class="news_letter">
        <div class="container py-5 px-5">
            <div class="row row-cols-2 py-5 px-5">
                <div class="col">
                    <span class="text_color fw-bold text-uppercase">newsletter</span>
                    <h2 class="text-light fw-bold my-4"><span class="bg_text">Knows</span> First</h2>
                    <p class="text">Follow closely and reactive content about our company <br>
                        and the news of the current market.</p>
                </div>

                <div class="col">
                    <div class="mb-3">
                        <input type="email" class="form-control opacity-50" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Name">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control opacity-50" id="exampleInputPassword1"
                            placeholder="Email">
                    </div>
                    <button class="btn_green text-uppercase">subscribe</button>

                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.news_letter {
    background-image: url(../../assets/img/bg-1.jpg);
    background-position: center;
    background-repeat: no-repeat;

    .bg_text {
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background-color: $bg-trasparent;
    }

    .text_color {
        color: $bg-green;
    }

    .text{
        color:$text-grey ;
    }
    .btn_green {
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        background-color: $bg-green;
        border-radius: 5px;
    }
}
</style>