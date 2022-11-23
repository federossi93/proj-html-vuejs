<script>
export default {
    name: "AppGeneralSocial"
}

</script>

<template>

    <div class="info py-3">
        <div class="container d-flex justify-content-between gap-3 text_color">
            <div>
                <!--inserire icone i = icona-->
                <span>
                    <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon - Sat - 9:00 - 18-00
                </span>

            </div>

            <div class="d-flex gap-3">
                <span>
                    <font-awesome-icon icon="fa-solid fa-phone" /> +1(305) 1234 5678
                </span>
                <span>
                    <font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com
                </span>
                <span>
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                </span>
                <span>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </span>
                <span>
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </span>
            </div>
        </div>
    </div>


</template>

<style lang="scss">
.info {
    background-color: #24333d;

}

.text_color {
    color: #C0C3D0;
}

</style>