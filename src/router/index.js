import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContributeView from "../views/ContributeView.vue";
import CookieSettingsView from "../views/CookieSettingsView.vue";
import ContributeSubmissionView from "../views/ContributeSubmissionView.vue";
import TeamMemberView from "../views/TeamMemberView.vue";
import IndependentCategoryView from "../views/IndependentCategoryView.vue";
import AnnaulThemeView from "@/views/AnnaulThemeView.vue";
import CelebratingIconsView from "@/views/CelebratingIconsView.vue";
import MemoryLuminariesView from "@/views/MemoryLuminariesView.vue";
import JoinNetworkView from "@/views/JoinNetworkView.vue";
import InternationalMotherLanguageDayView from "../views/InternationalMotherLanguageDayView.vue";
import DynamicMotherLanguageArticleView from "../views/DynamicMotherLanguageArticleView.vue";
import PohelaBaishakhView from "@/views/PohelaBaishakh.vue";
import DynamicPohelaBaishakhArtivleView from "../views/DynamicPohelaBaishakhArticle.vue";
import WomenHistoryMonthView from "../views/WomenHistoryMonthView.vue";
import DynamicWomenMonthArticlesView from "../views/DynamicWomenMonthArticles.vue";
import BirthAnniversary from "../views/birth-aniversary/BirthAnniversary.vue";
import MembersPlan from "@/views/MembersPlan.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/story",
      name: "about",
      component: AboutView,
    },
    {
      path: "/magazine",
      name: "contribute",
      component: ContributeView,
    },
    {
      path: "/magazine/topics",
      name: "independentCategory",
      component: IndependentCategoryView,
    },
    {
      path: "/magazine/theme",
      name: "annualTheme",
      component: AnnaulThemeView,
    },
    {
      path: "/magazine/celebration",
      name: "annualCelebration",
      component: CelebratingIconsView,
    },
    {
      path: "/magazine/memory",
      name: "obituary",
      component: MemoryLuminariesView,
    },

    {
      path: "/cookie-settings",
      name: "cookie",
      component: CookieSettingsView,
    },
    {
      path: "/about/team",
      name: "team-members",
      component: TeamMemberView,
    },
    {
      path: "/contribute/join",
      name: "join-network",
      component: JoinNetworkView,
    },
    {
      path: "/contribute/membership",
      name: "become-a-member",
      component: MembersPlan,
    },
    {
      path: "/contribute/submission-form/:topicName?",
      name: "submission",
      component: ContributeSubmissionView,
      props: true,
    },
    {
      path: "/events/21stFebruary-International-Mother-Language-Day",
      name: "international-mother-language-day",
      component: InternationalMotherLanguageDayView,
    },
    {
      path: "/events/pohela-baishakh",
      name: "Pohela-Baishakh",
      component: PohelaBaishakhView,
    },
    {
      path: "/events/women-history-month",
      name: "Women-History-Month",
      component: WomenHistoryMonthView,
    },

    {
      path: "/events/:slug",
      name: "article-view",
      component: DynamicMotherLanguageArticleView,
      props: true,
    },
    {
      path: "/events/pohela-baishakh/:slug",
      name: "article-pohela-baishakh-view",
      component: DynamicPohelaBaishakhArtivleView,
      props: true,
    },
    {
      path: "/events/women-month-articles/:slug",
      name: "article-women-month-view",
      component: DynamicWomenMonthArticlesView,
      props: true,
    },
    {
      path: "/events/birth-anniversary/",
      name: "birth-anniversary",
      component: BirthAnniversary,
      props: true,
    },
  ],
  // When you route to any page it will take you to the top of the page
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page on navigation
    return { top: 0, left: 0 };
  },
});

export default router;
