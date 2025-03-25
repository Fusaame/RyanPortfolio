<template>
    <div class="pt-32 px-6 lg:px-20 bg-gray-50 text-gray-800 font-eczar">

      <!-- Titre Principal -->
      <h1 class="text-4xl font-bold text-center text-black mb-8">Application Java : Book&You</h1>

      <!-- Introduction -->
      <p class="text-lg text-center mb-8 max-w-3xl mx-auto text-red-500">
        Nous avions comme mission de créer une application pour une bibliothèque Book&You pour pouvoir gérer l'emprunt et le rendu des livres.
      </p>

      <!-- Section Bases de Données -->
      <div class="mb-12">
        <h2 class="text-3xl font-semibold text-center text-black mb-4">Base de Données : AP2</h2>
        <img src="./img_java/bddAP2.png" alt="bdd" class="mx-auto rounded-lg shadow-lg mb-8 max-w-[50%]">
      </div>

      <!-- Accueil Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Accueil de la page</h2>
        <img src="./img_java/accueilAP2.png" alt="login" class="mx-auto rounded-lg shadow-lg mb-4 w-2/4">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous avez ici le choix de vous diriger vers le rubrique qui vous interesse</p>
      </div>

      <!-- Catalogue Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Catalogue de livre</h2>
        <img src="./img_java/catalogue.png" alt="accueil" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez ici consulter les livres de la bibliothèque, voir son ISBN, son titre, son prix, sa disponibilité, son état</p>
      </div>

      <!-- Mon compte Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Mon Compte</h2>
        <img src="./img_java/mocompte.png" alt="modifCR" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Ici vous pouvez rentrer votre N° Client pour consulter les livres que vous avez emprunter.</p>
      </div>

      <!-- Emprunter un livre -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Emprunter un livre</h2>
        <img src="./img_java/emprunter.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Emprunter un livre n'a jamais été aussi simple, rentrez votre N° Client et l'ISBN du livre que vous voulez emprunter ! Vous avez l'autorisation dans notre bibliothèque d'emprunter un maximum de 5 livres.</p>
      </div>

      <!-- Rendre un livre -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Rendre un livre</h2>
        <img src="./img_java/rendre.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez rendre un livre en mettant votre N° Client et l'ISBN du livre que vous avez déjà emprunté, le livre doit être présent dans votre liste de livre emprunté.</p>
      </div>

      <!-- Liste adhérent -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Consulter la liste des adhérents</h2>
        <img src="./img_java/listeAdherent.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez ici voir la liste des adhérents de notre bibliothèque.</p>
      </div>

      <!-- Liste Auteur -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-black">Consulter la liste des auteurs</h2>
        <img src="./img_java/listeAuteur.png" alt="creation" class="mx-auto rounded-lg shadow-lg mb-4 w-3/4 md:w-1/2">
        <p class="text-lg text-center mb-8 max-w-3xl mx-auto">Vous pouvez ici voir la liste des auteurs qui ont des livres dans notre notre bibliothèque.</p>
      </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
  /* Ajout d'un style personnalisé pour les titres */
  h2 {
    color: black;
  }
</style>
