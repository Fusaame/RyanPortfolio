<template>
  <!-- Header transparent superposé à l'image -->
  <header
    :class="['fixed top-0 left-0 w-full flex items-center font-eczar justify-between p-4 z-50 transition-colors duration-500', isScrolled ? 'bg-black' : 'bg-transparent']"
    ref="navbar"
  >
    <!-- Logo -->
    <a href="">
      <img src="./img/logo.png" alt="logo" class="h-14 p-2">
    </a>

    <!-- Menu burger pour mobile -->
    <div class="lg:hidden">
      <button @click="toggleMenu" class="text-white text-3xl">
        <span v-if="!menuOpen">&#9776;</span> <!-- Hamburger icon -->
        <span v-if="menuOpen">&times;</span> <!-- Close icon -->
      </button>
    </div>

    <!-- Menu de navigation -->
    <div :class="['lg:flex', 'absolute', 'lg:static', 'top-0', 'left-0', 'w-full', 'lg:w-auto', 'lg:flex-row', 'lg:justify-end', 'lg:space-x-6', menuOpen ? 'flex' : 'hidden', 'lg:block', 'bg-black', 'lg:bg-transparent', 'lg:border-l-0', 'transition-all', 'duration-300']">
      <a href="" class="text-white px-4 py-2">HOME</a>
      <a href="#about" class="text-white px-4 py-2">ABOUT ME</a>
      <a href="#project" class="text-white px-4 py-2">PROJECT</a>
      <a href="#contact" class="text-white px-4 py-2">CONTACT</a>
    </div>
  </header>
  
  <!-- Section avec l'image de fond -->
  <div class="relative w-full h-screen font-eczar">
    <img src="./img/homePics.jpg" alt="background" class="absolute inset-0 object-cover w-full h-full">
    
    <div class="flex flex-col items-center justify-center h-full relative z-10 text-center shadow-2xl">
      <h1 class="font-lexend font-semibold text-white text-4xl mb-4">DE JESUS CABRAL RYAN</h1>
      <div class="border-t border-white w-1/6 mx-auto mb-4"></div>
      <h2 class="font-lexend text-white text-lg mb-10">BTS SIO SLAM - Student</h2>
      
      <!-- Section des boutons avec nouvelles couleurs -->
      <div class="flex space-x-6">
        <!-- Bouton LinkedIn -->
        <a
          href="https://www.linkedin.com/in/ryan-de-jesus-cabral-892a14157/"
          class="relative p-4 px-6 bg-white text-black rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg border border-black before:absolute before:inset-0 before:border-2 before:border-black before:rounded-xl"
        >
          LinkedIn
      </a>
        
        <!-- Bouton Resume -->
        <a
          @click.prevent="openResume"
          class="relative p-4 px-6 bg-white text-black rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg border border-black before:absolute before:inset-0 before:border-2 before:border-black before:rounded-xl cursor-pointer"
        >
          Resume
        </a>
      </div>
    </div>
  </div>

  <!-- Overlay noir translucide -->
  <div class="absolute inset-0 bg-black opacity-50"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const menuOpen = ref(false);

const openResume = () => {
  window.open('/CVRyan.pdf', '_blank'); // Ouvre le fichier en nouvel onglet
};

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
