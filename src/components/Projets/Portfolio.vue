<template>
    <section class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
      <div class="max-w-6xl mx-auto">
        <!-- Titre principal -->
        <h1 class="text-5xl font-bold text-center text-gray-800 mb-6">Création du Portfolio</h1>
        <div class="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
  
        <!-- Introduction -->
        <div class="text-center mb-16">
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            J'ai eu l'occasion de réaliser mon portfolio lors de ma formation <strong>BTS SIO</strong> pour vous partager mon profil et mon évolution durant ces 2 années.
          </p>
        </div>
  
        <!-- Étapes de création -->
        <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 relative">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">1. Conception</h2>
            <p class="text-gray-600 text-sm leading-relaxed text-center">
            Avant d'écrire la moindre ligne de code, j'ai pris le temps de définir une identité visuelle pour mon profil. Cela incluait le choix des couleurs, des polices, et l’organisation du contenu afin d’optimiser l’expérience utilisateur.
            </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 relative">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">2. Développement</h2>
            <p class="text-gray-600 text-sm leading-relaxed text-center">
            Le développement s’est fait avec Vue.js. J’ai utilisé Tailwind CSS pour gagner en rapidité et en cohérence sur la partie design. Chaque composant a été pensé pour être réutilisable et maintenable à long terme.
            </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 relative">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">3. Intégration</h2>
            <p class="text-gray-600 text-sm leading-relaxed text-center">
            J’ai intégré le contenu texte, les sections, les différents documents. J’ai également veillé à ce que le site soit responsive sur tous les types d’écrans, en testant les rendus sur mobile et desktop.
            </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 relative">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">4. Déploiement</h2>
            <p class="text-gray-600 text-sm leading-relaxed text-center">
            Une fois le site finalisé et testé. J’ai configuré un nom de domaine personnalisé via mon hébergeur Web Hostinger, pour ensuite mettre mon site en ligne via FileZilla.
            </p>
        </div>
        </div>

  
        <!-- Carousel -->
      <div class="mt-20 w-full relative max-w-3xl mx-auto">
        <div class="relative overflow-hidden rounded-xl shadow-xl">
          <img
            :src="carouselImages[currentIndex]"
            alt="Capture du portfolio"
            class="w-full h-auto object-cover transition-all duration-500"
          />

          <!-- Flèche gauche -->
          <button
            @click="prevImage"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md"
          >
            ◀
          </button>

          <!-- Flèche droite -->
          <button
            @click="nextImage"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md"
          >
            ▶
          </button>
        </div>

        <!-- Petits points de navigation -->
        <div class="flex justify-center mt-4 space-x-2">
          <button
            v-for="(image, index) in carouselImages"
            :key="index"
            @click="currentIndex = index"
            :class="[
              'w-3 h-3 rounded-full',
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
            ]"
          ></button>
        </div>
      </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref } from 'vue'

// Ajoute tes images ici
const carouselImages = [
  './imgPortfolio/CpPortfolio.png',
  './imgPortfolio/CpPortfolio2.png',
  './imgPortfolio/CpPortfolio3.png',
  './imgPortfolio/CpPortfolio4.png',
  './imgPortfolio/CpPortfolio5.png'
]

const currentIndex = ref(0)

const prevImage = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? carouselImages.length - 1
      : currentIndex.value - 1
}

const nextImage = () => {
  currentIndex.value =
    currentIndex.value === carouselImages.length - 1
      ? 0
      : currentIndex.value + 1
}
</script>
  