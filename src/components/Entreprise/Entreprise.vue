<template>
  <section class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
    <h1 class="text-4xl pb-4 sm:text-5xl font-extrabold text-center text-gray-800 mb-4">Entreprise</h1>
    <div class="border-t-4 border-blue-400 w-24 mx-auto mb-12"></div>
    <!-- Image en arrière-plan -->
    <img src="./imgEnt/Elsan2.png" alt="Logo Elsan" class="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 " />

    <!-- Contenu principal -->
<div class="relative z-10 max-w-6xl mb-20 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
  <!-- Partie gauche : Titre ELSAN -->
  <div class="lg:w-1/3 text-center lg:text-left">
    <img src="./imgEnt/Elsan.png" alt="">
  </div>

  <!-- Partie droite : Texte -->
  <div class="lg:w-2/3 space-y-4">
    <p class="text-gray-700">
      ELSAN est un groupe majeur d'hospitalisation privée en France, avec plus de 140 cliniques et hôpitaux. 
      Il propose une offre de soins complète et s'engage pour la qualité, l'innovation et l'accompagnement des patients.
    </p>
    <p class="text-lg text-gray-700">
      Actuellement, je suis intégré à <strong>SENY</strong>, une filiale d'<span class="font-semibold">ELSAN</span> spécialisée en radiothérapie et oncologie.
    </p>
  </div>
</div>


    <!-- Grid contenant les cartes -->
    <div class="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Carré gauche : Organigramme -->
      <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 text-center ">Organigramme</h2>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>- Directeur : <strong>Eddy DABRIGEON</strong></li>
          <li>- Responsable IT : <strong>Mickaël VIAPIANA</strong></li>
          <li>- Equipe technique : <strong>Kevin MAWETE - DE JESUS CABRAL Ryan</strong></li>
        </ul>
      </div>

      <!-- Carré droit : Sites gérés -->
      <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 text-center ">Sites que je gère</h2>
        <ul class="text-gray-600 space-y-2">
          <li>- Radiothérapie d'Hartmann - Levallois</li>
          <li>- BIM BICHAT - Paris Nord</li>
          <li>- BIM - Beaujon</li>
          <li>- Thérapix - Sarcelles</li>
        </ul>
      </div>

      <!-- Rectangle en dessous sur toute la largeur -->
      <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-400 transition md:col-span-2">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800  text-center">Mon rôle</h2>
      <p class="text-gray-600 leading-relaxed">
        Au sein de SENY, je réponds aux différents besoins des utilisateurs et veille à garantir une qualité optimale du système d'information (SI).<br><br>
        Mes missions incluent l'administration des niveaux d'habilitation des utilisateurs, la gestion du parc informatique ainsi que la maintenance des serveurs.<br><br>
        Grâce à mon investissement et à ma rigueur, j'ai également eu l'opportunité de participer à des projets DevOps, renforçant ainsi mes compétences techniques et mon implication dans les projets stratégiques de l'entreprise.
      </p>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'PrésentationElsan',
};
</script>

<style scoped>
/* Tout est géré par Tailwind */
</style>
