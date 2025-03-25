import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Assurez-vous que le chemin est correct
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
