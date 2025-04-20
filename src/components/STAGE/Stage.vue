<template>
    <div class="pt-32 px-6 lg:px-20 bg-gray-50 text-gray-800 font-eczar">

      <!-- Titre Principal -->
      <h1 class="text-4xl font-bold text-center text-black mb-8">STAGE PROJECT</h1>

      <!-- Introduction -->
      <p class="text-lg text-center mb-8 max-w-3xl mx-auto text-red-500">
        Nous avions comme mission de créer un site de stage consultable par les élèves pour qu'ils puissent rentrer chaque jour le compte-rendu de leur journée en entreprise.
      </p>

      <div class="flex justify-center mt-6">
        <button 
          @click="AnnexeAP1PDF"
          class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        >
          📄 Annexe 9.1
        </button>
    </div>


      <!-- Section Bases de Données -->
      <div class="mb-12">
        <h2 class="text-3xl font-semibold text-center text-black mb-4">Base de Données : STAGE</h2>
        <img src="./img_stage/bdd.png" alt="bdd" class="mx-auto rounded-lg shadow-lg mb-8 max-w-[80%]">
      </div>

      <!-- Login Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Login pour se connecter à la page</h2>
        <img src="./img_stage/login.png" alt="login" class="mx-auto rounded-lg shadow-lg mb-4 w-1/4">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Les mots de passes stockés sont sécurisés dans la base de données (ils ne sont pas stockés en clair, imposée par le RGPD).</p>
      </div>

      <!-- Accueil Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Bienvenu sur la page d'accueil ELEVE</h2>
        <img src="./img_stage/accueil.png" alt="accueil" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">On précise le nom de l'élève identifié grâce à son login qui devient donc une variable de session. Vous avez ici le choix de consulter vos compte-rendus, ou créer le compte-rendu de votre journée.</p>
      </div>

      <!-- Compte-rendus Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Liste des compte-rendus</h2>
        <img src="./img_stage/modifCR.png" alt="modifCR" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Sur cette page, vous pouvez consulter vos différents compte-rendus, et les modifier si jamais une information vous a échappé. La date de modification sera mise à jour automatiquement.</p>
      </div>

      <!-- Création de Compte-rendu -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Créer un compte-rendu</h2>
        <img src="./img_stage/creationCR.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez créer votre compte rendu du jour. Si vous avez oublié celui d'hier, pas de panique ! Il suffira de préciser la date, sinon elle sera définie par défaut à la date actuelle. N'oubliez pas de mettre une note à votre stage.</p>
      </div>

      <!-- Voir ses informations -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Vos informations</h2>
        <img src="./img_stage/informations.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez consulter vos informations.</p>
      </div>

      <!-- Accueil ADMIN -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Accueil Professeur</h2>
        <img src="./img_stage/accADMIN.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">En tant que professeur vous accéderez à cette page avec votre status, vous pourrez voir la liste complète des comptes rendus des élèves.</p>
      </div>

      <!-- Compte rendu eleve de la partie professeur -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Compte-rendu de tous les élèves</h2>
        <img src="./img_stage/visionProfSurCR.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Voici la liste complète des comptes rendus des élèves. Deux boutons vous seront proposé, le premier pour consulter les détails du compte-rendu et le second pour accéder aux informations de l'élève à qui appartient le compte-rendu.</p>
      </div>

      <!-- Compte rendu detail -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Détails du compte-rendu</h2>
        <img src="./img_stage/detailCR.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Voici les détails du compte-rendu choisi. Une fois consulté le compte-rendu sera affiché en "vu = Oui" pour vous et l'élève.</p>
      </div>

      <!-- Oubli de mot de passe -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Un oubli de mot de passe ?</h2>
        <img src="./img_stage/mdplost.png" alt="mdplost" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <!--<img src="./img_stage/mailrecup.png" alt="mailrecup" class="mx-auto rounded-lg shadow-lg mb-4 w-1/4 md:w-1/6"> -->
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Si vous avez oublié votre mot de passe, notre site vous demandera votre mail. Si le mail existe dans notre base de données, vous recevrez un email avec un nouveau mot de passe.</p>
      </div>

    </div>
</template>

<script setup>
const AnnexeAP1PDF = () => {
  window.open('/AP1.pdf', '_blank'); // Ouvre le PDF dans un nouvel onglet
};
</script>

<style scoped>
  /* Ajout d'un style personnalisé pour les titres */
  h2 {
    color: black;
  }
</style>
