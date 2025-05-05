<template>
    <div class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
      <!-- Titre Principal -->
      <h1 class="text-5xl font-bold text-center mb-8">PHISHING CAMPAIGN</h1>
      <div class="border-t-4 border-blue-400 w-24 mx-auto mb-8"></div>
      
      <!-- Introduction -->
      <p class="text-lg text-center mb-12">
        Nous avions pour mission de chercher une entreprise : Mon choix s'est tourné vers 
        <span class="text-red-600 font-semibold">RIOT Games</span>, pour ensuite récupérer les accès et les codes bancaires des joueurs qui seront pris dans mon piège.
      </p>
      
      <!-- Section Bases de Données -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-center">Base de Données : PHISHING</h2>
        <p class="text-lg text-center mb-8">Commençons par mes deux tables qui récupéreront les informations :</p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src="./img_phishing/bddUser.png" alt="bddUser" class="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg">
          <img src="./img_phishing/bddCard.png" alt="bddCard" class="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg">
        </div>
      </div>
  
      <!-- Section Formulaire de Phishing -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-center">Formulaire de Connexion</h2>
        <div class="flex justify-center mb-8">
          <img src="./img_phishing/phishing1.png" alt="phishing1" class="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
        </div>
      </div>
  
      <!-- Section Informations Bancaires -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-center">Récupération des Informations Bancaires</h2>
        <div class="flex justify-center mb-8">
          <img src="./img_phishing/phishing2.png" alt="bank" class="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
        </div>
      </div>
  
      <!-- Section Confirmation -->
      <div class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-center">Mise à Jour des Données</h2>
        <div class="flex justify-center mb-8">
          <img src="./img_phishing/phishing3.png" alt="recup" class="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
        </div>
      </div>
  
      <!-- Conclusion -->
      <p class="text-lg text-center mb-12">
        Ce projet nous a permis de réaliser une campagne de phishing, de créer une copie du formulaire d'un site 
        et de comprendre comment un hacker planifie la récupération de données sensibles.
      </p>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Styles personnalisés si nécessaire */
 
  </style>
  