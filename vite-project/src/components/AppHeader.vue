<script>
import AppJumbo from './headerComponent/AppJumbo.vue';
import AppGeneralSocial from './headerComponent/AppGeneralSocial.vue';
import AppNavbar from './headerComponent/AppNavbar.vue';

export default {
    name: "AppHeader",
    components: {
    AppGeneralSocial,
    AppNavbar,
    AppJumbo
}
}
</script>

<template>
    <!--general info + social-->
    <AppGeneralSocial />


    <!--nav bar-->
    <AppNavbar />


    <!--jumbo-->
    <AppJumbo />

</template>


<style lang="scss" scoped>

</style>