import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContributeView from "../views/ContributeView.vue";
import CookieSettingsView from "../views/CookieSettingsView.vue";
import ContributeSubmissionView from "../views/ContributeSubmissionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contribute",
      name: "contribute",
      component: ContributeView,
    },
    {
      path: "/cookie-settings",
      name: "cookie",
      component: CookieSettingsView,
    },
    {
      path: "/submission-form",
      name: "submission",
      component: ContributeSubmissionView,
    },
  ],
});

export default router;
