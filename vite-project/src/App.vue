<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
}
}

</script>

<!--
  #creare variabile con i colori
-->

<template>
  <AppHeader />

  <AppMain />

  <AppFooter />

</template>

<style scoped>

</style>
