<template>
  <section id="project" class="py-16 px-8 bg-gray-100 text-black font-eczar">
    <h2 class="text-4xl font-semibold font-bungee text-center mb-4">PROJECT</h2>
    <div class="border-t border-black w-1/2 mx-auto mb-12"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Boucle pour afficher les projets -->
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
      >
        <!-- Image du projet -->
        <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover">
        
        <!-- Contenu du projet -->
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
          <p class="text-gray-700 mb-6">{{ project.description }}</p>

          <!-- Utiliser le bon composant selon le type de lien -->
          <template v-if="project.isInternal">
            <router-link 
              :to="project.link" 
              class="inline-block p-3 px-6 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
              View Project
            </router-link>
          </template>
          <template v-else>
            <a 
              :href="project.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-block p-3 px-6 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
              View Project
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>


  
  <script setup>
   import img from "./img/homePics.JPG";
   import imgJava from "./img/javaimg.webp";
   import imgNath from "./img/evenementhome.png";
   import imgLogo from "./img/noirfondblanc.JPG";
   import imgLA from "./img/losangeles.jpg";
   import imgGLPI from "./img/lunette.JPG";
   import imgSecu from "./img/securite.JPG";
   import imgGreen from "./img/greenit.jpeg";
   import imgCyber from "./img/cyberdonnees.webp";
   import imgStage from "./STAGE/img_stage/accADMIN.png"
   
  // Liste des projets
  const projects = [
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: img,
    link: "https://ryan-devworks.com",
    isInternal: false
  },
  {
    title: "Site de Stage - AP1",
    description: "Website for student who are in internship and can follow their advancement teacher's can supervise",
    image: imgStage,
    link: "/stage",
    isInternal: true
  },
  {
    title: "Application Java - AP2",
    description: "Application pour gérer une bibliothèque, avoir accès aux livres pour pouvoir en emprunter ou en rendre",
    image: imgJava,
    link: "/java",
    isInternal: true
  },
  {
      title: "NATHAN LUTZ - VIDEASTE",
      description: "Showcase WebSite for the videaste M. LUTZ for show his work",
      image: imgNath,
      link: "https://nathanlutz.fr"
    },
    {
      title: "Travel Website",
      description: "Showcase website for businesses",
      image: imgLA,
      link: "https://travel.ryan-devworks.com "
    },
  {
    title: "GLPI",
    description: "Support - Ticket and knowledge base",
    image: imgGLPI,
    link: "/glpi",
    isInternal: true
  },
  {
    title: "PHISHING",
    description: "Fake form RIOT Games login for take users informations",
    image: imgSecu,
    link: "/phishing",
    isInternal: true
  },
  {
    title: "Cybersecurity - Watch Subject",
    description: "What are the new threats and solutions to secure data against modern attacks?",
    image: imgCyber,
    link: "/greenIT",
    isInternal: true
  }
];

 
  </script>
  
  <style scoped>
  /* Styles optionnels pour améliorer l'apparence */
  h2 {
    color: #1a202c;
  }
  
  a {
    transition: all 0.3s ease;
  }
  
  a:hover {
    transform: translateY(-3px);
  }
  </style>
  