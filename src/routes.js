import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router' //npm install --save vue-router
import Login from "./components/Login.vue"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"

const routes = [
    {
        name: 'HelloWorld',
        component: HelloWorld,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'LoginComponent',
        component: Login,
        path: '/login',
    },
    {
        name: 'AddRestaurant',
        component: Add,
        path: '/add',
    },
    {
        name: 'UpdateRestaurant',
        component: Update,
        path: '/update/:id',
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router