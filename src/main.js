import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import * as router from "./router"

createApp(App).use(VueAxios, axios, router).mount('#app')