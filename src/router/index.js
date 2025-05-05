import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/PageAccueil.vue';
import Phishing from '@/components/PagePhishing.vue';
import Stage from '@/components/PageStage.vue';
import Veille from '@/components/PageVeille.vue';
import Glpi from '@/components/PageGlpi.vue';
import Java from '@/components/PageJava.vue';
import Entreprise from '@/components/PageEntreprise.vue';
import Projets from '@/components/PageProjets.vue';
import Bilan from '@/components/PageBilan.vue';
import Portfolio from '@/components/PagePortfolio.vue';
import Nathan from '@/components/PageNathan.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/phishing',
    component: Phishing,
  },
  {
    path: '/stage',
    component: Stage,
  },
  {
    path: '/veille',
    component: Veille,
  },
  {
    path: '/glpi',
    component: Glpi,
  },
  {
    path: '/java',
    component: Java,
  },
  {
    path: '/entreprise',
    component: Entreprise,
  },
  {
    path: '/projets',
    component: Projets,
  },
  {
    path: '/bilan',
    component: Bilan,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/nathan',
    component: Nathan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
