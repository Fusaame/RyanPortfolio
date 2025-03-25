<template>
    <!-- Header transparent superposé à l'image -->
    <header
      :class="['bg-black fixed top-0 left-0 w-full flex items-center font-eczar justify-between p-4 z-50 transition-colors duration-500']"
      ref="navbar"
    >
      <!-- Logo -->
      <router-link to="/">
        <img src="./img/logo.png" alt="logo" class="h-14 p-2">
      </router-link>
  
      <!-- Menu burger pour mobile -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-white text-3xl">
          <span v-if="!menuOpen">&#9776;</span> <!-- Hamburger icon -->
          <span v-if="menuOpen">&times;</span> <!-- Close icon -->
        </button>
      </div>
  
      <!-- Menu de navigation -->
      <div :class="['lg:flex', 'absolute', 'lg:static', 'top-0', 'left-0', 'w-full', 'lg:w-auto', 'lg:flex-row', 'lg:justify-end', 'lg:space-x-6', menuOpen ? 'flex' : 'hidden', 'lg:block', 'bg-black', 'lg:bg-transparent', 'lg:border-l-0', 'transition-all', 'duration-300']">
        <router-link to="/" class="text-white px-4 py-2">HOME</router-link>
      </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
header {
  backdrop-filter: blur(10px);
}
</style>
