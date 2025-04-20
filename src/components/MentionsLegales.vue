<template>
    <div>
      <!-- Bouton pour ouvrir le pop-up -->
      <button
        @click="open = true"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Mentions légales
      </button>
  
      <!-- Pop-up / modale -->
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative text-sm text-black">
          <!-- Bouton de fermeture -->
          <button @click="open = false" class="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold">&times;</button>
  
          <h1 class="text-2xl font-bold mb-4 text-center">Mentions légales</h1>
          <p class="italic text-xs text-gray-500 mb-6 text-center">En vigueur au 16/04/2024</p>
  
          <div class="space-y-4">
            <div>
              <h2 class="font-semibold">Éditeur du site</h2>
              <p>Ryan DE JESUS CABRAL<br>
              Étudiant en ingénierie informatique<br>
              France<br>
              Email : <a href="mailto:ryancabral@outlook.fr" class="text-blue-600 hover:underline">ryancabral@outlook.fr</a></p>
            </div>
  
            <div>
              <h2 class="font-semibold">Hébergement</h2>
              <p>Hostinger International Ltd.
                <br>
              Site web : <a href="https://www.hostinger.fr" class="text-blue-600 hover:underline">https://www.hostinger.fr</a></p>
            </div>
  
            <div>
              <h2 class="font-semibold">Nom de domaine</h2>
              <p>Enregistré auprès de : HOSTINGER
                <br>
              Site web : <a href="https://www.hostinger.fr" class="text-blue-600 hover:underline">https://www.hostinger.fr</a></p>
            </div>
  
            <div>
              <h2 class="font-semibold">Propriété intellectuelle</h2>
              <p>Les contenus de ce site (textes, images, vidéos, code, etc.) sont protégés par les lois en vigueur. Toute reproduction non autorisée est interdite.</p>
            </div>
  
            <div>
              <h2 class="font-semibold">Logos</h2>
              <p>Les logos affichés appartiennent à leurs propriétaires respectifs et sont utilisés à des fins uniquement informatives.</p>
            </div>
  
            <div>
              <h2 class="font-semibold">Images</h2>
              <p>Des images peuvent avoir été générées avec des outils d’intelligence artificielle (IA) comme ChatGPT ou DALL·E, dans le respect de leurs conditions d’utilisation.</p>
            </div>
  
            <div>
              <h2 class="font-semibold">Protection des données personnelles</h2>
              <p>Aucune donnée personnelle n’est collectée automatiquement sur ce site. Il ne comporte aucun formulaire ou outil de suivi.</p>
            </div>
  
            <div>
              <h2 class="font-semibold">Modification des mentions légales</h2>
              <p>Ces mentions peuvent être modifiées à tout moment. Merci de consulter cette page régulièrement pour rester informé.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const open = ref(false)
  </script>
  
  <style scoped>
  /* Ajout pour améliorer le scroll dans la modale */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  </style>
  