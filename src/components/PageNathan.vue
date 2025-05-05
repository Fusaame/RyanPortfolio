<script setup>
import Navbar from './Navbar3.vue';
import Nathan from './Projets/NathanSite.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Nathan />
    <Contact />
</template>

<style>

</style>