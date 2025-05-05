<template>

    <!-- SECTION ACCUEIL -->

<section class="pt-32 pb-24 px-6 min-h-screen flex justify-center items-center bg-[#fdfaf6]">
  <!-- Image d'arrière-plan -->
  <img 
  src="./imgAccueil/icon/Carre.png"
  class="absolute top-0 left-0 w-72 h-72 z-0 opacity-50 hidden sm:block"
  alt="Décoration"
/>
  <!-- Container principal avec inversion en mobile -->
  <div class="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-screen-xl">
    
    <!-- Texte à gauche (en mobile c'est en bas) -->
    <div class="text-[#0a192f] w-full md:max-w-lg md:mr-24 mt-10 md:mt-0 text-center md:text-left">
      <h2 class="text-3xl md:text-5xl font-extrabold mb-4">
        Bonjour, je suis 
        <span class="flex flex-col items-center md:items-start">
          <span class="text-[#4c6ef5]">DE JESUS CABRAL</span> 
          <span class="text-[#4c6ef5]">Ryan</span>
        </span>
      </h2>
      <p class="text-xl md:text-3xl font-bold mb-4">Futur Ingénieur Informatique</p>
      <p class="text-base md:text-lg leading-relaxed">
        Actuellement étudiant en deuxième année de BTS SIO option SLAM à l'ENSITECH, je combine ma formation avec une alternance en entreprise. Durant mon alternance chez <strong>SENY</strong>, j'ai eu l'opportunité de superviser les parcs informatiques des centres de radiothérapies et de médecine nucléaire.
      </p>
      <!-- Boutons -->
      <div class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mt-8">
        <a href="https://www.linkedin.com/in/ryan-de-jesus-cabral-892a14157/" target="_blank" class="px-6 py-3 bg-[#4c6ef5] text-white font-bold rounded-full transition duration-300 hover:bg-[#333]">
          LinkedIn
        </a>
        <a href="https://github.com/Fusaame" target="_blank" class="px-6 py-3 bg-[#4c6ef5] text-white font-bold rounded-full transition duration-300 hover:bg-[#333]">
          GitHub
        </a>
        <a href="/CVRyan.pdf" target="_blank" class="px-6 py-3 bg-[#4c6ef5] text-white font-bold rounded-full transition duration-300 hover:bg-[#333]">
          Voir mon CV
        </a>
      </div>
    </div>

    <!-- Image en haut sur mobile -->
    <div class="relative bg-[#0a192f] w-100 h-100 md:w-100 md:h-100 rounded-3xl shadow-xl flex items-center justify-center">
      <img
        src="./imgAccueil/Ryan_sf.png"
        alt="Ryan"
        class="w-64 md:w-96 drop-shadow-2xl object-contain"
      />
    </div>
  </div>
</section>


<!-- SECTION FORMATIONS -->


<section class="py-20 bg-[#eaeaea]">
<div class="max-w-4xl mx-auto px-6">
  <h2 class="text-3xl md:text-4xl font-bold text-center text-[#0a192f] mb-12">Formations</h2>

  <div class="relative border-l-4 border-[#4c6ef5] pl-6 space-y-12">
    <!-- 2025 - École d'ingénieur -->
    <div class="relative group">
      <div class="absolute -left-5 top-14 w-4 h-4 rounded-full bg-[#4c6ef5] border-4 border-white shadow-lg hover:shadow-3xl hover:bg-blue-400"></div>
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
        <h3 class="text-xl font-semibold text-[#0a192f]">2025/2028 - ESIEE IT Ingénieur en informatique</h3>
        <p class="mt-2 text-gray-700">
          Intégration à l’école d’ingénieur <strong>ESIEE-IT</strong> labellisé CTI pour réaliser mon objectif celui de devenir ingénieur informatique.
        </p>
        <div class="text-gray-700 mt-2">
          <li>💻 Développement logiciel avancé et DevOps</li>
          <li>🔐 Cybersécurité et gestion des systèmes d'information</li>
          <li>🧠 Maîtrise des algorithmes et de l’intelligence artificielle</li>
        </div>
        <div class="text-[#4c6ef5] flex flex-col items-end space-y-2 mt-2">
            <!-- <button @click="showModal = true" class="font-bold italic hover:underline">En savoir plus sur l'école ➜</button>  -->
        </div>
      </div>
    </div>
    <!-- 2023 - BTS SIO -->
    <div class="relative group">
      <div class="absolute -left-5 top-20 w-4 h-4 rounded-full bg-[#4c6ef5] border-4 border-white shadow-lg hover:shadow-xl hover:bg-blue-400"></div>
      <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
        <h3 class="text-xl font-semibold text-[#0a192f]">2023/2025 - ENSITECH BTS SIO SLAM</h3>
        <p class="mt-2 text-gray-700">
          Début du BTS Services Informatiques aux Organisations, spécialité SLAM à <strong>ENSITECH</strong> en alternance chez <strong>SENY</strong>.
        </p>
        <div class="text-[#4c6ef5] flex flex-col items-end space-y-2 mt-2">
            <router-link to="/entreprise" class="font-bold italic hover:underline">En savoir plus sur mon entreprise ➜</router-link>
            <button @click="showModal = true" class="font-bold italic hover:underline">En savoir plus sur l'école ➜</button>
            <a href="./Annexe.pdf" class="font-bold italic hover:underline">E5 - Annexe 8.1 ➜</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

  <!-- SECTION Compétences -->
<section class="pt-32 pb-24 px-6 min-h-screen bg-[#fdfaf6] flex flex-col items-center">
  <h2 class="text-3xl md:text-4xl font-bold text-[#0a192f] mb-16">Mes Compétences</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl border-4xl border-cyan-400">

    <!-- Bloc Front-end -->
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
      <h3 class="text-2xl font-semibold text-center mb-6 text-[#4c6ef5]">Front-end</h3>
      <div class="grid grid-cols-2 gap-6">
        <!-- HTML & CSS -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/HTML.svg" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold text-center">HTML</p>
          <span class="text-sm text-gray-500">Avancé</span>
        </div>
        <!-- CSS -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/CSS.svg" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold text-center">CSS</p>
          <span class="text-sm text-gray-500">Avancé</span>
        </div>
        <!-- Vue.js -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/vue.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Vue.js</p>
          <span class="text-sm text-gray-500">Correct</span>
        </div>
        <!-- Tailwind -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/Tailwind.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Tailwind</p>
          <span class="text-sm text-gray-500">Avancé</span>
        </div>
        <!-- Figma -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/Figma.svg" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Figma</p>
          <span class="text-sm text-gray-500">Bon</span>
        </div>
      </div>
    </div>

    <!-- Bloc Back-end -->
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
      <h3 class="text-2xl font-semibold text-center mb-6 text-[#4c6ef5]">Back-end</h3>
      <div class="grid grid-cols-2 gap-6">
        <!-- Java -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/logojava.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Java</p>
          <span class="text-sm text-gray-500">Avancé</span>
        </div>
        <!-- PHP -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/PHPPNG.png" class="w-18 h-12 mb-2" />
          <p class="text-lg font-semibold">PHP</p>
          <span class="text-sm text-gray-500">Solide</span>
        </div>
        <!-- MySQL -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/sql.png" class="w-24 h-12 mb-2" />
          <p class="text-lg font-semibold">MySQL</p>
          <span class="text-sm text-gray-500">Avancé</span>
        </div>
        <!-- C -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/C.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">C</p>
          <span class="text-sm text-gray-500">Débutant</span>
        </div>
        <!-- SHELL -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/Powershell.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Powershell</p>
          <span class="text-sm text-gray-500">Débutant</span>
        </div>
      </div>
    </div>

    <!-- Bloc OS -->
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
      <h3 class="text-2xl font-semibold text-center mb-6 text-[#4c6ef5]">Skills</h3>
      <div class="grid grid-cols-2 gap-6">
        <!-- Windows -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/windows.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Windows</p>
          <span class="text-sm text-gray-500">Bon</span>
        </div>
        <!-- Linux -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/linux.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Linux</p>
          <span class="text-sm text-gray-500">A l'aise</span>
        </div>
        <!-- MacOS -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/Apple.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">MacOS</p>
          <span class="text-sm text-gray-500">Bon</span>
        </div>
        <!-- Markdown -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/Markdown.png" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Markdown</p>
          <span class="text-sm text-gray-500">A l'aise</span>
        </div>
        <!-- Github -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/GitHub.svg" class="w-12 h-12 mb-2" />
          <p class="text-lg font-semibold">Github</p>
          <span class="text-sm text-gray-500">Bon</span>
        </div>
        <!-- VMware -->
        <div class="flex flex-col items-center">
          <img src="./imgAccueil/icon/VMware.svg" class="w-16 h-12 mb-2" />
          <p class="text-lg font-semibold">VMware</p>
          <span class="text-sm text-gray-500">Bon</span>
        </div>
      </div>
    </div>

  </div>
</section>





<!-- Popup global : interdit le scroll derrière avec overflow-hidden -->
<div v-if="showModal" class="fixed inset-0 pt-8 bg-black bg-opacity-60 flex justify-center items-center z-50 overflow-hidden">
  
  <!-- Boîte blanche : autorise le scroll interne -->
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full max-h-screen overflow-y-auto relative">
    <button @click="showModal = false" class="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold">&times;</button>
    
    <img class="w-42 h-24 mx-auto block" src="./ImgAccueil/ENSITECH.png" alt="">
    <p class="mb-6 mt-2 text-center">Cergy, 95800</p>

    <p class="text-gray-700 mb-4 text-center">
      L'<strong>ENSITECH</strong> propose un enseignement professionnalisant orienté vers l’informatique, le développement, et la gestion de projet. J'ai eu l'opportunité d'y faire mon <strong>BTS SIO SLAM</strong>.
    </p>

    <!-- Deux colonnes -->
    <div class="flex flex-col md:flex-row gap-6 mt-6">
      <!-- Bloc matières -->
      <div class="bg-[#f0f0f0] p-6 rounded-lg border border-[#e0e0e0] w-full md:w-1/2">
        <h2 class="text-2xl font-semibold mb-4 text-center text-[#4c6ef5]">Les matières étudiées</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Culture et communication</li>
          <li>Mathématiques pour l'informatique</li>
          <li>Culture juridique, économique et managériale pour l'informatique</li>
          <li>Support et mise à disposition de services informatiques</li>
          <li>Cybersécurité des services informatiques</li>
          <li>Business English</li>
          <li>Conception et développement d'applications</li>
        </ul>
      </div>

      <!-- Bloc ce que j'ai appris -->
      <div class="bg-[#f0f0f0] p-6 rounded-lg border border-[#e0e0e0] w-full md:w-1/2">
        <h2 class="text-2xl font-semibold mb-4 text-center text-[#4c6ef5]">Ce que j'ai appris</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Programmation, travail en équipe, gestion de projet.</li>
          <li>Git, PHP, Java, etc.</li>
          <li>Des projets marquants (site web, application...)</li>
          <li>Des enseignants investis</li>
        </ul>
      </div>
    </div>
  </div>
</div>




</template>



<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style scoped>
</style>
