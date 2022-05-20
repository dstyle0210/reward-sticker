import { createApp } from 'vue';
import App from './draw.vue';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.axios=axios
app.mount('#app');