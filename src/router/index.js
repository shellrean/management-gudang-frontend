import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Barang from '../views/barang/Barang.vue'
import NewBarang from '../views/barang/New.vue'
import UpdateBarang from '../views/barang/Update.vue'

import Pengirim from '../views/pengirim/Pengirim.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/barang',
    name: 'barang.index',
    component: Barang
  },
  {
    path: '/barang/new',
    name: 'barang.new',
    component: NewBarang
  },
  {
    path: '/barang/update',
    name: 'barang.update',
    component: UpdateBarang
  },
  {
    path: '/pengirim',
    name: 'pengirim.index',
    component: Pengirim
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
