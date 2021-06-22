import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';

createApp(App).use(VueAxios, axios, VueRouter).mount('#app')