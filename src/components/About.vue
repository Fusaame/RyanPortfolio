<template>
  <section id="about" class="relative py-16 px-8 bg-white text-black font-eczar">
    <!-- Carré "ABOUT ME" -->
    <div class="text-4xl font-semibold font-bungee text-center mb-4">
      ABOUT
    </div>
    <div class="border-t border-black w-1/2 mx-auto mb-12"></div>
    
    <!-- Contenu de la section About Me avec photo alignée à gauche sur les écrans larges -->
    <div class="flex flex-col lg:flex-row items-center lg:justify-between mt-12">
      <!-- Photo (ajustée pour mobile) -->
      <img src="./img/ryanimg3.JPG" alt="Ryan's Photo" class="w-64 h-auto lg:w-72 ml-0 lg:ml-24 rounded-lg shadow-sm hover:shadow-2xl mb-6 lg:mb-0">
      
      <!-- Texte (ajusté pour mobile) -->
      <div class="max-w-2xl mr-0 lg:mr-24 text-center lg:text-left">
        <!-- Titre avec bordure en dessous -->
        <h2 class="font-eczar text-2xl lg:text-3xl text-black mb-6 text-center border-b-2 border-gray-300 pb-2">Ryan, 25 years old</h2>
        <p class="text-lg text-black leading-relaxed">
          I am currently a student in BTS SIO with a focus on software development (SLAM). I am passionate about coding and development, with a strong desire to become a computer engineer and tackle innovative technological challenges.
        </p>
        
        <!-- Bouton pour télécharger un fichier -->
        <div class="p-8 pt-12 text-center">
          <a 
            href="/Annexe.pdf" 
            download 
            class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Download Annexe 8.1
          </a>
        </div>
        
        <!-- Section des logos des technologies en dessous du texte -->
        <h2 class="font-eczar text-2xl lg:text-3xl text-black mt-6 text-center border-b-2 border-gray-300 pb-2">Technologies</h2>
        <div class="border-gray-300 pt-4 flex flex-wrap justify-center space-x-4">
          <img src="./img/icon/C.png" alt="C" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/logojava.png" alt="Java" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/PHPPNG.png" alt="PHP" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/sql.png" alt="SQL" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/Markdown.png" alt="Markdown" class="w-12 h-12 object-contain mb-4" />

          <img src="./img/icon/vue.png" alt="Vue.js" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/Tailwind.png" alt="Tailwind CSS" class="w-12 h-12 object-contain mb-4" />
        </div>
        <div class="border-gray-300 pt-4 flex flex-wrap justify-center space-x-4">
          <img src="./img/icon/Apple.png" alt="Apple" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/Linux.png" alt="Linux" class="w-12 h-12 object-contain mb-4" />
          <img src="./img/icon/Windows.png" alt="Windows" class="w-12 h-12 object-contain mb-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire pour cette section
</script>

<style scoped>
/* Style optionnel pour améliorer l'apparence */
img {
  object-fit: contain;
}
</style>
