import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Student from "../views/Student";
import tos from "../views/TermsOfService";
import PrivacyPolicy from "../views/PrivacyPolicy";
import Login from "../views/Login";

const routes = [
  {
    path: "/",
    name: 'Login',
    component: Login,
  },
  {
    path: "/home",
    name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/student",
    name: 'Student',
    component: Student,
  },
  {
    path:"/privacy",
    name:'PrivacyPolicy',
    component:PrivacyPolicy
  },
  {
    path:"/tos",
    name: 'Tos',
    component:tos
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
