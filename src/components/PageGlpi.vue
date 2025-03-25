<script setup>
import Navbar from './Navbar2.vue';
import Glpi from './GLPI/Glpi.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Glpi />
    <Contact />
</template>

<style>

</style>