<template>
  <!-- Navigation Bar -->
  <nav class="nav-bg shadow sticky top-0 z-50">
    <div class="absolute inset-0 w-full backdrop-blur-md -z-10"></div>
    <div class="lg:container lg:mx-auto">
      <div class="flex justify-between items-center h-16 px-4">
        <!-- Logo (Mobile and Tablet) -->
        <div class="flex-shrink-0 lg:hidden md:hidden">
          <router-link to="/" class="text-xl font-bold">
            <img
              src="../assets/img/logo.png"
              class="h-12 w-12 bg-amber-100 rounded-full"
              alt="logo"
            />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex justify-center space-x-6 w-full">
          <router-link to="/" :class="desktopHomeClass" class="font-medium">
            Home
          </router-link>

          <!-- Dropdown menus -->
          <DropdownMenu
            v-for="menu in menus"
            :key="menu.title"
            :title="menu.title"
            :basePath="menu.basePath"
            :links="menu.items"
          />

          <!-- Direct Events Link -->
          <router-link
            to="/events"
            class="font-medium text-white hover:text-amber-200"
            :class="{
              'border-b-2 border-amber-400 text-amber-200':
                isActiveRoute('/events'),
            }"
          >
            Events
          </router-link>

          <!-- Web Print Articles -->
          <router-link
            to="/web-articles"
            class="font-medium text-white hover:text-amber-200"
            :class="{
              'border-b-2 border-amber-400 text-amber-200':
                isActiveRoute('/web-articles'),
            }"
          >
            Web Articles
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="text-white focus:outline-none md:hidden"
        >
          <svg
            class="w-8 h-8 transition-transform duration-300"
            :class="{
              'rotate-[-90deg]': isMobileMenuExpanded,
              'rotate-0': !isMobileMenuExpanded,
            }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Content -->
      <div
        v-if="isMobileMenuExpanded"
        class="md:hidden dropdown-bg text-white tracking-wide"
      >
        <div class="mobile-menu-container">
          <ul class="px-4 py-2 space-y-3">
            <li>
              <router-link
                to="/"
                :class="mobileHomeClass"
                class="block font-semibold"
                @click="closeMobileMenu"
              >
                Home
              </router-link>
            </li>

            <!-- Dropdown sections -->
            <li v-for="menu in menus" :key="menu.title">
              <hr class="border mb-1" />
              <p class="font-semibold mb-1">{{ menu.title }}</p>

              <span class="space-y-2">
                <router-link
                  v-for="item in menu.items"
                  :key="item.path"
                  :to="item.path"
                  :class="mobileMenuLinkClass(item.path)"
                  class="block px-4"
                  @click="closeMobileMenu"
                >
                  {{ item.label }}
                </router-link>
              </span>
            </li>

            <!-- Events -->
            <li>
              <hr class="border mb-1" />
              <router-link
                to="/events"
                class="block font-semibold"
                :class="mobileMenuLinkClass('/events')"
                @click="closeMobileMenu"
              >
                Events
              </router-link>
            </li>

            <!-- Web Print Articles -->
            <li>
              <hr class="border mb-1" />
              <router-link
                to="/web-articles"
                class="block font-semibold"
                :class="mobileMenuLinkClass('/web-articles')"
                @click="closeMobileMenu"
              >
                Web Articles
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";

export default {
  components: { DropdownMenu },

  data() {
    return {
      isMobileMenuExpanded: false,
      menus: [
        {
          title: "About Us",
          basePath: "/about",
          items: [
            { label: "Our Story", path: "/about/story" },
            { label: "Team Members", path: "/about/team" },
            { label: "DEI", path: "/about/dei" },
          ],
        },
        {
          title: "Magazine",
          basePath: "/magazine",
          items: [
            { label: "Porijaan - The Magazine", path: "/magazine" },
            { label: "Independent Category", path: "/magazine/topics" },
            { label: "Annual Theme", path: "/magazine/theme" },
            { label: "Annual Remembrance", path: "/magazine/celebration" },
            { label: "Obituary", path: "/magazine/memory" },
          ],
        },
        {
          title: "Contribute",
          basePath: "/contribute",
          items: [
            { label: "Join Our Network", path: "/contribute/membership" },
            { label: "Donate", path: "/contribute/donate" },
            {
              label: "Contribute to the Magazine",
              path: "/contribute/submission-form",
            },
          ],
        },
      ],
    };
  },

  computed: {
    desktopHomeClass() {
      return {
        "border-b-2 border-amber-400 text-amber-200": this.$route.path === "/",
        "text-white hover:text-amber-200": this.$route.path !== "/",
      };
    },

    mobileHomeClass() {
      return {
        "text-amber-200 font-bold": this.$route.path === "/",
        "text-white": this.$route.path !== "/",
      };
    },
  },

  watch: {
    $route() {
      this.isMobileMenuExpanded = false;
      this.updateBodyScrollLock();
    },
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuExpanded = !this.isMobileMenuExpanded;
      this.updateBodyScrollLock();
    },

    closeMobileMenu() {
      setTimeout(() => {
        this.isMobileMenuExpanded = false;
        this.updateBodyScrollLock();
      }, 50);
    },

    updateBodyScrollLock() {
      if (this.isMobileMenuExpanded) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },

    // ⭐ NEW: Detect nested section routes
    isActiveRoute(route) {
      return this.$route.path.startsWith(route);
    },

    mobileMenuLinkClass(path) {
      return {
        "text-amber-200 font-bold": this.$route.path.startsWith(path),
        "text-white": !this.$route.path.startsWith(path),
      };
    },
  },
};
</script>

<style>
/* Background blur and color for dropdown */
.dropdown-bg {
  background: linear-gradient(
    90deg,
    rgba(40, 11, 139, 0.75),
    rgba(40, 11, 139, 0.9)
  );
  z-index: 50;
}

/* Lock body scroll when mobile menu open */
.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

/* Scrollable container for mobile menu */
.mobile-menu-container {
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding-bottom: 2rem;
}

/* Navigation background */
.nav-bg {
  background: linear-gradient(
    90deg,
    rgba(247, 181, 56, 0.8) 5%,
    rgba(247, 181, 56, 0.6) 10%,
    rgba(40, 11, 139, 0.7) 40%,
    #280b8b 100%
  );
}

@media (min-width: 768px) {
  .nav-bg {
    background: linear-gradient(
      270deg,
      rgba(247, 181, 56, 0.8) 5%,
      rgba(247, 181, 56, 0.6) 10%,
      rgba(40, 11, 139, 0.7) 40%,
      #280b8b 100%
    );
  }

  .dropdown-bg {
    background: rgba(40, 11, 139, 0.6);
    backdrop-filter: blur(8px);
    z-index: 50;
  }
}
</style>
