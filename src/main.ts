import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory} from 'vue-router';


import App from './App.vue'
import Home from './components/Home.vue' 
import LogIn from './components/LogIn.vue' 
import SignUp from './components/SignUp.vue'
import reservations from './components/customer/reservations.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signup',
        component: SignUp, 
    },
    {
        path: '/login',
        component: LogIn, 
    }
    ,
    {
        path: '/customer/reservations',
        component: reservations, 
    }
   
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router);
app.use(createPinia())

app.mount('#app')
