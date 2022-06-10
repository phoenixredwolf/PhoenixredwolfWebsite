import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

const Home = { template: '<div>HomePage</div>' }
const Login = { template: '<div>LogIn</div>'}

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(BootstrapVue).use(router).mount('#app')
