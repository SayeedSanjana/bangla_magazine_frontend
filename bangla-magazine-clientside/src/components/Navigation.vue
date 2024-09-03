<template>
  <!-- Navigation Bar -->
  <nav class="bg-gradient-to-r from-autumn-auburn to-burgundy-crush shadow-lg">
    <div class="container mx-auto p-4 md:p-5 flex justify-between md:justify-around lg:justify-around">
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" id="menu-toggle" class="md:hidden flex text-white focus:outline-none">
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
      <div :class="{ block: isMenuVisible, hidden: !isMenuVisible }" class="space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-6 md:w-full md:justify-center text-lg">
        <router-link
          to="/"
          class="text-gray-200 hover:text-honey-gold font-bold flex items-center"
          :class="{
            'underline decoration-2 text-gray-200  underline-offset-8':
              isActiveRoute('/'),
          }">
          <img src="../assets/svg/home.svg" class="w-5 md:w-6 h-5 md:h-6" alt="Home"/>
          <span class="ml-2">Home</span>
        </router-link>
        <router-link
          to="/about-us"
          class="text-gray-200 hover:text-honey-gold font-semibold flex items-center"
          :class="{
            'underline decoration-2 text-gray-200  underline-offset-8':
              isActiveRoute('/about-us'),
          }"
        >
          <img src="../assets/svg/about.svg" class="w-5 md:w-6 h-5 md:h-6" alt="About Us"/>
          <span class="ml-2">About Us</span>
        </router-link>
        <router-link
          to="/contribute"
          class="text-gray-200 hover:text-honey-gold font-semibold flex items-center"
          :class="{
            'underline decoration-2 text-gray-200 underline-offset-8':
              isActiveRoute('/contribute'),
          }"
        >
          <img src="../assets/svg/contribute.svg" class="w-5 md:w-6 h-5 md:h-6" alt="Contribute" />
          <span class="ml-2">How To Get Involved?</span>
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
</style>
  