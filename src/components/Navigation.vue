<template>
  <!-- Navigation Bar -->
  <nav
    class="nav-bg shadow-lg font-semibold border-b border-opacity-30 border-gray-300"
  >
    <div
      class="container mx-auto p-4 md:p-6 flex justify-between md:justify-around lg:justify-around"
    >
      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        id="menu-toggle"
        class="md:hidden flex text-white focus:outline-none"
      >
        <svg
          class="w-8 h-8"
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

      <!-- Navigation Links -->
      <div
        :class="{ block: isMenuVisible, hidden: !isMenuVisible }"
        class="space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-6 md:w-full md:justify-center"
      >
        <router-link
          to="/"
          class="text-white flex items-center text-base font-light"
          :class="{
            'underline decoration-2 text-amber-700  underline-offset-8':
              isActiveRoute('/'),
          }"
        >
          <!-- <img
            src="../assets/svg/home.svg"
            class="w-5 md:w-6 h-5 md:h-6 font-bold"
            alt="Home"
          /> -->
          <span class="ml-2">Home</span>
        </router-link>
        <router-link
          to="/about-us"
          class="text-white flex items-center text-base font-light"
          :class="{
            'underline decoration-2 text-amber-700  underline-offset-8':
              isActiveRoute('/about-us'),
          }"
        >
          <!-- <img
            src="../assets/svg/about.svg"
            class="w-5 md:w-6 h-5 md:h-6 font-bold"
            alt="About Us"
          /> -->
          <span class="ml-2">About Us</span>
        </router-link>
        <router-link
          to="/contribute"
          class="text-white flex items-center text-base font-light"
          :class="{
            'underline decoration-2 text-amber-700 underline-offset-8':
              isActiveRoute('/contribute'),
          }"
        >
          <!-- <img
            src="../assets/svg/contribute.svg"
            class="w-5 md:w-6 h-5 md:h-6 font-bold"
            alt="Contribute"
          /> -->
          <span class="ml-2">Contribute Now</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isMenuVisible: false, // Controls visibility of the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; // Toggle menu visibility
    },
    isActiveRoute(route) {
      return this.$route.path === route; // Check if the current route matches the given route
    },
  },
};
</script>

<style>
.nav-bg {
  background: linear-gradient(
    90deg,
    #5f7aa0,
    #280b8b,
    rgb(109, 109, 138)
  ); /* 90 degrees, red -> blue -> green */
}
</style>
