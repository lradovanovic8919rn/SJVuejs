import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Users from '@/views/Users.vue';
import Watches from '@/views/Watches.vue';
import Storages from '@/views/Storages.vue';
import Orders from '@/views/Orders.vue';





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/storages',
    name: 'Storages',
    component: Storages
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/watches',
    name: 'Watches',
    component: Watches
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
