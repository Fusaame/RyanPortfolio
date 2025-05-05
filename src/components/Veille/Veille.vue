<template>
    <div class="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] relative">
      <h1 class="text-4xl pb-4 sm:text-5xl font-extrabold text-center text-gray-800 mb-4">
        Cybersécurité des données
      </h1>
      <div class="border-t-4 border-blue-400 w-24 mx-auto mb-12"></div>
      
  
      <!-- Informations sur le sujet -->
        <div class="w-full text-center max-w-5xl bg-white p-8 rounded-xl shadow-lg mb-16 flex flex-col lg:flex-row items-center gap-8">
        <!-- Colonne gauche : textes -->
        <div class="space-y-6 flex-1">
            <div>
            <h2 class="text-2xl mb-2 text-center font-semibold text-gray-800">Mon sujet</h2>
            <p class="text-gray-700">
                Cybersécurité des données : Analyser les menaces actuelles et les solutions innovantes pour sécuriser les informations face aux cyberattaques modernes.
            </p>
            </div>
            <div>
            <h2 class="text-2xl mb-2 text-center font-semibold text-gray-800">Pourquoi j'ai choisi ce sujet ?</h2>
            <p class="text-gray-700">
                La cybersécurité est un enjeu majeur pour les entreprises et les particuliers. Avec l'augmentation des cyberattaques, il est essentiel de comprendre les risques et les solutions pour protéger nos données.
            </p>
            </div>
            <div>
            <h2 class="text-2xl mb-2 text-center font-semibold text-gray-800">Outils</h2>
            <div class="flex items-center justify-center space-x-6 mt-4">
                <img src="./imgVeille/Feedly.png" alt="Feedly" class="w-16 h-auto object-contain" />
                <img src="./imgVeille/Google_news_logo.png" alt="Google News" class="w-16 h-auto object-contain" />
                <img src="./imgVeille/Medium.png" alt="Medium" class="w-16 h-auto object-contain" />
            </div>
            </div>
        </div>

        <!-- Colonne droite : image robot -->
        <div class="flex justify-center flex-1">
            <img src="./imgVeille/robot.png" alt="Robot" class="max-w-xs w-112 h-112 object-contain" />
        </div>
        </div>


  
      <!-- Articles -->
      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="article in articles"
          :key="article.id"
          class="max-w-sm bg-[#ffffff] backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400 w-full mx-auto"
        >
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ article.title }}</h3>
            <p class="text-gray-700 mb-3">{{ article.description }}</p>
            <p class="text-sm text-gray-500">📅 {{ article.date }}</p>
          </div>
          <a
            :href="article.link"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block text-center px-5 py-2 ml-8 mr-8 bg-[#4c6ef5] text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            Lire l'article
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: [
          {
            id: 11,
            title: "Cybersécurité - Fortinet",
            description: "Alerte cybersécurité en cours : l'ANSSI signale une faille critique sur les équipements Fortinet en France",
            date: "11 Avril 2025",
            link: "https://www.clubic.com/actualite-561774-alerte-cybersecurite-en-cours-anssi-signale-une-faille-critique-sur-les-equipements-fortinet-en-france.html",
          },
          {
            id: 9,
            title: "Cybersécurité - Adresse IP",
            description: "Cyberattaque massive en cours : 2,8 millions d’adresses IP bombardent les périphériques réseau à travers le monde",
            date: "11 février 2025",
            link: "https://www.01net.com/actualites/cyberattaque-massive-cours-28-millions-adresses-ip-bombardent-peripheriques-reseau.html",
          },
          {
            id: 8,
            title: "Cybersécurité - Phishing",
            description: "Phishing : l'année 2024 enregistre une hausse record de clics sur les liens frauduleux",
            date: "8 Janvier 2025",
            link: "https://www.clubic.com/actualite-549383-phishing-l-annee-2024-enregistre-une-hausse-record-de-clics-sur-les-liens-frauduleux.html",
          },
          {
            id: 7,
            title: "Cybersécurité - BitLocker",
            description: "BitLocker sous Windows 11 : une faille permet d’extraire les clés de chiffrement des volumes !",
            date: "3 Janvier 2025",
            link: "https://www.it-connect.fr/bitlocker-sous-windows-11-une-faille-permet-dextraire-les-cles-de-chiffrement-des-volumes/?utm_content=cmp-true",
          },
          {
            id: 6,
            title: "Cybersécurité - DATA",
            description: "Cyberattaques : Plusieurs sites Internet de villes et départements français hackés par un groupe prorusse",
            date: "31 Décembre 2024",
            link: "https://www.20minutes.fr/societe/4131533-20241231-cyberattaques-plusieurs-sites-internet-villes-departements-francais-hackes-groupe-prorusse",
          },
          {
            id: 2,
            title: "Cybersécurité - Intelligence Artificielle",
            description: "Thales présente GenAI4SOC, son IA générative pour accélérer la détection des cyberattaques",
            date: "21 novembre 2024",
            link: "https://www.usine-digitale.fr/article/thales-presente-genai4soc-son-ia-generative-pour-accelerer-la-detection-des-cyberattaques.N2222953",
          },
          {
            id: 4,
            title: "Cybersécurité - Direct Assurance",
            description: "Direct Assurance victime d'une cyberattaque, les données de 15 000 clients dérobées",
            date: "13 novembre 2024",
            link: "https://www.usine-digitale.fr/article/cybersecurite-sofinco-victime-d-une-fuite-de-donnees-des-informations-bancaires-exposees.N2220710",
          },
          {
            id: 5,
            title: "Cybersécurité - Sofinco",
            description: "Cybersécurité : Sofinco victime d’une fuite de données, des informations bancaires exposées",
            date: "18 octobre 2024",
            link: "https://www.usine-digitale.fr/article/cybersecurite-sofinco-victime-d-une-fuite-de-donnees-des-informations-bancaires-exposees.N2220710",
          },
          {
            id: 1,
            title: "Cybersécurité - DATA",
            description: "Internet Archive victime d’une cyberattaque, les données de 31 millions d’internautes dans la nature",
            date: "10 octobre 2024",
            link: "https://www.usine-digitale.fr/article/internet-archive-victime-d-une-cyberattaque-les-donnees-de-31-millions-d-internautes-dans-la-nature.N2220284",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  