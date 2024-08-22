<template>
    <!-- Navigation Bar -->
    <nav class="bg-gray-700 shadow-lg">
      <div class="container mx-auto p-4 flex justify-between md:justify-around lg:justify-around">
        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" id="menu-toggle" class="md:hidden flex text-white focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
  
        <!-- Navigation Links -->
        <div :class="{'block': isMenuVisible, 'hidden': !isMenuVisible}" 
             class="space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-6 md:w-full md:justify-center">
          <button @click="home" class="text-gray-200 hover:text-rose-400 font-bold flex items-center">
            <img src="../../assets/svg/home.svg" class="w-5 md:w-6 h-5 md:h-6" alt="Home">
            <span class="ml-2">Home</span>
          </button>
          <button @click="aboutUs" class="text-gray-200 hover:text-rose-400 font-semibold flex items-center">
            <img src="../../assets/svg/about.svg" class="w-5 md:w-6 h-5 md:h-6" alt="About Us">
            <span class="ml-2">About Us</span>
          </button>
          <button @click="contribute" class="text-gray-200 hover:text-rose-400 font-semibold flex items-center">
            <img src="../../assets/svg/contribute.svg" class="w-5 md:w-6 h-5 md:h-6" alt="Contribute">
            <span class="ml-2">How To Get Involved?</span>
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuVisible: false, // Controls visibility of the mobile menu
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible; // Toggle menu visibility
      },
      home() {
        this.$router.push('/');
      },
      aboutUs() {
        this.$router.push('/about-us');
      },
      contribute() {
        this.$router.push('/contribute');
      }
    }
  }
  </script>
  
  <style>
  /* Ensuring the background color and opacity */
  nav.bg-cyan-600 {
    background-color: rgba(8, 165, 178, 0.45); /* Adjust the opacity here */
  }
  
  nav button {
    color: inherit; /* Ensures that the text color is inherited and not affected by opacity */
  }
  </style>
  