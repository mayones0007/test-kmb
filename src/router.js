
import AboutUser from "./pages/AboutUser.vue"
import MyRoles from "./pages/MyRoles.vue"
import MyPictures from "./pages/MyPictures.vue"

import { createRouter, createWebHistory } from "vue-router"

export const routes = [
  { path: '/about', name: 'about', component: AboutUser },
  { path: '/mypictures', name: 'mypictures', component: MyPictures },
  { path: '/myroles', name: 'myroles', component: MyRoles },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
