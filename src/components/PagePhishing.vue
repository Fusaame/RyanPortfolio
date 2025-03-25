<script setup>
import Navbar from './Navbar2.vue';
import Phishing from './PhishingProject/Phishing.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Phishing />
    <Contact />
</template>

<style>

</style>