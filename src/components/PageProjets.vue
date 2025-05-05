<script setup>
import Navbar from './Navbar3.vue';
import Projets from './Projets/Projets.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Projets />
    <Contact />
</template>

<style>

</style>