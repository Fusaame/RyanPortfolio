<template>
  <section id="contact" class="relative py-8 px-4 bg-[#0a192f] text-black">
    <!-- Image en haut -->
    <div class="text-center mb-8">
      <!--<img
        src="./img/ryanimg3.JPG"
        alt="Ryan's Photo"
        class="w-48 h-48 mx-auto rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
      /> -->
    </div> 

    <!-- Informations de contact -->
    <div class="text-center text-white">
      <h2 class="text-4xl font-semibold mb-4">DE JESUS CABRAL RYAN</h2>
      <p class="text-lg mb-4">Paris, France</p>
      <p class="text-lg mb-2">
        Mail :
        <a href="mailto:ryancabral@outlook.fr" class="text-blue-600 hover:underline">
          ryancabral@outlook.fr
        </a>
      </p>
    </div>

    <!-- Ligne de séparation -->
    <div class="border-t border-black w-1/2 mx-auto "></div>

    <!-- Footer avec copyright -->
    <footer class="text-center text-sm text-gray-600 py-4">
      <p>&copy; 2025 DE JESUS CABRAL RYAN. Tous droits réservés.</p>

      <!-- Pop-up Mentions Légales -->
      <div class="mt-4">
        <MentionsLegalesPopup />
      </div>
    </footer>
  </section>
</template>

<script setup>
// Importation du composant popup
import MentionsLegalesPopup from '@/components/MentionsLegales.vue'
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
