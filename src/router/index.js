//src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/assignment/1",
    name: "Assignment1",
    beforeEnter(to, from, next) {
      window.open("https://haqqi-syahputra-2231510766-pbk.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/2",
    name: "Assignment2",
    beforeEnter(to, from, next) {
      window.open("https://haqqi-223510766.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/3",
    name: "Assignment3",
    beforeEnter(to, from, next) {
      window.open("https://tugas-prak-pbk-3-haqqi.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/4",
    name: "Assignment4",
    beforeEnter(to, from, next) {
      window.open("https://haqqi-pbk4.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/5",
    name: "Assignment5",
    beforeEnter(to, from, next) {
      window.open("https://tugas5pbk-theta.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/6",
    name: "Assignment6",
    beforeEnter(to, from, next) {
      window.open("https://tugas6pbk-umber.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
