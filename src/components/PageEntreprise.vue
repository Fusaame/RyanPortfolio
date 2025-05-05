<script setup>
import Navbar from './Navbar3.vue';
import Entreprise from './Entreprise/Entreprise.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Entreprise />
    <Contact />
</template>

<style>

</style>