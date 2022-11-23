<script>
export default {
    name: 'AppSendMessage'
}

</script>

<template>

    <div class="send_message py-5">
        <div class="container py-5">
            <div class="row">

                <div class="col-7">
                    <span class="text-uppercase fw-bold text_color">send a message</span>
                    <h2 class="my-3 fw-bold">Get in <span class="bg_text">Touch</span></h2>
                    <div class="pb-5">We will respond to your message as soon as possible</div>
                    <!--form date-->
                    <div class="row row-cols-2">
                        <div class="col mb-3">
                            <input type="text" class="form-control" placeholder="Name">
                        </div>

                        <div class="col">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>

                        <div class="col mb-3">
                            <input type="text" class="form-control" placeholder="Phone">
                        </div>

                        <div class="col">
                            <select id="inputState" class="form-select">
                                <option selected><span class="text-success">More info</span></option>
                                <option>...</option>
                            </select>
                        </div>

                        <div class="col-12">
                            <input type="text" class="form-control text_area" rows="10" placeholder="Message">
                        </div>
                    </div>
                    <button class="btn_green text-uppercase mt-4">send</button>
                </div>

                <div class="col-4 px-5">
                    <h4>Example Inc.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Present diam lacus,dapibus sed imperdiet consecteur.</p>
                    <div class="my-2 d-flex align-items-center">
                        <span class="icons">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                        </span>
                        <span class="text_color mx-2"> +1 (305 1234-5678)</span>
                    </div>

                    <div class="my-2 d-flex align-items-center">
                        <span class="icons">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                        </span>
                        <span class="text_color mx-2"> +1 (305 1234-5678)</span>
                    </div>

                    <div class="my-2 d-flex align-items-center">
                        <span class="icons">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <span class="text_color mx-2"> +1 (305 1234-5678)</span>
                    </div>

                    <div class="my-4">
                        <button class="btn_form text-uppercase ">view map</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.send_message {

    .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: $bg-icons;
        color:$bg-green ;
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }

    .bg_text {
        display: inline-block;
        padding: 0.2rem 0.7rem;
        background-color: $bg-trasparent;
        color: $bg-green;
    }

    .text_color {
        color: $bg-green;
    }

    .text_area {
        padding-bottom: 100px;
    }

    .btn_green {
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        background-color: #038483;
        border-radius: 5px;
    }

    .btn_form {
        color: #038483;
        border: none;
        padding: 0.5rem 1rem;
        border: 1px solid #038483;
        background-color: white;
        border-radius: 5px;
    }
}
</style>