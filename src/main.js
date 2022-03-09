import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import setIcons from '@/assets/fontAwesomeIcons.js';

// font awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// set icons from font-awesome
setIcons();

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
