<script setup>
import Navbar from './Navbar3.vue';
import Green from './Veille/Veille.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Green />
    <Contact />
</template>

<style>

</style>