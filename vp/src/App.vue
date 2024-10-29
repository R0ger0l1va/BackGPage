<template>
  <v-app class = "bg-grey-lighten-3">
    <Navbar/>
    <v-main class = "mx-16">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
//
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>

</style>
