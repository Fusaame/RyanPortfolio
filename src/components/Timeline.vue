<template>
    <div class="relative py-12 px-6 max-w-5xl mx-auto">
      <!-- Ligne verticale centrale pour la roadmap -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-[81%] w-1 bg-gray-300"></div>
      
      <div class="space-y-16">
        <div v-for="(item, index) in studies" :key="index" class="relative flex items-center">
          
          <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white"></div>
          
          <div class="w-1/2 text-right pr-10">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.date }}</p>
          </div>
          <div class="w-1/2"></div>
        </div>

        <div v-for="(item, index) in work" :key="index" class="relative flex items-center">
          <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-500 w-5 h-5 rounded-full border-4 border-white"></div>
          <div class="w-1/2"></div>
          <div class="w-1/2 text-left pl-10">
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const studies = ref([
    { title: 'ESIEA - Computer Engineering program', date: '2025 - 2028' },
    { title: 'ENSITECH - BTS SIO SLAM', date: '2023 - 2025' },
  ]);
  
  const work = ref([
    { title: 'Elsan - Développeur en alternance', date: '2024 - Présent' },
    { title: 'Elsan - Technicien Support & Réseaux', date: '2023 - 2024' },
  ]);
  </script>
  
  <style scoped>
  /* Ajustement du padding et de la hauteur de la ligne */
  .relative {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  
  h3 {
    position: relative;
    z-index: 1;
  }
  
  .h {
    height: 80%;
  }
  
  .max-w-5xl {
    max-width: 60rem;
  }
  </style>
  