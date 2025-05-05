<script setup>
import Navbar from './Navbar3.vue';
import Portfolio from './Projets/Portfolio.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Portfolio />
    <Contact />
</template>

<style>

</style>