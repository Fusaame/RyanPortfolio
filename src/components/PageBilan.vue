<script setup>
import Navbar from './Navbar3.vue';
import Bilan from './Bilan/Bilan.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Bilan />
    <Contact />
</template>

<style>

</style>