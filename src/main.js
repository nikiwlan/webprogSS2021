import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from './router'

//createApp(App).use(VueAxios, axios, router).mount('#app')

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');