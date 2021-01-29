import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'

const Login = async () => import("../pages/Login.vue");

const routes = [{
    path: "/",
    component: Home
},
{
    path: "/login",
    name: "login",
    component: Login
}]

export default createRouter({
    history: createWebHistory(),
    routes
})
