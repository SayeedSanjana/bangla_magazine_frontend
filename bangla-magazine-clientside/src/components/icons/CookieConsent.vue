<template>
    <div v-if="visible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div class="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 class="text-lg font-bold mb-4">Cookie Consent</h2>
        <p class="text-sm mb-4">
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
        </p>
        <div class="flex justify-between items-center">
          <a href="#" class="text-cyan-600 font-semibold hover:underline text-sm">Cookie Management</a>
          <button @click="acceptCookies" class="bg-cyan-600 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Accept it!
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false // Default to false; will be set based on localStorage in mounted()
      };
    },
    methods: {
      hasAcceptedCookies() {
        return localStorage.getItem('cookies_accepted') === 'true';
      },
      acceptCookies() {
        localStorage.setItem('cookies_accepted', 'true');
        this.visible = false;
      }
    },
    created() {
    // Delay showing the popup by 5 seconds
    setTimeout(() => {
      if (!this.hasAcceptedCookies()) {
        this.visible = true;
      }
    }, 7000); // 5000 milliseconds = 5 seconds
    console.log('CookieConsent mounted: visible =', this.visible);
  }
};
  </script>
  
  <style scoped>

  </style>
  