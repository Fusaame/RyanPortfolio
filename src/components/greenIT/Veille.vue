<template>
  <div class="p-6 font-sans">
    <h1 class="text-4xl font-bold mb-4 pt-28 text-center">Cybersécurité des données</h1>
    <p class="mb-6 text-center">
      <strong>Sujet :</strong> Quelles sont les nouvelles menaces et solutions pour sécuriser les données face aux attaques modernes ?
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
      <div
        v-for="article in articles"
        :key="article.id"
        class="p-4 border rounded shadow-md bg-white flex flex-col justify-between"
      >
        <div>
          <h3 class="text-lg font-semibold mb-2">{{ article.title }}</h3>
          <p class="text-gray-700 mb-2">{{ article.description }}</p>
          <p class="text-sm text-gray-500 mb-4">Date : {{ article.date }}</p>
        </div>
        <a
          :href="article.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-auto self-start px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:ring focus:ring-gray-400"
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
