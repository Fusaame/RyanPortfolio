<template>
    <section class="min-h-screen bg-[#fdfaf6] px-6 pt-24 pb-24 flex flex-col items-center relative">
      <!-- Titre plus haut -->
      <h1 class="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mt-4 mb-2">Mon Bilan</h1>
      <div class="border-t-4 border-blue-400 w-24 mx-auto mb-12"></div>
  
      <!-- Contenu centré -->
      <div class="flex-1 flex flex-col sm:flex-row justify-center items-center w-full max-w-6xl gap-8">
        <!-- Rectangles à gauche -->
        <div class="flex flex-col gap-4 w-full sm:w-1/3">
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105">
            <h3 class="text-xl font-bold text-gray-800">Nouvelles connaissances</h3>
            <ul class="text-gray-600 mt-2 list-disc list-inside">
            <li>Maîtrise du RGPD et de la cybersécurité</li>
            <li>Initiation au développement web et aux bases de données</li>
            <li>Compréhension des enjeux numériques</li>
            </ul>
        </div>
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105">
            <h3 class="text-xl font-bold text-gray-800">Compétences techniques acquises</h3>
            <ul class="text-gray-600 mt-2 list-disc list-inside">
            <li>Développement en Java, PHP, Python</li>
            <li>Utilisation de Git et de GitHub</li>
            <li>Création d’interfaces web avec Vue.js et Tailwind CSS</li>
            </ul>
        </div>
        </div>

        <!-- Image au centre -->
        <div class="flex justify-center items-center my-8 sm:my-0">
        <img src="./imgBilan/CartoonRyan.png" alt="" class="bg-gray-600 rounded-full w-72 h-72 hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105">
        </div>

        <!-- Rectangles à droite -->
        <div class="flex flex-col gap-4 w-full sm:w-1/3">
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105">
            <h3 class="text-xl font-bold text-gray-800">Deux années enrichissantes</h3>
            <ul class="text-gray-600 mt-2 list-disc list-inside">
            <li>Travail en équipe et projets collaboratifs</li>
            <li>Rencontres marquantes</li>
            <li>Développement personnel et autonomie</li>
            </ul>
        </div>
        <div class="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 transform hover:scale-105">
            <h3 class="text-xl font-bold text-gray-800">Prise de conscience</h3>
            <ul class="text-gray-600 mt-2 list-disc list-inside">
            <li>Adopter une pratique éthique et responsable</li>
            <li>Intégrer une école d'ingénieur</li>
            </ul>
        </div>
        </div>
      </div>
    </section>

    <!-- Section Événement marquant -->
<section class="bg-[#f0f4f8] px-6 pt-24 pb-24 flex flex-col items-center">
  <h2 class="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-2">Événement marquant</h2>
  <div class="border-t-4 border-blue-500 w-24 mx-auto mb-12"></div>

  <div class="max-w-5xl w-full grid md:grid-cols-2 gap-8">
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-blue-400 transition-shadow duration-300 hover:scale-[1.02] transform">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Évolution de mission</h3>
      <p class="text-gray-700 leading-relaxed">
        Mon parcours a débuté comme <strong>technicien informatique</strong>, un rôle centré sur le support et la gestion de matériel.
        Très rapidement, j’ai montré ma capacité à m’adapter et à apprendre, ce qui m’a permis de participer à des missions plus techniques :
        développement d’outils internes, automatisation de scripts, et même gestion de serveurs et du réseau.
      </p>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-blue-400 transition-shadow duration-300 hover:scale-[1.02] transform">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Responsabilités croissantes</h3>
      <p class="text-gray-700 leading-relaxed">
        Cette <strong>montée en compétences</strong> m’a permis de prendre confiance et de comprendre que l’IT offre bien plus qu’un simple métier :
        c’est un terrain d’innovation, de créativité et de rigueur. Ces nouvelles responsabilités m'ont motivé à viser plus haut, avec une vision claire de mon avenir.
      </p>
    </div>
  </div>
</section>

<!-- Section Mon futur -->
<section class="bg-gradient-to-br from-[#e0f7fa] to-[#fdfaf6] px-6 pt-24 pb-24 flex flex-col items-center">
  <h2 class="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-2">Mon futur</h2>
  <div class="border-t-4 border-green-500 w-24 mx-auto mb-12"></div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
    <!-- Carte 1 : Passion -->
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-blue-400 transition-transform hover:scale-[1.03] transform text-gray-800">
      <h3 class="text-2xl font-semibold mb-4 text-blue-600 text-center">L’informatique une passion</h3>
      <p class="text-base leading-relaxed">
        Grâce à mes projets personnels, à mon passage à <span class="font-semibold">ENSITECH</span> et à mon apprentissage constant, 
        j’ai découvert que l’informatique est bien plus qu’un métier : c’est un univers dans lequel je m’épanouis pleinement.
      </p>
    </div>

    <!-- Carte 2 : Objectif ingénieur -->
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-green-400 transition-transform hover:scale-[1.03] transform text-gray-800">
      <h3 class="text-2xl font-semibold mb-4 text-green-600 text-center">Mon objectif</h3>
      <p class="text-base leading-relaxed">
        Mon objectif est clair : devenir un <span class="font-bold text-green-600">ingénieur en informatique</span>, capable d’apporter une valeur ajoutée 
        dans les projets que je mène, sans jamais oublier l’éthique, le respect de la vie privée, 
        et l’impact environnemental.
      </p>
    </div>

    <!-- Carte 3 : Numérique responsable -->
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-emerald-400 transition-transform hover:scale-[1.03] transform text-gray-800">
      <h3 class="text-2xl font-semibold mb-4 text-emerald-600 text-center">Une vision éthique</h3>
      <p class="text-base leading-relaxed">
        Je veux faire partie d’un <span class="font-semibold text-emerald-700">numérique au service de l’humain</span>, 
        inclusif, responsable et tourné vers l’avenir. 
        Agir avec sens, respecter notre planète et contribuer à un monde meilleur, 
        voilà le moteur de mon engagement.
      </p>
    </div>
  </div>
</section>


  </template>
  
  <script>
  </script>
  