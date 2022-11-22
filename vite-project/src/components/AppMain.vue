<script>
import AppGeneralInfo from './mainComponent/AppGeneralInfo.vue';
import AppCompany from './mainComponent/AppCompany.vue'
import AppExelllenceService from './mainComponent/AppExelllenceService.vue';
import AppMonthlyPlans from './mainComponent/AppMonthlyPlans.vue';
import AppLastNews from './mainComponent/AppLastNews.vue';
import AppNewsLetter from './mainComponent/AppNewsLetter.vue';
import AppSendMessage from './mainComponent/AppSendMessage.vue';


export default {
    name: "AppMain",
    components: {
    AppGeneralInfo,
    AppCompany,
    AppExelllenceService,
    AppMonthlyPlans,
    AppLastNews,
    AppNewsLetter,
    AppSendMessage
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

    <AppSendMessage />

</template>



<style lang="scss">

</style>