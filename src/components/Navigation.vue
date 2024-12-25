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
              'border-b-2 border-amber-400 text-amber-300': activeLink === '/',
            }"
            @click="setActiveLink('/')"
            class="text-white hover:text-amber-300 font-medium"
          >
            Home
          </router-link>

          <!-- About Us Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-300':
                  activeDropdown === 'about' || isChildActive('/about'),
              }"
              class="text-white hover:text-amber-300 font-medium focus:outline-none"
            >
              About Us
            </button>
            <div
              class="absolute hidden group-hover:block left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50"
            >
              <router-link
                to="/about/story"
                @click="setActiveLink('/about/story')"
                class="block px-4 py-2 text-white hover:bg-amber-500"
              >
                Our Story
              </router-link>

              <router-link
                to="/about/team"
                @click="setActiveLink('/about/team')"
                class="block px-4 py-2 text-white hover:bg-amber-500 hover:rounded-b-md"
              >
                Team Members
              </router-link>
            </div>
          </div>

          <!-- Magazine Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-300':
                  activeDropdown === 'magazine' || isChildActive('/magazine'),
              }"
              class="text-white hover:text-amber-300 font-medium focus:outline-none"
            >
              Magazine
            </button>
            <div
              class="absolute hidden group-hover:block left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50"
            >
              <router-link
                to="/magazine/topics"
                @click="setActiveLink('/magazine/topics')"
                class="block px-4 py-2 text-white hover:bg-amber-500"
              >
                Porijaan-The Magazine
              </router-link>
              <router-link
                to="/magazine/theme"
                @click="setActiveLink('/magazine/theme')"
                class="block px-4 py-2 text-white hover:bg-amber-500"
              >
                Annual Theme
              </router-link>
              <router-link
                to="/magazine/celebration"
                @click="setActiveLink('/magazine/celebration')"
                class="block px-4 py-2 text-white hover:bg-amber-500"
              >
                Annual Celebration
              </router-link>
              <router-link
                to="/magazine/memory"
                @click="setActiveLink('/magazine/memory')"
                class="block px-4 py-2 text-white hover:bg-amber-500 hover:rounded-b-md"
              >
                Memory Of Luminaries
              </router-link>
            </div>
          </div>

          <!-- Contribute Dropdown -->
          <div class="relative group">
            <button
              :class="{
                'border-b-2 border-amber-400 text-amber-300':
                  activeDropdown === 'contribute' ||
                  isChildActive('/contribute'),
              }"
              class="text-white hover:text-amber-300 font-medium focus:outline-none tracking-wide"
            >
              Contribute
            </button>
            <div
              class="absolute hidden group-hover:block left-0 mt-0.5 w-48 dropdown-bg rounded-b-md shadow-lg z-50"
            >
              <router-link
                to="/contribute/network"
                @click="setActiveLink('/contribute/network')"
                class="block px-4 py-2 text-white hover:bg-amber-500"
              >
                Contribute to the Network
              </router-link>
              <router-link
                to="/contribute/magazine"
                @click="setActiveLink('/contribute/magazine')"
                class="block px-4 py-2 text-white hover:bg-amber-500 hover:rounded-b-md"
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
        id="mobile-menu"
        class="md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out dropdown-bg text-white"
      >
        <ul class="px-4 py-2 space-y-3">
          <li>
            <router-link
              to="/home"
              class="block font-semibold tracking-wide"
              :class="{
                'font-bold text-amber-300': activeLink === '/home',
                'font-semibold tracking-wide': activeLink !== '/home',
              }"
              >Home</router-link
            >
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1 tracking-wide">About Us</p>
            <span class="space-y-2">
              <router-link
                to="/about/story"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/about/story',
                  'font-normal': activeLink !== '/about/story',
                }"
                >Our Story</router-link
              >
              <router-link
                to="/about/plot"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/about/plot',
                  'font-normal': activeLink !== '/about/plot',
                }"
                >Our Plot</router-link
              >
              <router-link
                to="/about/team"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/about/team',
                  'font-normal': activeLink !== '/about/team',
                }"
                >Team Members</router-link
              >
            </span>
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1 tracking-wide">
              Porijaan - The Magazine
            </p>
            <span class="space-y-2">
              <router-link
                to="/magazine/topics"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/magazine/topics',
                  'font-normal': activeLink !== '/magazine/topics',
                }"
                >Topics We Are Interested In</router-link
              >
              <router-link
                to="/magazine/theme"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/magazine/theme',
                  'font-normal': activeLink !== '/magazine/theme',
                }"
                >Annual Theme</router-link
              >
              <router-link
                to="/magazine/celebration"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300':
                    activeLink === '/magazine/celebration',
                  'font-normal': activeLink !== '/magazine/celebration',
                }"
                >Annual Celebration</router-link
              >
              <router-link
                to="/magazine/memory"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300': activeLink === '/magazine/memory',
                  'font-normal': activeLink !== '/magazine/memory',
                }"
                >Memory Of Luminaries</router-link
              >
            </span>
          </li>
          <li>
            <hr class="border mb-1" />
            <p class="font-semibold mb-1 tracking-wide">Contribute</p>
            <span class="space-y-2">
              <router-link
                to="/contribute/network"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300':
                    activeLink === '/contribute/network',
                  'font-normal': activeLink !== '/contribute/network',
                }"
                >Contribute to the Network</router-link
              >
              <router-link
                to="/contribute/magazine"
                class="block px-4 font-normal"
                :class="{
                  'font-bold text-amber-300':
                    activeLink === '/contribute/magazine',
                  'font-normal': activeLink !== '/contribute/magazine',
                }"
                >Contribute to the Magazine</router-link
              >
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
      activeLink: "/home",
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuExpanded = !this.isMobileMenuExpanded;
    },
    setActiveLink(link) {
      this.activeLink = link;
      this.activeDropdown = null;
    },
    isChildActive(parent) {
      return this.activeLink && this.activeLink.startsWith(parent);
    },
  },
  watch: {
    $route(to) {
      this.activeLink = to.path;
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
      90deg,
      rgba(0, 33, 132, 0.7) 5%,
      rgba(40, 11, 139, 0.9) 25%,
      rgba(40, 11, 139, 0.9) 75%,
      rgba(0, 33, 132, 0.7) 95%,
      rgba(0, 33, 132, 0.7) 100%
    );
  }

  .dropdown-bg {
    background: #280b8b;
    z-index: 50;
  }
}
</style>
