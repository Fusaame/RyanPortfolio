<script setup>
import Navbar from './Navbar3.vue';
import Stage from './STAGE/Stage.vue';
import Contact from './Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<template>
    <Navbar />
    <Stage />
    <Contact />
</template>

<style>

</style>