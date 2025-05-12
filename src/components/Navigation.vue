<template>
  <!-- Navigation Bar -->
  <nav class="nav-bg shadow sticky top-0 z-50" @click.self="closeDropdowns">
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
          <!-- Home Link -->
          <router-link to="/" :class="desktopHomeClass" class="font-medium">
            Home
          </router-link>
          <!-- Dropdown Menus -->
          <DropdownMenu
            v-for="menu in menus"
            :key="menu.title"
            :title="menu.title"
            :basePath="menu.basePath"
            :links="menu.items"
          />
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
            xmlns="http://www.w3.org/2000/svg"
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
        :class="{
          'max-h-0 opacity-0': !isMobileMenuExpanded,
          'max-h-[1000px] opacity-100': isMobileMenuExpanded,
        }"
        class="md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out dropdown-bg text-white tracking-wide"
      >
        <ul class="px-4 py-2 space-y-3">
          <li>
            <router-link
              to="/"
              :class="mobileHomeClass"
              class="block font-semibold"
              @click="toggleMobileMenu"
            >
              Home
            </router-link>
          </li>
          <template v-for="menu in menus" :key="menu.title">
            <li>
              <hr class="border mb-1" />
              <p class="font-semibold mb-1">{{ menu.title }}</p>
              <span class="space-y-2">
                <router-link
                  v-for="item in menu.items"
                  :key="item.path"
                  :to="item.path"
                  :class="mobileMenuLinkClass(item.path)"
                  class="block px-4"
                  @click="toggleMobileMenu"
                >
                  {{ item.label }}
                </router-link>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";

export default {
  components: {
    DropdownMenu,
  },
  data() {
    return {
      isMobileMenuExpanded: false,
      // Menu data for both desktop and mobile
      menus: [
        {
          title: "About Us",
          basePath: "/about",
          items: [
            { label: "Our Story", path: "/about/story" },
            { label: "Team Members", path: "/about/team" },
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
        {
          title: "Events",
          basePath: "/events",
          items: [
            {
              label: "Bhasha Dibosh",
              path: "/events/21stFebruary-International-Mother-Language-Day",
            },
            {
              label: "Women's History Month",
              path: "/events/women-history-month",
            },
            { label: "Noboborsho", path: "/events/pohela-baishakh" },
            { label: "Birth Anniversary", path: "/events/birth-anniversary" },
          ],
        },
      ],
      // Example of other data properties
      membershipOptions: [
        {
          title: "Internal Member",
          description: "Join as an internal member for exclusive benefits.",
          link: "https://www.zeffy.com/en-CA/ticketing/bangali-abhibasi-network-a-glocal-linguo-cultural-association-memberships--2025",
          buttonText: "Join Now",
        },
        // other membership options...
      ],
    };
  },
  computed: {
    // Computed class for desktop Home link
    desktopHomeClass() {
      return {
        "border-b-2 border-amber-400 text-amber-200": this.isActiveRoute("/"),
        "text-white hover:text-amber-200": !this.isActiveRoute("/"),
      };
    },
    // Computed class for mobile Home link
    mobileHomeClass() {
      return {
        "text-amber-200 font-bold": this.isActiveRoute("/"),
        "text-white": !this.isActiveRoute("/"),
      };
    },
  },
  methods: {
    // Toggles the mobile menu expanded state
    toggleMobileMenu() {
      this.isMobileMenuExpanded = !this.isMobileMenuExpanded;
    },
    // Checks if the current route is the given route
    isActiveRoute(route) {
      return this.$route.path === route;
    },
    // Checks if the current route starts with the given parent route
    isParentRouteActive(parentRoute) {
      return this.$route.path.startsWith(parentRoute);
    },
    // Computed class for mobile menu links
    mobileMenuLinkClass(path) {
      return {
        "text-amber-200 font-bold": this.isActiveRoute(path),
        "text-white": !this.isActiveRoute(path),
      };
    },
    // Placeholder for closing dropdowns if needed in future
    closeDropdowns() {
      // Logic to close dropdowns
    },
  },
};
</script>

<style>
/* Styles for the dropdown background (mobile) */
.dropdown-bg {
  background: linear-gradient(
    90deg,
    rgba(40, 11, 139, 0.75),
    rgba(40, 11, 139, 0.9)
  );
  z-index: 50;
}

/* Styles for the main navigation background */
.nav-bg {
  background: linear-gradient(
    90deg,
    rgba(247, 181, 56, 0.8) 5%,
    rgba(247, 181, 56, 0.6) 10%,
    rgba(40, 11, 139, 0.7) 40%,
    #280b8b 100%
  );
}

/* Media query for desktop styles */
@media (min-width: 768px) {
  /* Styles for the main navigation background on desktop */
  .nav-bg {
    background: linear-gradient(
      270deg,
      rgba(247, 181, 56, 0.8) 5%,
      rgba(247, 181, 56, 0.6) 10%,
      rgba(40, 11, 139, 0.7) 40%,
      #280b8b 100%
    );
  }

  /* Styles for the dropdown background on desktop (frosted glass effect) */
  .dropdown-bg {
    background: rgba(40, 11, 139, 0.6); /* Adjust opacity for frosted effect */
    backdrop-filter: blur(8px); /* Frosted glass effect */
    z-index: 50;
  }
}
</style>
