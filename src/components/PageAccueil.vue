<script setup>
import Contact from './Contact.vue';
import Navbar from './Navbar3.vue';
import Accueil from './Accueil/Accueil.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Accueil />
    <Contact />
</template>

<style>
</style>