import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/Main.vue';
import Phishing from '@/components/PagePhishing.vue';
import Stage from '@/components/PageStage.vue';
import Green from '@/components/PageGreen.vue';
import Glpi from '@/components/PageGlpi.vue';
import Java from '@/components/PageJava.vue';

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
    path: '/greenIT',
    component: Green,
  },
  {
    path: '/glpi',
    component: Glpi,
  },
  {
    path: '/java',
    component: Java,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
