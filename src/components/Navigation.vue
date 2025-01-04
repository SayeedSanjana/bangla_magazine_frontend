<template>
  <nav class="nav-bg shadow relative z-50" @click.self="closeDropdowns">
    <div class="lg:container lg:mx-auto">
      <div class="flex justify-between items-center h-16 px-4">
        <!-- Logo -->
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
          <!-- Home -->
          <router-link
            to="/"
            :class="{
              'border-b-2 border-amber-400 text-amber-200': isActiveRoute('/'),
              'text-white hover:text-amber-200': !isActiveRoute('/'),
            }"
            class="font-medium"
          >
            Home
          </router-link>

          <!-- About Us Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-200':
                  isParentRouteActive('/about'),
                'text-white hover:text-amber-200':
                  !isParentRouteActive('/about'),
              }"
              class="font-medium focus:outline-none"
            >
              About Us
            </button>
            <div
              class="absolute left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <router-link
                to="/about/story"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/about/story'),
                  'text-white hover:bg-amber-500':
                    !isActiveRoute('/about/story'),
                }"
                class="block px-4 py-2"
              >
                Our Story
              </router-link>

              <router-link
                to="/about/team"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/about/team'),
                  'text-white hover:bg-amber-500 hover:rounded-b-md':
                    !isActiveRoute('/about/team'),
                }"
                class="block px-4 py-2"
              >
                Team Members
              </router-link>
            </div>
          </div>

          <!-- Magazine Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-200':
                  isParentRouteActive('/magazine'),
                'text-white hover:text-amber-200':
                  !isParentRouteActive('/magazine'),
              }"
              class="font-medium focus:outline-none"
            >
              Magazine
            </button>
            <div
              class="absolute left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <router-link
                to="/magazine"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine'),
                  'text-white hover:bg-amber-500': !isActiveRoute('/magazine'),
                }"
                class="block px-4 py-2"
              >
                Porijaan - The Magazine
              </router-link>
              <router-link
                to="/magazine/topics"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/topics'),
                  'text-white hover:bg-amber-500':
                    !isActiveRoute('/magazine/topics'),
                }"
                class="block px-4 py-2"
              >
                Independent Category
              </router-link>
              <router-link
                to="/magazine/theme"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/theme'),
                  'text-white hover:bg-amber-500':
                    !isActiveRoute('/magazine/theme'),
                }"
                class="block px-4 py-2"
              >
                Annual Theme
              </router-link>
              <router-link
                to="/magazine/celebration"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute(
                    '/magazine/celebration'
                  ),
                  'text-white hover:bg-amber-500': !isActiveRoute(
                    '/magazine/celebration'
                  ),
                }"
                class="block px-4 py-2"
              >
                Annual Remembrance
              </router-link>
              <router-link
                to="/magazine/memory"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/memory'),
                  'text-white hover:bg-amber-500 hover:rounded-b-md':
                    !isActiveRoute('/magazine/memory'),
                }"
                class="block px-4 py-2"
              >
                Obituary
              </router-link>
            </div>
          </div>

          <!-- Contribute Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-200':
                  isParentRouteActive('/contribute'),
                'text-white hover:text-amber-200':
                  !isParentRouteActive('/contribute'),
              }"
              class="font-medium focus:outline-none"
            >
              Contribute
            </button>
            <div
              class="absolute left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <router-link
                to="/contribute/join"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/contribute/join'),
                  'text-white hover:bg-amber-500':
                    !isActiveRoute('/contribute/join'),
                }"
                class="block px-4 py-2"
              >
                Join Our Network
              </router-link>
              <router-link
                to="/contribute/submission-form"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute(
                    '/contribute/submission-form'
                  ),
                  'text-white hover:bg-amber-500 hover:rounded-b-md':
                    !isActiveRoute('/contribute/submission-form'),
                }"
                class="block px-4 py-2"
              >
                Contribute to the Magazine
              </router-link>
            </div>
          </div>
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

      <!-- Mobile Menu -->
      <div
        :class="{
          'max-h-0 opacity-0': !isMobileMenuExpanded,
          'max-h-[500px] opacity-100': isMobileMenuExpanded,
        }"
        class="md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out dropdown-bg text-white tracking-wide"
      >
        <ul class="px-4 py-2 space-y-3">
          <li>
            <router-link
              to="/"
              :class="{
                'text-amber-200 font-bold': isActiveRoute('/'),
                'text-white': !isActiveRoute('/'),
              }"
              class="block font-semibold"
              @click="toggleMobileMenu"
            >
              Home
            </router-link>
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1">About Us</p>
            <span class="space-y-2">
              <router-link
                to="/about/story"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/about/story'),
                  'text-white': !isActiveRoute('/about/story'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Our Story
              </router-link>

              <router-link
                to="/about/team"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/about/team'),
                  'text-white': !isActiveRoute('/about/team'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Team Members
              </router-link>
            </span>
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1">The Magazine</p>
            <span class="space-y-2">
              <router-link
                to="/magazine"
                class="block px-4"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine'),
                  'text-white': !isActiveRoute('/magazine'),
                }"
                @click="toggleMobileMenu"
              >
                Porijaan - The Magazine
              </router-link>

              <router-link
                to="/magazine/topics"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/topics'),
                  'text-white': !isActiveRoute('/magazine/topics'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Independent Category
              </router-link>
              <router-link
                to="/magazine/theme"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/theme'),
                  'text-white': !isActiveRoute('/magazine/theme'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Annual Theme
              </router-link>
              <router-link
                to="/magazine/celebration"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute(
                    '/magazine/celebration'
                  ),
                  'text-white': !isActiveRoute('/magazine/celebration'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Annual Remembrance
              </router-link>
              <router-link
                to="/magazine/memory"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/magazine/memory'),
                  'text-white': !isActiveRoute('/magazine/memory'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Obituary
              </router-link>
            </span>
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1">Contribute</p>
            <span class="space-y-2">
              <router-link
                to="/contribute/join"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute('/contribute/join'),
                  'text-white': !isActiveRoute('/contribute/join'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Join Our Network
              </router-link>
              <router-link
                to="/contribute/submission-form"
                :class="{
                  'text-amber-200 font-bold': isActiveRoute(
                    '/contribute/submission-form'
                  ),
                  'text-white': !isActiveRoute('/contribute/submission-form'),
                }"
                class="block px-4"
                @click="toggleMobileMenu"
              >
                Contribute to the Magazine
              </router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuExpanded: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuExpanded = !this.isMobileMenuExpanded;
    },
    isActiveRoute(route) {
      return this.$route.path === route;
    },
    isParentRouteActive(parentRoute) {
      return this.$route.path.startsWith(parentRoute);
    },
  },
};
</script>

<style>
.dropdown-bg {
  background: linear-gradient(
    90deg,
    rgba(40, 11, 139, 0.75),
    rgba(40, 11, 139, 0.9)
  );
  z-index: 50;
}

.nav-bg {
  background: linear-gradient(
    90deg,
    rgba(247, 181, 56, 0.8) 5%,
    rgba(247, 181, 56, 0.6) 15%,
    rgba(40, 11, 139, 0.7) 50%,
    #280b8b 100%
  );
}

@media (min-width: 768px) {
  .nav-bg {
    background: linear-gradient(
      270deg,
      /* rgba(247, 181, 56, 0.8) 5%,
      rgba(247, 181, 56, 0.6) 15%,
      rgba(40, 11, 139, 0.7) 50%,
      #280b8b 100% */
        rgba(247, 181, 56, 0.8) 5%,
      rgba(247, 181, 56, 0.6) 15%,
      rgba(40, 11, 139, 0.7) 50%,
      #280b8b 100%
    );
  }

  .dropdown-bg {
    background: #280b8b;
    z-index: 50;
  }
}
</style>
