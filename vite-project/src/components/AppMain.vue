<script>
import AppGeneralInfo from './mainComponent/AppGeneralInfo.vue';
import AppCompany from './mainComponent/AppCompany.vue'
import AppExelllenceService from './mainComponent/AppExelllenceService.vue';
import AppMonthlyPlans from './mainComponent/AppMonthlyPlans.vue';
import AppLastNews from './mainComponent/AppLastNews.vue';
import AppNewsLetter from './mainComponent/AppNewsLetter.vue';


export default {
    name: "AppMain",
    components: {
    AppGeneralInfo,
    AppCompany,
    AppExelllenceService,
    AppMonthlyPlans,
    AppLastNews,
    AppNewsLetter
}
}

</script>


<template>

    <AppGeneralInfo />

    <AppCompany />

    <AppExelllenceService />

    <AppMonthlyPlans />

    <AppLastNews />

    <AppNewsLetter />


</template>



<style lang="scss">

</style>