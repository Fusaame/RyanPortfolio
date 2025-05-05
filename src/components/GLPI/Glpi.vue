<template>
  <section class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
    <div class="max-w-6xl mx-auto">
      <!-- Titre principal -->
      <h1 class="text-5xl font-bold text-center text-gray-800 mb-6">Qu'est-ce que GLPI ?</h1>
      <div class="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

      <!-- Introduction -->
      <div class="text-center mb-16">
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          GLPI (Gestionnaire Libre de Parc Informatique) est un outil open source permettant de gérer efficacement les ressources informatiques d’une organisation, ainsi que le support utilisateur à travers un système de tickets.
        </p>
      </div>

      <!-- Fonctionnalités -->
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">1. Gestion des équipements</h2>
          <p class="text-gray-600 text-sm leading-relaxed text-center">
            GLPI permet de créer un inventaire complet du parc informatique (ordinateurs, imprimantes, logiciels…). Chaque élément peut être suivi selon son cycle de vie, son utilisateur et son emplacement.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">2. Gestion des tickets</h2>
          <p class="text-gray-600 text-sm leading-relaxed text-center">
            Grâce au module de gestion des tickets, les utilisateurs peuvent déclarer des incidents ou faire des demandes. Les techniciens peuvent suivre, traiter et clôturer ces tickets avec un historique précis.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">3. Base de connaissance</h2>
          <p class="text-gray-600 text-sm leading-relaxed text-center">
            GLPI intègre une base de connaissances où les solutions aux problèmes récurrents peuvent être documentées, permettant aux utilisateurs de trouver des réponses rapidement sans solliciter le support.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">4. Rapports & Statistiques</h2>
          <p class="text-gray-600 text-sm leading-relaxed text-center">
            Des tableaux de bord et rapports personnalisés permettent de suivre les performances du support, l’état du parc informatique et d’optimiser les ressources internes.
          </p>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          En résumé, GLPI est une solution complète de gestion IT qui améliore la visibilité, la productivité et l’efficacité des services informatiques, tout en étant personnalisable et évolutive.
        </p>
      </div>

      <!-- Mot de passe -->
      <div class="mt-16 w-full max-w-md mx-auto text-center">
        <div v-if="!authenticated" class="bg-white p-6 rounded-xl shadow-md">
          <p class="mb-4 text-gray-700 font-semibold">Contenu protégé : veuillez entrer le mot de passe</p>
          <input
            v-model="passwordInput"
            type="password"
            placeholder="Mot de passe"
            class="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            @click="checkPassword"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Valider
          </button>
          <p v-if="error" class="text-red-500 mt-2 text-sm">Mot de passe incorrect.</p>
        </div>
      </div>

      <!-- Carousel -->
      <div v-if="authenticated" class="mt-10 w-full relative max-w-3xl mx-auto">
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

// Carousel
const carouselImages = [
  './imgGlpi/CpGlpi.png',
  './imgGlpi/CpGlpi2.png',
  './imgGlpi/CpGlpi3.png'
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

// Authentification
const passwordInput = ref('')
const authenticated = ref(false)
const error = ref(false)
const correctPassword = 'glpi2024' // à personnaliser

const checkPassword = () => {
  if (passwordInput.value === correctPassword) {
    authenticated.value = true
    error.value = false
  } else {
    error.value = true
  }
}
</script>
