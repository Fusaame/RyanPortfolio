<template>
  <section class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
    <h2 class="text-5xl font-bold text-center mb-6 text-gray-800">Mes Projets</h2>
    <div class="border-t-4 border-blue-400 w-24 mx-auto mb-12"></div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 relative group"
        @click="project.title === 'Certification ANSSI' ? showAnssiModal = true : 
        project.title === 'Rainbow Table' ? showRainbowModal = true : null"

      >
        <!-- Image projet -->
        <div class="overflow-hidden">
          <img :src="project.image" alt="Project Image" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>

        <!-- Contenu projet -->
        <div class="p-6 flex flex-col justify-between h-64">
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ project.description }}</p>
          </div>

          <!-- Les technos -->
          <div class="flex gap-4 mt-4 flex-wrap">
            <img
              v-for="(techLogo, idx) in project.technologies"
              :key="idx"
              :src="techLogo"
              alt="Technology Logo"
              class="h-10 w-10 object-contain"
            />
          </div>

          <!-- Bouton -->
          <div class="mt-6 mr-12 ml-12">
            <template v-if="project.isInternal">
              <router-link
                :to="project.link"
                class="inline-block w-full text-center bg-[#4c6ef5] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                En savoir plus
              </router-link>
            </template>
            <template v-else>
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block w-full text-center bg-[#4c6ef5] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
              En savoir plus
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal RAINBOW TABLE -->
<div
  v-if="showRainbowModal"
  class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
>
  <div class="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
    <button
      @click="showRainbowModal = false"
      class="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
    >
      &times;
    </button>
    <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Rainbow Table - Génération de mots de passe</h3>

    <p class="text-gray-700 text-lg leading-relaxed">
      Ce projet simule une attaque de type Rainbow Table. Il permet de générer une liste de hachages à partir d'une base de mots de passe simples. 
      L’objectif est de démontrer comment les attaques par pré-calcul peuvent compromettre la sécurité si les mots de passe ne sont pas suffisamment forts ou salés.
      Les étapes comprennent la génération des mots, leur hachage via une fonction (comme MD5 ou SHA1), et la tentative de récupération d’un mot de passe à partir de son empreinte.
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      <img :src="imgRainbow1" alt="Étape 1" class="w-full h-76 object-contain rounded-md border" />
      <img :src="imgRainbow2" alt="Étape 2" class="w-full h-76 object-contain rounded-md border" />
      <img :src="imgRainbow3" alt="Étape 3" class="w-full h-48 object-contain rounded-md border" />
    </div>
  </div>
</div>


  <!-- Modal ANSSI -->
<div
  v-if="showAnssiModal"
  class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
>
  <div class="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
    <button
      @click="showAnssiModal = false"
      class="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
    >
      &times;
    </button>
    <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Certification ANSSI</h3>
    <img :src="imgCertif" alt="Certification ANSSI" class="w-full h-auto mb-4 rounded-md" />
    <p class="text-gray-700 text-lg leading-relaxed">
      Cette certification marque l'accomplissement d'une formation approfondie en cybersécurité validée par l'ANSSI. Elle couvre des notions clés comme l’ingénierie sociale, les bonnes pratiques en entreprise, ainsi que les méthodes d’évaluation des risques.
    </p>
  </div>
</div>

</template>

<script setup>

import { ref } from 'vue';
const showAnssiModal = ref(false);


// IMAGES RAINBOW
const showRainbowModal = ref(false);

import imgRainbow1 from "./imgRainbow/CpRainbow.png";
import imgRainbow2 from "./imgRainbow/CpRainbow2.png";
import imgRainbow3 from "./imgRainbow/CpRainbow3.png";



// IMAGE DES PROJETS
import img from "./imgProject/homePics.JPG";
import imgJava from "./imgProject/javaimg.webp";
import imgNath from "./imgProject/evenementhome.png";
import imgLogo from "./imgProject/noirfondblanc.JPG";
import imgLA from "./imgProject/losangeles.jpg";
import imgGLPI from "./imgProject/lunette.JPG";
import imgSecu from "./imgProject/securite.JPG";
import imgGreen from "./imgProject/greenit.jpeg";
import imgCyber from "./imgProject/cyberdonnees.webp";
import imgStage from "./imgProject/accADMIN.png";
import imgCertif from "./imgProject/anssi1.png";
import imgAnssi from "./imgProject/anssilogo.webp";
import imgRainbow from "./imgProject/rainbow.jpg";



// LOGO DES PROJETS
import logoVue from "./imgProject/icon/vue.png";
import logoTailwind from "./imgProject/icon/Tailwind.png";
import logoPHP from "./imgProject/icon/PHPPNG.png";
import logoJava from "./imgProject/icon/logojava.png";
import logoSql from "./imgProject/icon/sql.png";
import logoHtml from "./imgProject/icon/HTML.svg";
import logoCss from "./imgProject/icon/CSS.svg";
import logoReact from "./imgProject/icon/react.png";

const projects = [
  {
    title: "Portfolio",
    description: "Site personnel pour présenter mes projets et mes compétences.",
    image: img,
    link: "/portfolio",
    isInternal: true,
    technologies: [logoVue, logoTailwind]
  },
  {
    title: "Site de Stage - AP1",
    description: "Suivi d'avancement des stages pour étudiants et enseignants.",
    image: imgStage,
    link: "/stage",
    isInternal: true,
    technologies: [logoHtml, logoCss, logoPHP, logoSql]
  },
  {
    title: "Application Java - AP2",
    description: "Gestion d'une bibliothèque : emprunt et retour de livres.",
    image: imgJava,
    link: "/java",
    isInternal: true,
    technologies: [logoJava, logoSql]
  },
  {
    title: "NATHAN LUTZ - VIDÉASTE",
    description: "Site vitrine pour le vidéaste M. LUTZ présentant ses réalisations.",
    image: imgNath,
    link: "/nathan",
    isInternal: true,
    technologies: [logoVue, logoTailwind]
  },
  {
    title: "Travel Website",
    description: "Site vitrine pour le tourisme et les agences de voyage.",
    image: imgLA,
    link: "https://travel.ryan-devworks.com",
    isInternal: false,
    technologies: [logoReact, logoTailwind] 
  },
  {
    title: "GLPI",
    description: "Support interne : gestion des tickets et base de connaissances.",
    image: imgGLPI,
    link: "/glpi",
    isInternal: true,
    technologies: [] 
  },
  {
    title: "PHISHING",
    description: "Formulaire d'hameçonnage simulé pour projet de sensibilisation.",
    image: imgSecu,
    link: "/phishing",
    isInternal: true,
    technologies: [logoHtml, logoCss, logoPHP, logoSql]
  },
  {
    title: "Rainbow Table",
    description: "Cyberattack consistant à générer des mots de passe.",
    image: imgRainbow,
    link: "",
    isInternal: true,
    technologies: [logoPHP, logoSql]
  },
  {
    title: "Certification ANSSI",
    description: "Approfondissement de mes connaissances en cybersécurité.",
    image: imgAnssi,
    link: "",
    isInternal: true,
    technologies: []
  },
];

</script>
