<script setup>
import Navbar from './Navbar2.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';
import Java from './JavaProject/JavaAP.vue'

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Java />
    <Contact />
</template>

<style>

</style>